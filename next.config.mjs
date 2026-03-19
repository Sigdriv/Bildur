/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
  experimental: {
    proxyClientMaxBodySize: 1024 * 1024 * 100, // 100 MB
    middlewareClientMaxBodySize: 1024 * 1024 * 100, // 100 MB
  },
};

export default nextConfig;
