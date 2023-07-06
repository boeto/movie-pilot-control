/** @type {import('next').NextConfig} */

const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();

const nextConfig = {

  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
