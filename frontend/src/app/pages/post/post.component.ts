import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Actions, ofActionSuccessful, Store } from "@ngxs/store";
import { switchMap } from "rxjs";

import { AuthorComponent } from "../../core/components/author/author.component";
import { ExpandableContentComponent } from "../../core/components/expandable-content/expandable-content.component";
import { GalleryComponent } from "../../core/components/gallery/gallery.component";
import { SongFrameComponent } from "../../core/components/song-frame/song-frame.component";
import { Post, PostState } from "../../core/state";

@UntilDestroy()
@Component({
  selector: "app-post",
  standalone: true,
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    AuthorComponent,
    RouterLink,
    GalleryComponent,
    ExpandableContentComponent,
    SongFrameComponent,
  ],
})
export class PostComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly actions$ = inject(Actions);
  private readonly activatedRoute$ = inject(ActivatedRoute);

  public post$ = this.store.select(PostState.getPost);

  public ngOnInit(): void {
    this.activatedRoute$.params
      .pipe(
        untilDestroyed(this),
        switchMap((params) => this.store.dispatch(new Post.GetPostBySlug(params["slug"]))),
      )
      .subscribe();

    this.actions$.pipe(ofActionSuccessful(Post.GetPostBySlugSuccess)).subscribe({
      next: () => {},
    });
  }
}
