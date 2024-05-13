import { JsonPipe } from "@angular/common";
import { Component, computed, effect, ElementRef, input, signal, viewChild } from "@angular/core";

import { Media } from "../../types";
import { AuthorComponent } from "../embedded-icon/embedded-icon.component";

@Component({
  selector: "app-gallery",
  standalone: true,
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
  imports: [JsonPipe, AuthorComponent],
})
export class GalleryComponent {
  images = input.required<Media<"multiple">>();

  gallery = viewChild<ElementRef<HTMLDivElement>>("gallery");
  galleryChildrens = computed(() => this.gallery()?.nativeElement.children as HTMLCollection);
  currentIndex = signal(0);

  constructor() {
    effect(() => {
      this.galleryChildrens()[this.currentIndex()].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  public next() {
    this.currentIndex.update((index) => {
      return (index + 1) % this.galleryChildrens().length;
    });
  }

  public prev() {
    this.currentIndex.update((index) => {
      return (index - 1 + this.galleryChildrens().length) % this.galleryChildrens().length;
    });
  }

  public set(index: number) {
    this.currentIndex.set(index);
  }
}
