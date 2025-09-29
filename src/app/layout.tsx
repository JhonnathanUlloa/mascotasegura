import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mi Mascota Segura - Tu tranquilidad, su bienestar",
  description: "Cuidamos de tu mascota en cada etapa de su vida. Membresía integral con asistencia 24/7 y seguros para mascotas con las mejores aseguradoras.",
  keywords: ["mascotas", "seguros", "veterinaria", "emergencias", "24/7", "pets", "cuidado animal"],
  authors: [{ name: "Mi Mascota Segura" }],
  openGraph: {
    title: "Mi Mascota Segura - Tu tranquilidad, su bienestar",
    description: "Cuidamos de tu mascota en cada etapa de su vida",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased bg-cream text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
