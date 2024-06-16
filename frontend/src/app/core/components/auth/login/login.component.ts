import { Component, inject, signal } from "@angular/core";
import { InputComponent } from "../../ui/input/input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorType, getErrorMessage } from "../../../utilities/errorMessages";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, RouterLink],
})
export class LoginComponent {
  readonly formBuilder = inject(FormBuilder);
  showErrors = signal<boolean>(false);

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  submit() {
    const form = this.loginForm;
    this.showErrors.set(true);

    if (form.valid) {
      console.log("Making a request to API..");
    }
  }

  get email() {
    return this.loginForm.get("email") as FormControl;
  }

  get password() {
    return this.loginForm.get("password") as FormControl;
  }

  getErrors(control: FormControl) {
    const errors = control.errors || {};

    const messages = Object.entries(errors)
      .filter(([_, details]) => !!details)
      .map(([key, details]) => getErrorMessage(key as ErrorType, details));

    return messages;
  }
}
