// eslint-disable-next-line @typescript-eslint/no-namespace, max-classes-per-file
export namespace Post {
  export class GetPosts {
    public static readonly type = "[Post] Get Posts";
  }

  export class GetPostsSuccess {
    public static readonly type = "[Post] Get Posts Success";
  }

  export class GetPostsFailure {
    public static readonly type = "[Post] Get Posts Failure";
    constructor(public error: unknown) {}
  }

  export class GetPostsReachedMaxPagination {
    public static readonly type = "[Post] Get Posts Max Pagination";
  }

  export class GetPostBySlug {
    public static readonly type = "[Post] Get Post By Slug";
    constructor(public slug: string) {}
  }

  export class GetPostBySlugSuccess {
    public static readonly type = "[Post] Get Post By Slug Success";
  }

  export class GetPostBySlugFailure {
    public static readonly type = "[Post] Get Post By Slug Failure";
    constructor(public error: unknown) {}
  }
}
