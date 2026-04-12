// import "./src/env";

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },

//   async rewrites() {
//   return [
//     {
//       source: "/api/auth/:path*",
//       destination: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/:path*`,
//     },
//   ];
// }
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/auth/:path*",
//         destination: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/:path*`,
//       },
//       {
//         source: "/api/:path*",
//         destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
//       },
//     ];
//   },
// };

// export default nextConfig;

// import "./src/env";
import type { NextConfig } from "next";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://skillbridge-server-kappa.vercel.app";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${BACKEND_URL}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;