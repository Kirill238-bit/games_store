/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports={
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'static.gabestore.ru',
                port:'',
            },
        ],
    },
    video:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.youtube.com',
                port:'',
            }
        ]
    }
}
