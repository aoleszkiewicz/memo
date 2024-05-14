import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { AuthorComponent } from "../author/author.component";

@Component({
  selector: "app-post-tile",
  standalone: true,
  template: `
    <div class="post-tile">
      <img
        [src]="thumbnail()"
        [alt]="title()"
        class="post-tile-thumbnail"
        [routerLink]="['/post', slug()]"
      />
      <div class="post-tile-details">
        <h5>{{ title() }}</h5>
        <app-author [name]="authorName()" [avatar]="authorAvatar()"></app-author>
        <span>{{ date() }}</span>
      </div>
    </div>
  `,
  styleUrls: ["./post-tile.component.scss"],
  imports: [RouterLink, AuthorComponent],
})
export class PostTileComponent {
  title = input.required<string>();
  thumbnail = input.required<string>();
  authorName = input.required<string>();
  authorAvatar = input.required<string>();
  date = input.required<Date>();
  slug = input.required<string>();
}
