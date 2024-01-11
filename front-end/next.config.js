/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "app.yunohost.org",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
