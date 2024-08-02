/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // Aeternity Image
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
            {
                // Microlink Image Preview
                protocol: 'https',
                hostname: 'api.microlink.io',
            },
        ],
    }
};

export default nextConfig;
