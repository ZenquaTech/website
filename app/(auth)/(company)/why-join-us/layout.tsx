import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Why Join Us | ZenQua Technologies Pvt Ltd",
    description:
      "Discover exciting career opportunities at ZenQua! Explore industry trends and opportunities in Software Development, Digital Transformation, Mobile App Development, Enterprise Mobility, and more. Innovate and grow your career with ZenQua’s dynamic work environment and cutting-edge tech solutions.",
    keywords:
      "ZenQua careers, software development, mobile app development, digital transformation, enterprise mobility, tech trends, IT careers, software outsourcing, innovation in tech, career opportunities, thought leadership, life at ZenQua, technology job opportunities, IT industry trends, explore tech careers.",
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
