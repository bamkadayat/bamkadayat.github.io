import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'no' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
