import { AfterViewInit, Component, ElementRef, inject, Renderer2, viewChild } from "@angular/core";

@Component({
  selector: "app-content-indicator",
  standalone: true,
  template: `
    <div #wrapper class="content-indicator-wrapper">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styles: `
    .content-indicator-wrapper {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        div {
            width: 100%;
            height: .5rem;
            background: var(--secondary);
        }
    }
  `,
  imports: [],
})
export class ContentIndicatorComponent implements AfterViewInit {
  renderer = inject(Renderer2);
  wrapper = viewChild<ElementRef<HTMLDivElement>>("wrapper");

  ngAfterViewInit(): void {
    const childs = this.wrapper()?.nativeElement.querySelectorAll("div");

    childs?.forEach((child) => {
      const randomWidth = `${Math.floor(Math.random() * (75 - 15 + 1)) + 15}%`;
      this.renderer.setStyle(child, "width", randomWidth);
    });
  }
}
