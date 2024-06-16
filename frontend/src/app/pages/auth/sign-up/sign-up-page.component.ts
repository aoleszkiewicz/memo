import { Component } from "@angular/core";
import { SignUpComponent } from "../../../core/components/auth/sign-up/sign-up.component";

@Component({
  selector: "app-sign-up-page",
  standalone: true,
  template: `<app-sign-up></app-sign-up>`,
  styles: ``,
  imports: [SignUpComponent],
})
export class SignUpPageComponent {}
