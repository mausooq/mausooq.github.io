import Footer from "@/components/layout/footer";
import Navbar from '@/components/layout/navbar';
import StarAnimation from "@/components/star-animation";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Abdul Mausooq | FullStack Developer | JavaScript Enthusiast",
  description: "Hi there, I'm Abdul Mausooq, a web developer. Welcome to my corner of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <main className="flex flex-col items-center md:p-24 px-2 py-24 max-w-[1000px] my-0 mx-auto light-green" style={{ minHeight: "calc(100vh - 6rem)" }}>
              {children}
            </main>
            <Footer />

            <StarAnimation />
            <Analytics />
            <SpeedInsights />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
