import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Actions, ofActionSuccessful, Store } from "@ngxs/store";

import { PostTileComponent } from "../../core/components/post-tile/post-tile.component";
import { Post, PostState } from "../../core/state/post";

@UntilDestroy()
@Component({
  selector: "app-posts",
  standalone: true,
  imports: [PostTileComponent, AsyncPipe],
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly actions$ = inject(Actions);

  public posts$ = this.store.select(PostState.getPosts);
  public pagination$ = this.store.select(PostState.getPagination);

  public ngOnInit(): void {
    if (this.store.selectSnapshot(PostState.getPosts).data.length === 0) {
      this.store.dispatch(new Post.GetPosts());
    }

    this.actions$.pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsSuccess)).subscribe({
      next: () => {
        console.log("Posts loaded successfully!");
      },
    });

    this.actions$.pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsFailure)).subscribe({
      next: () => {
        console.log("Posts loaded failure!");
      },
    });

    this.actions$
      .pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsReachedMaxPagination))
      .subscribe({
        next: () => {
          console.log("Reached max pagination!");
        },
      });
  }

  public loadMore(): void {
    this.store.dispatch(new Post.GetPosts());
  }
}
