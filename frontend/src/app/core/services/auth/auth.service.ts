import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  readonly http = inject(HttpClient);
  private router = inject(Router);
  private authorized = signal<boolean>(
    this.verifySecret(localStorage.getItem("auth_data")!) ?? false,
  );

  get isAuthorized(): boolean {
    return this.authorized();
  }

  login(email: string, password: string) {
    console.log(email, password);
    return;
  }

  signup(firstname: string, lastname: string, email: string, password: string) {
    console.log(firstname, lastname, email, password);
    return;
  }

  verifySecret(secret: string) {
    return secret === environment.secret;
  }

  authorizeViaSecret(secret: string) {
    if (this.verifySecret(secret)) {
      this.authorized.set(true);
      localStorage.setItem("auth_data", secret);
      this.router.navigate(["/"]);
    }
  }

  logout() {
    this.authorized.set(false);
    localStorage.removeItem("auth_data");
  }
}
