/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}
