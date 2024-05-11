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
  title = input<string>();
  thumbnail = input<string>();
  authorName = input<string>();
  authorAvatar = input<string>();
  date = input<Date>();
  slug = input<string>();
}
