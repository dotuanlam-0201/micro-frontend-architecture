/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  env: {
    PORT_WEB: process.env.PORT_WEB ?? "3000",
    PORT_DOCS: process.env.PORT_DOCS ?? "3001",
    PORT_ORDER: process.env.PORT_ORDER ?? "5173",
    PORT_DASHBOARD: process.env.PORT_DASHBOARD ?? "5174",
  },
};

export default nextConfig;
