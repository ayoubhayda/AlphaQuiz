import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "sea1.ingest.uploadthing.com",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "6sn8pk7mrd.ufs.sh",
        port: "",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
