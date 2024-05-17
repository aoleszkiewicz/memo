import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Actions, ofActionSuccessful, Store } from "@ngxs/store";

import { PostTileComponent } from "../../core/components/post/post-tile/post-tile.component";
import { ButtonComponent } from "../../core/components/ui/button/button.component";
import { SearchBarComponent } from "../../core/components/ui/search-bar/search-bar.component";
import { Post, PostState } from "../../core/state/post";

@UntilDestroy()
@Component({
  selector: "app-posts",
  standalone: true,
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PostTileComponent, AsyncPipe, SearchBarComponent, ButtonComponent],
})
export class PostsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly actions$ = inject(Actions);

  public posts$ = this.store.select(PostState.getPosts);
  public pagination$ = this.store.select(PostState.getPagination);

  loading = signal<boolean>(false);

  public ngOnInit(): void {
    if (this.store.selectSnapshot(PostState.getPosts).data.length === 0) {
      this.store.dispatch(new Post.GetPosts());
    }

    this.actions$.pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsSuccess)).subscribe({
      next: () => {
        this.loading.set(false);
        console.log("Posts loaded successfully!");
      },
    });

    this.actions$.pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsFailure)).subscribe({
      next: () => {
        this.loading.set(false);
        console.log("Posts loaded failure!");
      },
    });

    this.actions$
      .pipe(untilDestroyed(this), ofActionSuccessful(Post.GetPostsReachedMaxPagination))
      .subscribe({
        next: () => {
          this.loading.set(false);
          console.log("Reached max pagination!");
        },
      });
  }

  public loadMore(): void {
    this.loading.set(true);
    this.store.dispatch(new Post.GetPosts());
  }
}
