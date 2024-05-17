import { Component, input } from "@angular/core";

@Component({
  selector: "app-author",
  standalone: true,
  imports: [],
  template: `
    <div class="author">
      <img [src]="avatar()" alt="{{ name() }} avatar" />
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
      background: var(--accent);
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 540px) {
        max-width: 7rem;
      }
    }
  }`,
})
export class AuthorComponent {
  name = input.required<string>();
  avatar = input.required<string>();
}
