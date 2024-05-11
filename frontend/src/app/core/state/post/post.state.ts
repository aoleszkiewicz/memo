import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { catchError, EMPTY, of, tap } from "rxjs";

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
    isLoading: false,
  },
})
@Injectable()
export class PostState {
  private readonly postService = inject(PostService);

  @Selector()
  public static selectLoading(state: PostStateModel): PostStateModel["isLoading"] {
    return state.isLoading;
  }

  @Selector()
  public static selectPosts(state: PostStateModel): PostStateModel["posts"] {
    return state.posts;
  }

  @Selector()
  public static selectPost(state: PostStateModel): PostStateModel["post"] {
    return state.post;
  }

  @Action(Post.LoadAll)
  public loadPosts(ctx: StateContext<PostStateModel>) {
    ctx.patchState({ isLoading: true });
    const state = ctx.getState();

    if (state.posts.data.length) {
      ctx.patchState({ isLoading: false });
      return of(state.posts);
    }

    return this.postService.getPosts().pipe(
      tap((posts) => {
        ctx.patchState({ posts, isLoading: false });
        ctx.dispatch(new Post.LoadAllSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        const { error: errorDetails } = error;
        ctx.dispatch(new Post.LoadAllFailure(errorDetails));
        return EMPTY;
      }),
    );
  }

  @Action(Post.LoadOne)
  public loadPost(ctx: StateContext<PostStateModel>, { slug }: Post.LoadOne) {
    ctx.patchState({ isLoading: true });
    const state = ctx.getState();
    const { data: lastViewedPosts } = state.lastViewedPosts;
    const lastViewedPost = lastViewedPosts.find((post) => post.attributes.slug === slug);

    if (lastViewedPost) {
      return ctx.patchState({ post: lastViewedPost, isLoading: false });
    }

    return this.postService.getPost(slug).pipe(
      tap((post) => {
        // TODO: Fix setting meta to empty object
        ctx.patchState({
          post,
          lastViewedPosts: { data: [post, ...lastViewedPosts], meta: {} },
          isLoading: false,
        });
        ctx.dispatch(new Post.LoadOneSuccess());
      }),
      catchError((error: HttpErrorResponse) => {
        const { error: errorDetails } = error;
        ctx.dispatch(new Post.LoadOneFailure(errorDetails));
        return EMPTY;
      }),
    );
  }
}
