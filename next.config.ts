import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["api.lorem.space"], // ✅ ใช้ domains แทน remotePatterns
  },
  reactStrictMode: false
};

export default nextConfig;
