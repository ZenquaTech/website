import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Flexible IT Solutions and Engagement Models for Your Business | ZenQua Technology Pvt. Ltd.",
    description:
      "Discover a range of flexible IT solutions and engagement models tailored to meet your business needs. From offshore and onsite models to customized development teams, we provide end-to-end technology services that ensure project success. Learn how our innovative methodologies and expert team can help you achieve your digital transformation goals.",
    keywords:
      "IT solutions, engagement models, offshore development, onsite development, customized IT services, technology solutions,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services, digital transformation, project management, software development, agile methodologies, business models, flexible pricing, IT consulting, technology services",
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
