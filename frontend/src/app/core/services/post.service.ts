import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Post, Response, SnapshotPost } from "../types";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getPosts(page: number, limit: number): Observable<Response<SnapshotPost, true>> {
    return this.httpClient.get<Response<Post, true>>(`${this.apiUrl}/posts`, {
      params: {
        "pagination[page]": page,
        "pagination[pageSize]": limit,
        sort: "date:desc",
        select: ["slug", "title", "date"],
        populate: ["author.fullName", "author.avatar", "thumbnail"],
      },
    });
  }

  getPost(slug: string): Observable<{
    id: number;
    attributes: Post;
  }> {
    return this.httpClient
      .get<Response<Post, true>>(`${this.apiUrl}/posts`, {
        params: { populate: ["author.fullName", "author.avatar", "images"], "filters[slug][$eq]": slug },
      })
      .pipe(map((posts) => posts.data[0]));
  }
}
