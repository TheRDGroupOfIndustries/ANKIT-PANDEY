// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     domains: ['readdy.ai', 'cdn.sanity.io'],
//   }
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
