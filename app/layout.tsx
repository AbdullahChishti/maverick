import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

const brandTagline = "Production AI the regulators sign off on.";

export const metadata: Metadata = {
  title: "Mavverik — Production AI the regulators sign off on",
  description:
    "Mavverik is one senior team — engineers from Microsoft, OpenAI, and Google — accountable from first architecture review to live, governed AI systems inside regulated enterprises.",
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
    title: "Mavverik — Production AI the regulators sign off on",
    description: brandTagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavverik — Production AI the regulators sign off on",
    description: brandTagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f5f8",
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
      className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
