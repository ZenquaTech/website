import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Contact Us | ZenQua Technologies Pvt Ltd",
    description:
      "Reach out to ZenQua Technologies to discuss your software development needs. Fill out our contact form to inquire about services like web development, mobile app development, cloud solutions, and more. Share your project details, budget, and timeline to connect with our expert team today. Discover tailored IT solutions and turn your software vision into reality.",
    keywords:
      "Contact ZenQua, ZenQua Contact Form, Contact ZenQua Technologies, Software Development Services, IT Consultation Form, Mobile App Development Inquiry, Web Development Services, Customized Development Services, Cloud Services Consultation, Software Project Quote, Contact Software Experts, IT Services Form, Software Solutions Inquiry, Budget for IT Project, Project-Based Engagement, Dedicated Team Services, Immediate Software Consultation, Software Project Form, Get in Touch with ZenQua, IT Support Contact, Social Media Links ZenQua, ZenQua Address, ZenQua Support Hours, Send Message to ZenQua, IT Services Company Contact",
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
