import { Component, OnInit, inject, signal } from "@angular/core";
import { InputComponent } from "../../ui/input/input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { RouterLink } from "@angular/router";
import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorType, getErrorMessage } from "../../../utilities/errorMessages";

@Component({
  selector: "app-sign-up",
  standalone: true,
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.scss",
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, RouterLink, CheckboxComponent],
})
export class SignUpComponent {
  readonly formBuilder = inject(FormBuilder);
  showErrors = signal<boolean>(false);

  signUpForm = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    terms: [false, [Validators.requiredTrue]],
  });

  submit() {
    const form = this.signUpForm;
    this.showErrors.set(true);

    if (form.valid) {
      console.log("Making a request to API..");
    }
  }

  get firstName() {
    return this.signUpForm.get("firstName") as FormControl;
  }

  get lastName() {
    return this.signUpForm.get("lastName") as FormControl;
  }

  get email() {
    return this.signUpForm.get("email") as FormControl;
  }

  get password() {
    return this.signUpForm.get("password") as FormControl;
  }

  get terms() {
    return this.signUpForm.get("terms") as FormControl;
  }

  getErrors(control: FormControl) {
    const errors = control.errors || {};

    const messages = Object.entries(errors)
      .filter(([_, details]) => !!details)
      .map(([key, details]) => getErrorMessage(key as ErrorType, details));

    return messages;
  }
}
