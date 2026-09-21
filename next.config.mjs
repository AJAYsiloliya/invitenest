 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  serverExternalPackages: ["firebase-admin"],
};

export default nextConfig;