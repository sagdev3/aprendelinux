import "./globals.css";

export const metadata = {
  title: "LearnLinux Mi SO",
  description: "Ruta práctica para aprender Linux con progreso por estudiante."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: "#050816",
          color: "#e2e8f0",
          minHeight: "100vh"
        }}
      >
        {children}
      </body>
    </html>
  );
}
