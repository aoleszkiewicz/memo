import { Component, input } from "@angular/core";

@Component({
  selector: "app-author",
  standalone: true,
  imports: [],
  template: `
    <div class="author">
      <img [src]="avatar()" alt="{{ name() }} avatar" class="post-tile-thumbnail" />
      <span>{{ name() }}</span>
    </div>
  `,
  styles: `
  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }`,
})
export class AuthorComponent {
  name = input<string>();
  avatar = input<string>();
}
