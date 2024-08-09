import { NgClass, NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink],
  template: `
    <button
      [ngClass]="[size(), type(), disabled() ? 'disabled' : '']"
      [class.icon-only]="iconOnly()"
      [ngStyle]="{ width: fullWidth() ? '100%' : 'fit-content' }"
      [disabled]="disabled()"
      [routerLink]="redirectTo()"
    >
      @if (icon()) {
        <i class="pi" [ngClass]="icon()"></i>
      }
      @if (label() && !iconOnly()) {
        <span>{{ label() }}</span>
      }
    </button>
  `,
  styles: `
    button {
        font: inherit;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: fit-content;
        border: 0;
        gap: 0.5rem;
        line-height: 1rem;
        transition: all .3s ease;

        &:hover {
          filter: brightness(1.1);
        }

        &.primary {
            font-weight: 500;
            background: var(--primary);

            span, i {
              color: var(--background);
            }
          }

        &.secondary {
          font-weight: 400;
          background: var(--secondary);

          span, i {
            color: var(--text);
          }
        }

        &.small, &.medium {
          border-radius: 12rem;
        }

        &.small {
          padding: 0.5rem 0.65rem;

          &.icon-only {
            padding: 0.5rem !important;
          }

          span, i {
            font-size: 1rem;
          }
        }

        &.medium {
          padding: 0.7rem 0.85rem;

          &.icon-only {
            padding: 0.7rem !important;
          }

          span, i {
            font-size: 1.1rem;
          }
        }
        
        &.large {
          border-radius: 1rem;
          padding: 1rem 1.1rem;

          &.icon-only {
            padding: 1rem !important;
          }

          span, i {
            font-size: 1.15rem;
          }
        }

        &.disabled {
          cursor: not-allowed !important;
          pointer-events: none !important;
          opacity: 0.5 !important;
        }
    }
  `,
})
export class ButtonComponent {
  icon = input<string>();
  label = input<string>();
  size = input<"small" | "medium" | "large">("medium");
  type = input<"primary" | "secondary" | "cancel" | "destructive">("secondary");
  iconOnly = input<boolean>(false);
  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);
  redirectTo = input<string>("");
}
