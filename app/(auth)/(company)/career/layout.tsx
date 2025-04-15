import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title:
      "Career Opportunities In software Development | Explore Open Positions",
    description:
      "Join Our Team | Explore Open Positions at Our Software Development Company | Zenqua Technologies",
    keywords:
      "Job Openings, ZenQua Jobs, ReactJS Jobs, Frontend Developer Careers, Backend Developer Jobs, Full Stack Developer Roles, ASP.Net Developer Jobs, Power BI Developer Careers, DevOps Engineer Openings, Java Developer Positions, Power Apps Developer Opportunities, IT Jobs Near Me, Software Developer Careers, Digital Marketing Jobs, Mobile App Developer Jobs, UI/UX Designer Roles, Data Analyst Jobs, Cloud Engineer Openings, IT Project Manager Careers, Walk-In IT Jobs, Tech Careers at ZenQua, Remote IT Jobs, Emerging Technology Careers, Innovation in IT Careers, Future-Ready IT Jobs, Technology Jobs in Indore, Career in Web Development, ZenQua Technologies Careers, Software Engineer Openings, IT Internships, Experienced IT Jobs, Growth-Oriented Careers, Collaborative Work Environment Jobs, Trending IT Jobs, Career in Digital Innovation",
    openGraph: {
      title:
        "ZenQua Technologies Pvt Ltd | Premier Web and Mobile App Development Company",
      description:
        "Curiosity and exploration are the two most essential traits we possess and they distinguish us from our competitors. And no we have not sent that rover to Mars. Not yet! Innovation and ingenuity are the other two that makes us unique in technology service market.",
      url: "https://www.zenqua.com/",
      siteName: "ZenQua Technologies Pvt Ltd",
      images: [
        {
          url: new URL("https://www.zenqua.com/images/zenqua-og-image.jpg", metadataBase).toString(),
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
              name: "Careers",
              url: "https://www.zenqua.com/career",
              description:
                "Join Our Team | Explore Open Positions at Our Software Development Company | Zenqua Technologies",
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
