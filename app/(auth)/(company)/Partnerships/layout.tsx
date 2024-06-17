import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "ZenQua Partnerships - Channel, Joint Venture, Offshore & Technology Collaborations",
    description:
      "Explore ZenQua’s diverse partnership programs designed to empower your business through collaboration. From Channel Partnerships to Offshore and Technology Ventures, we offer comprehensive support and resources for growth and success. Join us to leverage industry expertise, enhance service offerings, and drive mutual profitability.",
    keywords:
      "ZenQua partnerships,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services, Channel partnerships, Joint venture partnerships, Offshore development partnerships, Technology partnership opportunities, IT partnership programs, Business alliances, IT outsourcing solutions, Strategic business partnerships, Software development collaborations",
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
