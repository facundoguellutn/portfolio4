import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/nav-header";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facundo Güell",
  description: "Portfolio personal de Facundo Güell",
  openGraph: {
    type: "website",
    url: "https://facundoguell.vercel.app/",
    locale: "es_ES",
    title: "Facundo Güell",
    description: "Portfolio personal de Facundo Güell",
    siteName: "Facundo Güell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} w-[100vw] max-w-[100vw] flex flex-col relative`}
      >
        <header className="justify-center items-center w-full pt-6 fixed z-50 ">
          <NavHeader />
        </header>
        {children}
      </body>
    </html>
  );
}
