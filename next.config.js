/** @type {import('next').NextConfig} */

/**
 * Las cabeceras de seguridad principales (CSP con nonce, HSTS, X-Frame-Options)
 * se gestionan en middleware.js, que genera un nonce por request.
 *
 * Aquí solo se mantienen cabeceras estáticas para rutas de _next/static y assets
 * que el middleware excluye de forma explícita.
 */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Cabeceras de seguridad para archivos estáticos (no pasan por middleware)
        source: "/_next/static/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
