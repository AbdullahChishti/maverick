import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

const brandTagline = "Production AI the regulators sign off on.";
const metaDescription =
  "One senior team accountable from architecture review to governed production AI in regulated enterprises.";

export const metadata: Metadata = {
  title: "Mavverik",
  description: metaDescription,
  keywords: [
    "AI-native consulting",
    "enterprise AI",
    "governed AI systems",
    "regulated AI",
    "cloud architecture",
    "production AI",
    "AI governance",
  ],
  authors: [{ name: "Mavverik" }],
  openGraph: {
    title: "Mavverik",
    description: brandTagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavverik",
    description: brandTagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0f1a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-design="quantum-hero"
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-body text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-deep focus:px-5 focus:py-2.5 focus:font-mono focus:text-mono-sm focus:uppercase focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
