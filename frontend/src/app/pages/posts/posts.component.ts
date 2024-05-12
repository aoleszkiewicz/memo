import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Actions, ofActionSuccessful, Store } from "@ngxs/store";

import { PostTileComponent } from "../../core/components/post-tile/post-tile.component";
import { Post, PostState } from "../../core/state/post";

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

  public ngOnInit(): void {
    this.store.dispatch(new Post.GetPosts());

    this.actions$.pipe(ofActionSuccessful(Post.GetPostsSuccess)).subscribe({
      next: () => {
        console.log("Posts loaded successfully!");
      },
    });
  }
}
