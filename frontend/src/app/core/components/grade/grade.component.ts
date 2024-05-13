import { Component, computed, input } from "@angular/core";

// TODO: Add HTML Template and CSS Styles
@Component({
  selector: "app-grade",
  standalone: true,
  imports: [],
  template: "",
  styles: "",
})
export class GradeComponent {
  grade = input.required<number>();
  private readonly maxGrade = 10;
  finalGrade = computed<string>(() => `${this.grade}/${this.maxGrade}`);
}
