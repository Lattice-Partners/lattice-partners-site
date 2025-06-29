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
    title: "Lattice Partners - An AI Strategy That Works For You",
    description: "Leverage AI to save thousands of employee hours a year. We help companies discover, implement, and scale AI solutions that drive real results.",
    url: "https://lattice-partners.com",
    siteName: "Lattice Partners",
    images: [
      {
        url: "https://lattice-partners.com/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Lattice Partners - An AI strategy that works for you. Leverage AI to save thousands of employee hours a year.",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lattice Partners - An AI Strategy That Works For You",
    description: "Leverage AI to save thousands of employee hours a year. We help companies discover, implement, and scale AI solutions that drive real results.",
    images: [
      {
        url: "https://lattice-partners.com/og-banner.png",
        alt: "Lattice Partners - An AI strategy that works for you. Leverage AI to save thousands of employee hours a year.",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@lattice_partners",
    site: "@lattice_partners",
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
  other: {
    // LinkedIn specific tags
    "linkedin:owner": "lattice-partners",
    // WhatsApp and Telegram
    "whatsapp:image": "https://lattice-partners.com/logos/lattice-partners-logo.png",
    // Slack preview
    "slack-app-id": "lattice-partners",
    // Additional social platform support
    "facebook-domain-verification": "lattice-partners-verification",
    // Schema.org markup
    "schema:type": "Organization",
    "schema:name": "Lattice Partners",
    "schema:url": "https://lattice-partners.com",
    "schema:logo": "https://lattice-partners.com/logos/lattice-partners-logo.png",
    "schema:description": "Transform your business with AI. We help companies discover, implement, and scale AI solutions that drive real results.",
    // Mobile app banners
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Lattice Partners",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "mask-icon",
        url: "/logos/lattice-partners-logo.png",
        color: "#3b82f6",
      },
    ],
  },
  metadataBase: new URL("https://lattice-partners.com"),
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lattice Partners",
    "description": "Transform your business with AI. We help companies discover, implement, and scale AI solutions that drive real results.",
    "url": "https://lattice-partners.com",
    "logo": "https://lattice-partners.com/logos/lattice-partners-logo.png",
    "image": "https://lattice-partners.com/logos/lattice-partners-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/lattice-partners"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business",
      "url": "https://calendly.com/d/cv2j-t66-djr/intro-with-lattice-partners"
    },
    "service": {
      "@type": "Service",
      "name": "AI Consulting & Implementation",
      "description": "AI strategy, implementation, and scaling services for businesses",
      "provider": {
        "@type": "Organization",
        "name": "Lattice Partners"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
