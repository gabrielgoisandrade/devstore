import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://github.com/gabrielgoisandrade.png")], // * permite usar endereços externos no Image do next.
    qualities: [25, 50, 75, 100]
  },
};

export default nextConfig;
