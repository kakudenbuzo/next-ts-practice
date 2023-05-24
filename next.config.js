/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/next-ts-practice/" : "",
  basePath: isProd ? "/next-ts-practice" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
