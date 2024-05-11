import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full",
  },
  {
    path: "posts",
    loadComponent: () => import("./pages/posts/posts.component").then((m) => m.PostsComponent),
  },
  {
    path: "post/:slug",
    loadComponent: () => import("./pages/post/post.component").then((m) => m.PostComponent),
  },
  {
    path: "**",
    redirectTo: "posts",
  },
];
