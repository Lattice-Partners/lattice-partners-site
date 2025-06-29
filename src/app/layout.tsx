import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lattice Partners - Your Partner for AI Adoption",
  description: "Transform your business with AI. We help companies discover, implement, and scale AI solutions that drive real results. From strategy to deployment, we're your trusted AI partner.",
  keywords: ["AI consulting", "AI implementation", "AI strategy", "machine learning", "automation", "business transformation"],
  authors: [{ name: "Lattice Partners" }],
  creator: "Lattice Partners",
  publisher: "Lattice Partners",
  openGraph: {
    title: "Lattice Partners - Your Partner for AI Adoption",
    description: "Transform your business with AI. We help companies discover, implement, and scale AI solutions that drive real results.",
    url: "https://lattice-partners.com",
    siteName: "Lattice Partners",
    images: [
      {
        url: "/logos/lattice-partners-logo.png",
        width: 1200,
        height: 630,
        alt: "Lattice Partners - AI Consulting & Implementation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lattice Partners - Your Partner for AI Adoption",
    description: "Transform your business with AI. We help companies discover, implement, and scale AI solutions that drive real results.",
    images: ["/logos/lattice-partners-logo.png"],
    creator: "@lattice_partners",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logos/lattice-partners-logo.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logos/lattice-partners-logo.png",
      },
    ],
  },
  metadataBase: new URL("https://lattice-partners.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
