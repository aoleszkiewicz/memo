import { NgStyle } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ButtonComponent } from "../../ui/button/button.component";
import { AuthorComponent } from "../author/author.component";
import { ContentIndicatorComponent } from "../content-indicator/content-indicator.component";

@Component({
  selector: "app-post-tile",
  standalone: true,
  template: `
    <div class="post-tile" [style.background-image]="thumbnailCombinedUrl()">
      <div class="post-tile-details">
        <span class="date">{{ date() }}</span>
        <h3>{{ title() }}</h3>
        <app-content-indicator />
        <div class="post-tile-spacer">
          <app-author [name]="authorName()" [avatar]="authorAvatar()" />
          <app-button
            [routerLink]="['/post', slug()]"
            type="primary"
            label="Open"
            icon="pi-external-link"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./post-tile.component.scss"],
  imports: [RouterLink, NgStyle, AuthorComponent, ButtonComponent, ContentIndicatorComponent],
})
export class PostTileComponent {
  title = input.required<string>();
  thumbnail = input.required<string>();
  authorName = input.required<string>();
  authorAvatar = input.required<string>();
  date = input.required<Date>();
  slug = input.required<string>();

  thumbnailCombinedUrl = computed(() => `url(${this.thumbnail()})`);
}
