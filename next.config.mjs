/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

// module.exports = {
//     experimental: {
//       missingSuspenseWithCSRBailout: false,
//     },
// }

export default nextConfig;
