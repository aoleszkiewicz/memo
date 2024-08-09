import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./login/login-page.component").then((m) => m.LoginPageComponent),
  },
  {
    path: "signup",
    loadComponent: () =>
      import("./sign-up/sign-up-page.component").then((m) => m.SignUpPageComponent),
  },
  {
    path: "secretCode",
    loadComponent: () =>
      import("./secretCode/secret-code-page.component").then((m) => m.SecretCodePageComponent),
  },
  {
    path: "**",
    redirectTo: "login",
  },
];
