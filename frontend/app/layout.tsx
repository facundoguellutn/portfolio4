import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/nav-header";
import NavMobile from "@/components/mobileNav/NavMobile";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facundo Güell",
  description: "Portfolio personal de Facundo Güell",
  openGraph: {
    type: "website",
    url: "https://facuguell.vercel.app/",
    locale: "es_ES",
    title: "Facundo Güell",
    description: "Portfolio personal de Facundo Güell",
    siteName: "Facundo Güell",
    images: [
      {
        url: "https://facuguell.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Facundo Güell - Portfolio personal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} w-screen overflow-x-hidden `}>
        <header className="justify-center items-center w-full fixed z-50 ">
          <div className="w-full lg:flex hidden  pt-6 ">
            <NavHeader />
          </div>
          <div className="w-full lg:hidden  bg-white">
            <NavMobile />
          </div>
        </header>
        {children}
        <Footer
          name="Facundo Güell"
          email="facundoguell@gmail.com"
          phone="+5493515558870"
          linkedin="https://www.linkedin.com/in/facundog%C3%BCell/"
          github="https://github.com/facundoguellutn/"
          whatsapp="+5493515558870"
          cvUrl="/cv.pdf"
          accentColor="#D0D2FF"
          logo="/images/landing/yoGibli.webp"
        />
        <Analytics />
      </body>
    </html>
  );
}
