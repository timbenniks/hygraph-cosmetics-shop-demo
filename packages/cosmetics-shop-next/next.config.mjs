/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "federate-this-astro.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.cdn.europe-west1.gcp.commercetools.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
