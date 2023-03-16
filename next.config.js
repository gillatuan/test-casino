/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVICE: "https://sandbox.101digital.io",
    CLIENT_ID: "oO8BMTesSg9Vl3_jAyKpbOd2fIEa",
    CLIENT_SECRET: "0Exp4dwqmpON_ezyhfm0o_Xkowka",
    GRANT_TYPE: "password",
    SCOPE: "openid",
  },
};

module.exports = nextConfig;
