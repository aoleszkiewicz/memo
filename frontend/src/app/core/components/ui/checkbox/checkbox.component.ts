import { Component, input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="checkbox-wrapper">
      <input type="checkbox" [name]="name()" [id]="name()" [formControl]="control()" />
      <label [for]="name()">{{ label() }}</label>
    </div>
    @if (errors() && control().invalid && (control().touched || showErrors())) {
      @for (error of errors(); track error) {
        <small class="error">{{ error }}</small>
      }
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;

      .checkbox-wrapper {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        label {
          color: #666666;
          font-size: .75rem;
        }
      }
      
      .error {
        font-size: 0.75rem;
        color: #ff0000;
      }
    }
  `,
})
export class CheckboxComponent {
  name = input.required<string>();
  control = input.required<FormControl>();
  label = input<string>();
  errors = input<string[]>([]);
  showErrors = input<boolean>();
}
