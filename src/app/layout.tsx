import getShow from "@/services/getShow";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { show } = await getShow();

  const title = show?.Title?.trim() || "TV Show";
  const description = show?.Synopsis?.trim();
  const imageUrl = show?.Images?.Background;

  return {
    title: title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    icons: {
      icon: [
        { url: "/icon.png" },
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
      ],
    },
  };
}

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
