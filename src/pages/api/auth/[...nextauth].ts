import bcrypt from 'bcrypt';
import DatabaseManager from 'database/DatabaseManager';
import NextAuth from 'next-auth';
import CredetentialProvider from 'next-auth/providers/credentials';
import { TokenUserType } from './types/TokenType';
// import EmailProvider from "next-auth/providers/email"
// import AppleProvider from "next-auth/providers/apple"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers

  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    //Auth0Provider({
    //  clientId: process.env.AUTH0_ID,
    //  clientSecret: process.env.AUTH0_SECRET,
    //  // @ts-ignore
    //  domain: process.env.AUTH0_DOMAIN
    //}),
    //FacebookProvider({
    //  clientId: process.env.FACEBOOK_ID,
    //  clientSecret: process.env.FACEBOOK_SECRET
    //}),
    //GithubProvider({
    //  clientId: process.env.GITHUB_ID,
    //  clientSecret: process.env.GITHUB_SECRET,
    //  // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
    //  // @ts-ignore
    //  scope: 'read:user'
    //}),
    //GoogleProvider({
    //  clientId: process.env.GOOGLE_ID,
    //  clientSecret: process.env.GOOGLE_SECRET
    //}),
    //TwitterProvider({
    //  clientId: process.env.TWITTER_ID,
    //  clientSecret: process.env.TWITTER_SECRET
    //}),
    CredetentialProvider({
      id: 'credentials',
      name: 'Login',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: any, req) {
        // Add logic here to look up the user from the credentials supplied

        if (credentials === undefined) return null;
        const user = await DatabaseManager.GetInstance().UserQueries.TryLogin(
          credentials.username
        );
        if (!user.status) {
          return null;
        } else {
          if (user.data!.password.startsWith('$2y$'))
            user.data!.password = user.data!.password.replace('$2y$', '$2b$'); //PHP hashed passwords
          if (await bcrypt.compare(credentials.password, user.data!.password)) {
            return Promise.resolve({
              id: user.data!.id
            });
          }
        }
        return null;
      }
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 3 * 24 * 60 * 60 // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    //updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  //jwt: {
  //  // A secret to use for key generation (you should set this explicitly)
  //  secret: process.env.SECRET
  //  // Set to true to use encryption (default: false)
  //  // You can define your own encode/decode functions for signing and encryption
  //  // if you want to override the default behaviour.
  //  // encode: async ({ secret, token, maxAge }) => {},
  //  // decode: async ({ secret, token, maxAge }) => {},
  //},

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/'
    //signOut: '/logout', // Displays form with sign out button
    //error: '/auth/error' // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    //newUser: "/", // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: Number(user.id)
        };
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      //session.token = token;
      const user: TokenUserType = token.user;
      session.user = {
        id: token.user.id
      };
      return session;
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true
});
