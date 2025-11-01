import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "TV Show",
  description: "Exibição de um dos produtos da Agile TV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${nunito.className} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
