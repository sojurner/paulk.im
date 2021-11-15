/** @type {import('next').NextConfig} */
const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com']
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
})
