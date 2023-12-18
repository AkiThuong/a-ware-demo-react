/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  // If your repository name is 'reponame', adjust the basePath and assetPrefix.
  basePath: isProd ? "/a-ware-demo-react" : "",
  assetPrefix: isProd ? "/a-ware-demo-react" : "",
};

module.exports = nextConfig;

