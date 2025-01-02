import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Blog | Developing Software For Your Digital Success | ZenQua Technologies Pvt Ltd",
    description:
      "Driven by innovation, ZenQua is your reliable development partner for cutting-edge digital solutions. With our extensive expertise in custom web and mobile app development, we help automate businesses, empower agility and optimize digital experiences. Unleash the power of digital transformation and build a future-proof scaffolding for success.",
    keywords:
      "web development, mobile app development, backend development, frontend development, eCommerce solutions, digital marketing, ZenQua Technologies",
    openGraph: {
      title: "ZenQua Technologies Pvt Ltd | Premier Web and Mobile App Development Company",
      description:
        "Curiosity and exploration are the two most essential traits we possess and they distinguish us from our competitors. And no we have not sent that rover to Mars. Not yet! Innovation and ingenuity are the other two that makes us unique in technology service market.",
      url: "https://www.zenqua.com/",
      siteName: "ZenQua Technologies Pvt Ltd",
      images: [
        {
          url: new URL("/images/zenqua-og-image.jpg", metadataBase).toString(),
          width: 800,
          height: 600,
          alt: "ZenQua Technologies",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ZenQua Technologies Pvt Ltd | Premier Web and Mobile App Development Company",
      description:
        "ZenQua Technologies Pvt Ltd offers innovative solutions in web and mobile app development, digital marketing, and eCommerce to drive your business forward.",
      images: [new URL("/images/zenqua-twitter-image.jpg", metadataBase).toString()],
    },
    alternates: {
      canonical: "https://www.zenqua.com/",
    },
    icons: {
      icon: new URL("/images/favicon.ico", metadataBase).toString(),
    },
  };
}


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
     
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
