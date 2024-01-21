/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gogocdn.net",
                port: "",
                pathname: "/cover/*",
            }
        ]
    }
}

module.exports = nextConfig
