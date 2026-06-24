import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

/**
 * Middleware de Next.js — genera un nonce por request y lo inyecta
 * en el Content-Security-Policy. Elimina la necesidad de 'unsafe-inline'.
 *
 * El nonce se pasa como header interno `x-nonce` para que el layout
 * pueda leerlo con `headers()` y aplicarlo a los <Script> que necesiten.
 */
export function middleware(request) {
  const nonce = randomBytes(16).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'`,
    "style-src 'self' 'unsafe-inline'", // estilos inline necesarios por Tailwind en prod
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-csp", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-Frame-Options", "DENY");

  return response;
}

export const config = {
  // Aplicar a todas las rutas excepto archivos estáticos y rutas de Next.js internos
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
