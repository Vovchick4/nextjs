/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/guidy-guys-app.appspot.com/o/**',
            },
        ],
    },
}

module.exports = nextConfig
