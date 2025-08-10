import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bam Kadayat | Portfolio",
  description: "Bam Kadayat's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div className="pt-16 sm:pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
