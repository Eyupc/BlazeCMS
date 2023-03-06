import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    token?: any;

    user: {
      id?: string;
      username?: string;
      rank?: number;
    };
  }

  interface User {
    username?: string;
    mail?: string;
    password?: string;
    rank?: number;
    auth_ticket?: string;
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
  }
}
