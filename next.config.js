/** @type {import('next').NextConfig} */
const nextConfig = {
  // O caminho de exibição do anúncio (glauciocosta.com/panorama/moema) também abre a página
  async redirects() {
    return [{ source: '/panorama/moema', destination: '/panorama', permanent: true }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "casainc.com.br" },
      { protocol: "https", hostname: "borainterlagos.com.br" }
    ]
  }
};
module.exports = nextConfig;
