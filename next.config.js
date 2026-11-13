/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/brands/roll-combat-vtt', destination: '/brands/roll-combat', permanent: true },
    ];
  },
};

module.exports = nextConfig;
