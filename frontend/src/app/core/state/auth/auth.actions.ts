export namespace Auth {
  export class Login {
    public static readonly type = "[Auth] Login";
  }

  export class LoginSuccess {
    public static readonly type = "[Auth] Login Success";
  }

  export class LoginFailure {
    public static readonly type = "[Auth] Login Failure";
    constructor(public error: unknown) {}
  }
}
