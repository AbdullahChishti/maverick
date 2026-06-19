import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Maverick | Enterprise Technology Consulting",
  description:
    "Maverick delivers enterprise technology solutions, cloud transformation, AI integration, and digital innovation for forward-thinking organizations.",
  keywords: [
    "technology consulting",
    "enterprise solutions",
    "cloud transformation",
    "AI integration",
    "digital innovation",
    "software development",
  ],
  authors: [{ name: "Maverick" }],
  openGraph: {
    title: "Maverick | Enterprise Technology Consulting",
    description:
      "Technology solutions for forward-thinking enterprises",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maverick | Enterprise Technology Consulting",
    description:
      "Technology solutions for forward-thinking enterprises",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
