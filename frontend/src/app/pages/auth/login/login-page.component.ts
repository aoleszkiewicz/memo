import { Component } from "@angular/core";
import { LoginComponent } from "../../../core/components/auth/login/login.component";

@Component({
  selector: "app-login-page",
  standalone: true,
  template: ` <app-login></app-login> `,
  styles: ``,
  imports: [LoginComponent],
})
export class LoginPageComponent {}
