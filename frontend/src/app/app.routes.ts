import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full",
  },
  {
    path: "posts",
    loadComponent: () => import("./pages/posts/posts.component").then((m) => m.PostsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: "post/:slug",
    loadComponent: () => import("./pages/post/post.component").then((m) => m.PostComponent),
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () => import("./pages/auth/auth.routes").then((m) => m.routes),
  },
  {
    path: "**",
    redirectTo: "posts",
  },
];
