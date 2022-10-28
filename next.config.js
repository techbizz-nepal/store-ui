/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['via.placeholder.com', 'localhost','images.unsplash.com']
    },
    env: {
        apiHost: 'http://api.techbizz.test/api',
        host: 'http://api.techbizz.test',
        requestServerCookieUrl: `http://api.techbizz.test/api/csrf-cookie`,
        APP_URL: "http://localhost:3000",
        SERVER_API: "http://api.techbizz.test"
    }
}

module.exports = nextConfig
