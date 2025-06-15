import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment and configure if your repository is not username.github.io
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
};

export default nextConfig;
