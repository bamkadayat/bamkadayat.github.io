import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
