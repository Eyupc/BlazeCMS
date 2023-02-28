/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "retro",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "root",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
