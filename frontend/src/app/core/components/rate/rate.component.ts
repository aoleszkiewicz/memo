import { Component, computed, input } from "@angular/core";

// TODO: Add HTML Template and CSS Styles
@Component({
  selector: "app-rate",
  standalone: true,
  imports: [],
  template: "",
  styles: "",
})
export class RateComponent {
  rating = input.required<number>();
  finalRating = computed<string>(() => `${this.rating}/10`);
}
