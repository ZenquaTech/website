import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Why Join Us | ZenQua Technologies Pvt Ltd",
    description:
      "Discover exciting career opportunities at ZenQua! Explore industry trends and opportunities in Software Development, Digital Transformation, Mobile App Development, Enterprise Mobility, and more. Innovate and grow your career with ZenQua’s dynamic work environment and cutting-edge tech solutions.",
    keywords:
      "ZenQua careers, software development, mobile app development, digital transformation, enterprise mobility,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services, tech trends, IT careers, software outsourcing, innovation in tech, career opportunities, thought leadership, life at ZenQua, technology job opportunities, IT industry trends, explore tech careers.",
    icons: {
      icon: new URL("/images/favicon.ico", metadataBase).toString(),
    },
  };
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Why Join Us",
              url: "https://www.zenqua.com/why-join-us",
              description:
                "Discover exciting career opportunities at ZenQua! Explore industry trends and opportunities in Software Development, Digital Transformation, Mobile App Development, Enterprise Mobility, and more. Innovate and grow your career with ZenQua’s dynamic work environment and cutting-edge tech solutions.",
            }),
          }}
        />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
