import { NgClass, TitleCasePipe } from "@angular/common";
import { Component, input, signal } from "@angular/core";

@Component({
  selector: "app-expandable-content",
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  template: `
    <div class="detailer" (click)="handleClick()">
      <i class="pi" [ngClass]="expand() ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
      <span>{{ label() | titlecase }}</span>
    </div>

    <div class="content" [ngClass]="expand() ? 'expanded' : 'collapsed'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: "./expandable-content.component.scss",
})
export class ExpandableContentComponent {
  label = input.required<string>();
  expand = signal(false);

  handleClick() {
    this.expand.update((val) => !val);
  }
}
