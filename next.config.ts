import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agile-releases.s3.us-east-1.amazonaws.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
