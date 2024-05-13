import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { catchError, EMPTY, tap } from "rxjs";

import { PostService } from "../../services/post.service";
import { Post } from "./post.actions";
import { PostStateModel } from "./post.state-model";

const POST_STATE_TOKEN = new StateToken<PostStateModel>("post");

@State<PostStateModel>({
  name: POST_STATE_TOKEN,
  defaults: {
    posts: { data: [], meta: {} },
    post: null,
    lastViewedPosts: { data: [], meta: {} },
    pagination: {
      page: 1,
      limit: 5,
      reachedMax: false,
    },
  },
})
@Injectable()
export class PostState {
  private readonly postService = inject(PostService);

  @Selector()
  public static getPagination(state: PostStateModel): PostStateModel["pagination"] {
    return state.pagination;
  }

  @Selector()
  public static getPosts(state: PostStateModel): PostStateModel["posts"] {
    return state.posts;
  }

  @Selector()
  public static getPost(state: PostStateModel): PostStateModel["post"] {
    return state.post;
  }

  @Action(Post.GetPosts)
  public getPosts(ctx: StateContext<PostStateModel>) {
    const { posts, pagination } = ctx.getState();
    const { page, limit } = pagination;

    return this.postService.getPosts(page, limit).pipe(
      tap((newPosts) => {
        if (!newPosts.data.length) {
          ctx.patchState({ pagination: { ...pagination, reachedMax: true } });
          return ctx.dispatch(new Post.GetPostsReachedMaxPagination());
        }

        ctx.patchState({
          posts: { data: [...posts.data, ...newPosts.data], meta: { ...newPosts.meta } },
          pagination: { ...pagination, page: page + 1 },
        });
        return ctx.dispatch(new Post.GetPostsSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        ctx.dispatch(new Post.GetPostsFailure(error.error));
        return EMPTY;
      }),
    );
  }

  @Action(Post.GetPostBySlug)
  public getPost(ctx: StateContext<PostStateModel>, { slug }: Post.GetPostBySlug) {
    const { lastViewedPosts } = ctx.getState();
    const existingPost = lastViewedPosts.data.find((post) => post.attributes.slug === slug);

    if (existingPost) {
      return ctx.patchState({ post: existingPost });
    }

    return this.postService.getPost(slug).pipe(
      tap((post) => {
        ctx.patchState({
          post,
          lastViewedPosts: { data: [post, ...lastViewedPosts.data], meta: lastViewedPosts.meta },
        });
        ctx.dispatch(new Post.GetPostBySlugSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        ctx.dispatch(new Post.GetPostBySlugFailure(error.error));
        return EMPTY;
      }),
    );
  }
}
