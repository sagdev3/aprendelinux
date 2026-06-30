/** @type {import('next').NextConfig} */

/**
 * Las cabeceras de seguridad principales (CSP con nonce, HSTS, X-Frame-Options)
 * se gestionan en proxy.js (convención Next.js 16, reemplaza middleware.js).
 *
 * Aquí solo se mantienen cabeceras estáticas para rutas de _next/static y assets
 * que el proxy excluye de forma explícita.
 */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    position: "bottom-right"
  },
  async headers() {
    return [
      {
        // Cabeceras de seguridad para archivos estáticos (no pasan por middleware)
        source: "/_next/static/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
