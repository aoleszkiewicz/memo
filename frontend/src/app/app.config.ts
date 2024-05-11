import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NgxsModule } from "@ngxs/store";

import { routes } from "./app.routes";
import { strapiTokenInterceptor } from "./core/interceptors/strapi-token.interceptor";
import { PostState } from "./core/state/post";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([strapiTokenInterceptor])),
    importProvidersFrom(
      NgxsModule.forRoot([PostState], {
        developmentMode: isDevMode(),
      }),
    ),
  ],
};
