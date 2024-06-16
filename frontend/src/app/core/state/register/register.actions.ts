export namespace SignUp {
  export class SignUp {
    public static readonly type = "[Auth] Sign Up";
  }

  export class SignUpSuccess {
    public static readonly type = "[Auth] Sign Up Success";
  }

  export class SignUpFailure {
    public static readonly type = "[Auth] Sign Up Failure";
    constructor(public error: unknown) {}
  }
}
