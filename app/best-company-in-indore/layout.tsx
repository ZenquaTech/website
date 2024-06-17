import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Best company in indore | ZenQua Technologies Pvt Ltd",
    description:"We are a leading company based in Indore, dedicated to delivering cutting-edge solutions in technology, business consulting, and innovation. Our team of experts strives to bring the best to our clients by focusing on quality, creativity, and customer satisfaction.",
    keywords:
      "Best company in indore,Contact ZenQua, ZenQua Contact Form, Contact ZenQua Technologies, Software Development Services,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services, IT Consultation Form, Mobile App Development Inquiry, Web Development Services, Customized Development Services, Cloud Services Consultation, Software Project Quote, Contact Software Experts, IT Services Form, Software Solutions Inquiry, Budget for IT Project, Project-Based Engagement, Dedicated Team Services, Immediate Software Consultation, Software Project Form, Get in Touch with ZenQua, IT Support Contact, Social Media Links ZenQua, ZenQua Address, ZenQua Support Hours, Send Message to ZenQua, IT Services Company Contact",
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
