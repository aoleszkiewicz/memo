import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  readonly http = inject(HttpClient);

  login(email: string, password: string) {
    console.log(email, password);
    return;
  }

  signup(firstname: string, lastname: string, email: string, password: string) {
    console.log(firstname, lastname, email, password);
    return;
  }
}
