import { NgClass, TitleCasePipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  template: `
    <div class="search-bar-wrapper">
      <i class="pi pi-search"></i>
      <input #search type="search" [placeholder]="placeholder() | titlecase" />
    </div>
  `,
  styles: `
    :host {
        width: 100%;
        height: fit-content;
        position: relative;
        padding: 0 !important;
    }

    .search-bar-wrapper {
        font: inherit;
        width: inherit;
        height: inherit;
        border-radius: 0.625rem;
        padding-left: 0.8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--background);

        i, input::placeholder {
            color: gray;
        }

        input {
            background: inherit;
            font: inherit;
            width: inherit;
            height: inherit;
            padding: 0.8rem;
            border-radius: 0.625rem;
            border: none;
            caret-color: blue;

            &:focus {
                outline: none;
            }

            &::placeholder {
                font-weight: 400;
                padding-left: 0.125rem;
            }

            &::-webkit-search-cancel-button {
              -webkit-appearance: none;
              cursor: pointer;
              width: 1.25rem;
              height: 1.25rem;
              background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' width='18' height='18' fill='none'><path d='M9 18C13.9235 18 18 13.9147 18 9C18 4.07647 13.9147 0 8.99118 0C4.07647 0 0 4.07647 0 9C0 13.9147 4.08529 18 9 18ZM5.88529 12.8471C5.48824 12.8471 5.16176 12.5118 5.16176 12.1059C5.16176 11.9118 5.24118 11.7353 5.37353 11.5941L7.95882 9.00882L5.37353 6.42353C5.24118 6.28235 5.16176 6.10588 5.16176 5.91176C5.16176 5.50588 5.48824 5.18824 5.88529 5.18824C6.09706 5.18824 6.26471 5.25882 6.39706 5.4L8.99118 7.98529L11.6118 5.39118C11.7618 5.24118 11.9206 5.17059 12.1147 5.17059C12.5118 5.17059 12.8382 5.49706 12.8382 5.89412C12.8382 6.09706 12.7765 6.25588 12.6265 6.41471L10.0324 9.00882L12.6176 11.5853C12.7588 11.7353 12.8294 11.9029 12.8294 12.1059C12.8294 12.5118 12.5029 12.8471 12.0971 12.8471C11.8941 12.8471 11.7176 12.7588 11.5765 12.6265L8.99118 10.0412L6.42353 12.6265C6.28235 12.7676 6.09706 12.8471 5.88529 12.8471z' fill='gray' fill-opacity='0.6'/></svg>");
              background-size: contain;
              border-radius: 50%;
            }
        }
    }
  `,
})
export class SearchBarComponent {
  placeholder = input<string>("search");
}
