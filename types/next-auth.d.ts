import { TokenUserType } from "@/pages/api/auth/types/TokenType";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    token?: any;

    user: {
      id: number;
    };
  }

  interface User {
    id: number;
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    user: TokenUserType;
  }
}
