import { Component, input } from "@angular/core";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [],
  template: `
    <span>Comment</span>
    <p>{{ comment() }}</p>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    span {
      font-weight: 500;
    }
  `,
})
export class CommentComponent {
  comment = input<string>();
}
