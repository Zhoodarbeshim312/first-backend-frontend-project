import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn0.it4profit.com",
      "www.aptronixindia.com",
      "kivano.kg",
      "www.kivano.kg",
    ],
  },
};

export default nextConfig;
