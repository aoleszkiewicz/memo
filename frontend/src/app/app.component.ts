import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { HeaderComponent } from "./core/components/ui/header/header.component";

@UntilDestroy()
@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {}
