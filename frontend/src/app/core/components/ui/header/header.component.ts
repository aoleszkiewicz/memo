import { Component, signal } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { TitleCasePipe } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  imports: [ButtonComponent, TitleCasePipe, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  menuItems = signal([{ name: "posts", url: "/posts" }]);
}
