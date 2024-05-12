/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
// eslint-disable-next-line import/no-extraneous-dependencies
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
  },
})
@Injectable()
export class PostState {
  private readonly postService = inject(PostService);

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
    const { posts: statePosts } = ctx.getState();

    if (statePosts.data.length > 0) {
      ctx.dispatch(new Post.GetPostsSuccess());
      return;
    }

    return this.postService.getPosts().pipe(
      tap((posts) => {
        ctx.patchState({ posts });
        ctx.dispatch(new Post.GetPostsSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        const { error: errorDetails } = error;
        ctx.dispatch(new Post.GetPostsFailure(errorDetails));
        return EMPTY;
      }),
    );
  }

  @Action(Post.GetPostBySlug)
  public getPost(ctx: StateContext<PostStateModel>, { slug }: Post.GetPostBySlug) {
    const state = ctx.getState();
    const { data: lastViewedPosts } = state.lastViewedPosts;
    const lastViewedPost = lastViewedPosts.find((post) => post.attributes.slug === slug);

    if (lastViewedPost) {
      return ctx.patchState({ post: lastViewedPost });
    }

    return this.postService.getPost(slug).pipe(
      tap((post) => {
        // TODO: Fix setting meta to empty object
        ctx.patchState({
          post,
          lastViewedPosts: { data: [post, ...lastViewedPosts], meta: {} },
        });
        ctx.dispatch(new Post.GetPostBySlugSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        const { error: errorDetails } = error;
        ctx.dispatch(new Post.GetPostBySlugFailure(errorDetails));
        return EMPTY;
      }),
    );
  }
}
