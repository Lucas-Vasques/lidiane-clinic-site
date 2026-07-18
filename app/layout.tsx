import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Dra. Lidiane Landim | Gastropediatria e Endoscopia Digestiva",
  description:
    "Atendimento em gastropediatria e endoscopia digestiva para adultos e crianças em Fortaleza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}