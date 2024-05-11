import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { Store } from "@ngxs/store";

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

  public posts$ = this.store.select(PostState.selectPosts);
  public isLoading$ = this.store.select(PostState.selectLoading);

  public ngOnInit(): void {
    this.store.dispatch(new Post.LoadAll());
  }
}
