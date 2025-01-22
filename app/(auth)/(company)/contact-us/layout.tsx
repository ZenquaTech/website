import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Contact Us | ZenQua Technologies Pvt Ltd",
    description:
      "Reach out to ZenQua Technologies to discuss your software development needs. Fill out our contact form to inquire about services like web development, mobile app development, cloud solutions, and more. Share your project details, budget, and timeline to connect with our expert team today. Discover tailored IT solutions and turn your software vision into reality.",
    keywords:
      "Contact ZenQua, ZenQua Contact Form, Contact ZenQua Technologies, Software Development Services, IT Consultation Form, Mobile App Development Inquiry, Web Development Services, Customized Development Services, Cloud Services Consultation, Software Project Quote, Contact Software Experts, IT Services Form, Software Solutions Inquiry, Budget for IT Project, Project-Based Engagement, Dedicated Team Services, Immediate Software Consultation, Software Project Form, Get in Touch with ZenQua, IT Support Contact, Social Media Links ZenQua, ZenQua Address, ZenQua Support Hours, Send Message to ZenQua, IT Services Company Contact",
    openGraph: {
      title:
        "ZenQua Technologies Pvt Ltd | Premier Web and Mobile App Development Company",
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
      title:
        "ZenQua Technologies Pvt Ltd | Premier Web and Mobile App Development Company",
      description:
        "ZenQua Technologies Pvt Ltd offers innovative solutions in web and mobile app development, digital marketing, and eCommerce to drive your business forward.",
      images: [
        new URL("/images/zenqua-twitter-image.jpg", metadataBase).toString(),
      ],
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
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact Us",
              url: "https://www.zenqua.com/contact-us",
              description:
                "Reach out to ZenQua Technologies to discuss your software development needs. Fill out our contact form to inquire about services like web development, mobile app development, cloud solutions, and more. Share your project details, budget, and timeline to connect with our expert team today. Discover tailored IT solutions and turn your software vision into reality",
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
