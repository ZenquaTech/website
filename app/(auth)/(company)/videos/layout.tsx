import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Videos | ZenQua Technologies Pvt Ltd",
    description:
      "Discover engaging video content and actionable insights on complex business challenges through technology and visuals. Explore topics such as Software Development, Outsourcing, Digital Transformation, Mobile App Development, and more to stay ahead in the tech world.",
    keywords:
      "Video content, business insights, technology solutions, software development, software outsourcing, digital transformation,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services, mobile app development, enterprise mobility, thought leadership, IT events, life at ZenQua, IT careers, innovative tech solutions, explore tech topics, actionable insights through videos.",
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
