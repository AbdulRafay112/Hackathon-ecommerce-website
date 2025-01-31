/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "cdn.sanity.io", 
        "images.unsplash.com",
        "plus.unsplash.com"  // ye new domain add kiya hai
      ]
    }
  };
  
  export default nextConfig;