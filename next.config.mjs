/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger hPanel
  output: 'export',
  // Disable image optimization for static export (or use unoptimized)
  images: {
    unoptimized: true,
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Fix workspace root warning
  turbopack: {
    root: process.cwd()
  },
};

export default nextConfig;
