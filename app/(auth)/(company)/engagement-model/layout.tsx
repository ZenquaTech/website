import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Engagement model | ZenQua Technologies Pvt Ltd",
    description:
      "Explore our flexible and scalable engagement models including Fixed Price, Time and Material, Dedicated Team, and Team Formation. Tailored to your business needs, we ensure cost-effective solutions, expert IT services, and guaranteed quality. Partner with us for innovative and reliable project management.",
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
