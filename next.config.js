/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["api.season.vincentcottalorda.me"],
  },
  publicRuntimeConfig: {
    url: process.env.DIRECTUS_URL,
  },
};

module.exports = nextConfig;
