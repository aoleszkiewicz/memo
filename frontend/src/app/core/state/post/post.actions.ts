// eslint-disable-next-line @typescript-eslint/no-namespace, max-classes-per-file
export namespace Post {
  export class LoadAll {
    public static readonly type = "[Post] Load All";
  }

  export class LoadAllSuccess {
    public static readonly type = "[Post] Load All Success";
  }

  export class LoadAllFailure {
    public static readonly type = "[Post] Load All Failure";
    constructor(public error: unknown) {}
  }

  export class LoadOne {
    public static readonly type = "[Post] Load One";
    constructor(public slug: string) {}
  }

  export class LoadOneSuccess {
    public static readonly type = "[Post] Load One Success";
  }

  export class LoadOneFailure {
    public static readonly type = "[Post] Load One Failure";
    constructor(public error: unknown) {}
  }
}
