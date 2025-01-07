import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title:"Flexible Engagement Models For Software Development | Hire Dedicated Teams Developers",
    description:"Explore Our Flexible Engagement models For Software Deveopment, Including Dedicated Terms, Fixed-Price, and time & Material Options To Meet Your Project Needs.",
    keywords:
      "Engagement Models, Fixed Price Model, Time and Material Model, Dedicated Team, Team Formation, Scalable IT Solutions, Flexible Engagement Options, IT Project Management, Agile Development, Expert IT Services, Reliable IT Partner, Cost-Effective IT Solutions, Innovative IT Services, IT Security Solutions, Custom IT Engagement Models",
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
