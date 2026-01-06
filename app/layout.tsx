import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ehak Math | Full Stack Developer",
    template: "%s | Ehak Math",
  },
  description: "Full Stack Developer specializing in modern web applications with React, Next.js, and TypeScript. Building digital experiences that matter.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "full stack"],
  authors: [{ name: "Ehak Math" }],
  creator: "Ehak Math",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexchen.dev",
    siteName: "Ehak Math Portfolio",
    title: "Ehak Math | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehak Math | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications with React, Next.js, and TypeScript.",
    creator: "@ehakmath",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
