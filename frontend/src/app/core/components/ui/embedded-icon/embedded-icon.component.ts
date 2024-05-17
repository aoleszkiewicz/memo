import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-embedded-icon",
  standalone: true,
  imports: [NgClass],
  template: `
    <div>
      <i class="pi" [ngClass]="name()"></i>
    </div>
  `,
  styles: `
    div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        padding: 0.65rem 0.65rem;
        border-radius: 50%;
        background: var(--secondary);

        i {
        font-size: 1rem;
        }
    }
  `,
})
export class EmbeddedIconComponent {
  name = input.required<string>();
}
