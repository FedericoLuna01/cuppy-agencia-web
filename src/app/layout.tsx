import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { data } from "@/data/data";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const inter = Inter({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter} grid grid-rows-[auto,1fr,auto] min-h-screen `}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.GTAG as string | "default"} />
    </html>
  );
}
