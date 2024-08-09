import { Component, inject, signal } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { TitleCasePipe } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from "app/core/services/auth/auth.service";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  imports: [ButtonComponent, TitleCasePipe, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  menuItems = signal([{ name: "posts", url: "/posts" }]);
  protected authService = inject(AuthService);
}
