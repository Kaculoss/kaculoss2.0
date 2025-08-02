import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  images: {
    remotePatterns: [new URL("https://randomuser.me/**")],
  },
};

export default nextConfig;
