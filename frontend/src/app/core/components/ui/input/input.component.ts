import { Component, computed, input } from "@angular/core";
import { AbstractControl, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="input-wrapper">
      @if (label()) {
        <label class="label">{{ label() }}</label>
      }
      <input
        [id]="name()"
        [name]="name()"
        [type]="type()"
        [required]="required()"
        [placeholder]="placeholder()"
        [formControl]="control()"
        class="input"
      />
      @if (errors() && control().invalid && (control().touched || showErrors())) {
        @for (error of errors(); track error) {
          <small class="error">{{ error }}</small>
        }
      }
    </div>
  `,
  styles: `
    .label {
      color: #666666;
      font-size: 1rem;
      padding-left: 0.1rem;
    }

    .input {
      &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      padding: 1rem 1.5rem;
      border: 1px solid rgba(102, 102, 102, 0.35);
      border-radius: 0.75rem;
      width: 100%;
    }

    .error {
      font-size: 0.75rem;
      color: #ff0000;
    }
  `,
})
export class InputComponent {
  name = input.required<string>();
  control = input.required<FormControl>();
  type = input<string>("text");
  required = input<boolean>(false);
  placeholder = input<string>("");
  label = input<string>();
  errors = input<string[]>([]);
  showErrors = input<boolean>();
}
