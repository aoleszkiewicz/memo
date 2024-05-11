import { HttpInterceptorFn } from "@angular/common/http";

import { environment } from "../../../environments/environment";

export const strapiTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const { apiToken, apiUrl } = environment;

  if (req.url.startsWith(apiUrl)) {
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${apiToken}`),
    });

    return next(authReq);
  }

  return next(req);
};
