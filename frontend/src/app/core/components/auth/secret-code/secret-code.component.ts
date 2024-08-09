import { Component, inject, signal } from "@angular/core";
import { InputComponent } from "../../ui/input/input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorType, getErrorMessage } from "../../../utilities/errorMessages";
import { AuthService } from "app/core/services/auth/auth.service";

@Component({
  selector: "app-secret-code",
  standalone: true,
  templateUrl: "./secret-code.component.html",
  styleUrl: "./secret-code.component.scss",
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, RouterLink],
})
export class SecretCodeComponent {
  readonly formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  showErrors = signal<boolean>(false);

  secretCodeForm = this.formBuilder.group({
    secretCode: ["", [Validators.required]],
  });

  submit() {
    const form = this.secretCodeForm;
    this.showErrors.set(true);

    if (this.secretCodeForm.valid) {
      this.showErrors.set(false);
      const { secretCode } = this.secretCodeForm.value;
      this.authService.authorizeViaSecret(secretCode!);
    }
  }

  get secretCode() {
    return this.secretCodeForm.get("secretCode") as FormControl;
  }

  getErrors(control: FormControl) {
    const errors = control.errors || {};

    const messages = Object.entries(errors)
      .filter(([_, details]) => !!details)
      .map(([key, details]) => getErrorMessage(key as ErrorType, details));

    return messages;
  }
}
