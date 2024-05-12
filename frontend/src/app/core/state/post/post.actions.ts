// eslint-disable-next-line @typescript-eslint/no-namespace, max-classes-per-file
export namespace Post {
  export class GetPosts {
    public static readonly type = "[Post] Load All";
  }

  export class GetPostsSuccess {
    public static readonly type = "[Post] Load All Success";
  }

  export class GetPostsFailure {
    public static readonly type = "[Post] Load All Failure";
    constructor(public error: unknown) {}
  }

  export class GetPostBySlug {
    public static readonly type = "[Post] Load One";
    constructor(public slug: string) {}
  }

  export class GetPostBySlugSuccess {
    public static readonly type = "[Post] Load One Success";
  }

  export class GetPostBySlugFailure {
    public static readonly type = "[Post] Load One Failure";
    constructor(public error: unknown) {}
  }
}
