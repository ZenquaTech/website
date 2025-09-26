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
import PHeader from "@/components/Product/PHeader";
import Footer from "@/components/ui/footer";
import { ProductProvider } from "@/context/product/productContext";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Removed metadata export

const surt = localFont({
  src: "./../public/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dmsans",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 
  const theme = useTheme();
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // Initialize Google Analytics
    window.gtag("js", new Date());
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "");
  }, []);

  return (
    <html lang="en">
      <body
        className={`${surt.variable} ${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
        
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
        <ProductProvider>

         <ThemeProvider theme={theme}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {pathname === "/product"   &&  <Header /> } 
          { 
           pathname !== "/poc-booking"  
          && pathname !== "/thank-you"  
          && pathname !== '/admin' 
          && pathname !== '/feedback'
          && pathname !== '/login'
           &&pathname !== '/feedbackEnquiry'
           &&pathname !== '/category'
          && <Header />}

          {pathname !== "/contact-us" 
          && pathname !== "/product" 
          && pathname !== "/poc-booking"  
          && pathname !== '/admin' 
          && pathname !== '/feedback'
          && pathname !== '/login'
          &&pathname !== '/feedbackEnquiry'
          &&pathname !== '/category'
          && <HeaderSocial />}  
          {children}  
          {pathname === "/product"  &&  <Footer /> } 
          {/* <Banner /> */}
        </div>
        </ThemeProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
