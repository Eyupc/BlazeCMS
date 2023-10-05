namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL_SERVER: string;
    EMAIL_FROM: string;
    APPLE_ID: string;
    APPLE_TEAM_ID: string;
    APPLE_PRIVATE_KEY: string;
    APPLE_KEY_ID: string;
    AUTH0_ID: string;
    AUTH0_SECRET: string;
    AUTH0_DOMAIN: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    TWITTER_ID: string;
    TWITTER_SECRET: string;
    DATABASE_URL: string;
    SECRET: string;

    // CMS Settings
    MYSQL_HOST: string;
    MYSQL_PORT: number;
    MYSQL_DATABASE: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    REGISTER_CREDITS: number;
    REGISTER_DUCKETS: number;
    REGISTER_DIAMONDS: number;
    REGISTER_MOTTO: string;
    REGISTER_LOOK: string;
    REGISTER_RANK: number;

    CLOUDFLARE_ENABLED: boolean;
    NEXT_PUBLIC_HOTEL_URL: string;
    NEXT_PUBLIC_NITRO_URL: string;
    NEXT_PUBLIC_IMAGER_URL: string;
    SERVER_HOST: string;
    SERVER_PORT: number;

    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: number;
    EMAIL_FROM: string;

    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_SECRET_RECAPTCHA_SITE_KEY: string;
    CSRF_SECRET: string;
    NEXT_PUBLIC_EMAIL_ENABLED: boolean;

    NEXT_PUBLIC_CMS_LANGUAGE: string;
  }
}
