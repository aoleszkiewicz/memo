import { Component, computed, input } from "@angular/core";

import { SanitizePipe } from "../../pipes/sanitize.pipe";

const FALLBACK_SONG_URL =
  "https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=513e81b9098c4e9b";

@Component({
  selector: "app-song-frame",
  standalone: true,
  imports: [SanitizePipe],
  template: `
    <iframe
      style="border-radius: 12px"
      [src]="finalUrl() | sanitize"
      width="100%"
      frameBorder="0"
      allowfullscreen="false"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  `,
  styles: `
    iframe {
        height: 80px;
        max-height: fit-content; 
    }
  `,
})
export class SongFrameComponent {
  readonly themeQueryParam = "utm_source=generator&theme=1";
  song = input.required<{ url: string }>();

  finalUrl = computed(() => {
    const extractedTrack = this.song().url.match(/track\/([a-zA-Z0-9]+)/);

    if (!extractedTrack) {
      return FALLBACK_SONG_URL;
    }

    return `https://open.spotify.com/embed/track/${extractedTrack[1]}?${this.themeQueryParam}`;
  });
}
