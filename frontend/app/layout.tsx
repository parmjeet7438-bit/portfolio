import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeScript } from "@/components/shared/ThemeToggle";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ScrollProgressBar,
  CursorGlow,
  BackToTop,
} from "@/components/layout/ScrollEffects";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
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
  title: "Satnam Kumar | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Satnam Kumar — B.Tech CSE Student, Aspiring Full-Stack Developer, Python with AI Trainee. Explore projects, experience, and certifications.",
  keywords: [
    "Satnam Kumar",
    "Full-Stack Developer",
    "Portfolio",
    "Computer Science",
    "Python",
    "AI",
  ],
  authors: [{ name: "Satnam Kumar" }],
  openGraph: {
    title: "Satnam Kumar | Portfolio",
    description: "Aspiring Full-Stack Developer & Python with AI Trainee",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <CursorGlow />
          <LoadingScreen />
          <ScrollProgressBar />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
