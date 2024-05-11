import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Store } from "@ngxs/store";
import { switchMap } from "rxjs";

import { AuthorComponent } from "../../core/components/author/author.component";
import { CommentComponent } from "../../core/components/comment/comment.component";
import { Post, PostState } from "../../core/state";

@UntilDestroy()
@Component({
  selector: "app-post",
  standalone: true,
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.scss",
  imports: [AsyncPipe, AuthorComponent, CommentComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly activatedRoute$ = inject(ActivatedRoute);

  public post$ = this.store.select(PostState.selectPost);
  public isLoading$ = this.store.select(PostState.selectLoading);

  public ngOnInit(): void {
    this.activatedRoute$.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => this.store.dispatch(new Post.LoadOne(params["slug"]))),
      )
      .subscribe();
  }
}
