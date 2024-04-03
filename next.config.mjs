/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/watashiwarigo",
  reactStrictMode: true,
  images: {
    path: `${basePath}/_next/image`,
  },
};

export default nextConfig;
