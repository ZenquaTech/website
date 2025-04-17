// app/ClientRootLayout.tsx
"use client";

import "./css/style.css";
import { Inter, Architects_Daughter } from "next/font/google";
import { useEffect } from "react";
import Header from "@/components/ui/header";
import Script from "next/script";
import localFont from "@next/font/local";
import HeaderSocial from "@/components/ui/HeaderSocial";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "@material-ui/core";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const surt = localFont({ src: "./../public/DMSans-VariableFont_opsz,wght.ttf", variable: "--font-dmsans", display: "swap" });
const architects_daughter = Architects_Daughter({ subsets: ["latin"], variable: "--font-architects-daughter", weight: "400", display: "swap" });

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const theme = useTheme();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "");
  }, []);

  return (
    <html lang="en">
      <body className={`${surt.variable} ${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ThemeProvider theme={theme}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {pathname !== "/contact-us" && <HeaderSocial />}
            <SchemaMarkup />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
