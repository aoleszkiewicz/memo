import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { AuthorComponent } from "../author/author.component";

@Component({
  selector: "app-post-tile",
  standalone: true,
  templateUrl: "./post-tile.component.html",
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
