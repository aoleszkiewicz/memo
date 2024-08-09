import { Component } from "@angular/core";
import { SecretCodeComponent } from "../../../core/components/auth/secret-code/secret-code.component";

@Component({
  selector: "app-secret-code-page",
  standalone: true,
  template: ` <app-secret-code></app-secret-code> `,
  styles: ``,
  imports: [SecretCodeComponent],
})
export class SecretCodePageComponent {}
