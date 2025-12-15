/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static exports
  reactStrictMode: true,
  // If deploying to a subpath like 'yourusername.github.io/yourreponame'
  basePath: "/Nia_Project", 
  assetPrefix: "/Nia_Project/", // Required for assets like images
  images: {
    unoptimized: true, // Disable Next.js image optimization as it needs a server
  },
};

module.exports = nextConfig;
