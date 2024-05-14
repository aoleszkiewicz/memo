import { inject, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "sanitize", pure: true, standalone: true })
export class SanitizePipe implements PipeTransform {
  private domSanitizer = inject(DomSanitizer);

  transform(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
