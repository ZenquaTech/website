import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Careers - Zenqua Technologies",
    description:
      "Join Our Team | Explore Open Positions at Our Software Development Company | Zenqua Technologies",
    keywords:
      "Job Openings, ZenQua Jobs, ReactJS Jobs, Frontend Developer Careers, Backend Developer Jobs, Full Stack Developer Roles, ASP.Net Developer Jobs, Power BI Developer Careers, DevOps Engineer Openings, Java Developer Positions, Power Apps Developer Opportunities, IT Jobs Near Me, Software Developer Careers, Digital Marketing Jobs, Mobile App Developer Jobs, UI/UX Designer Roles, Data Analyst Jobs,firebase expert,redis development services,redis solutions,firebase development company,firebase development services,vuejs services,nopcommerce development services,Indore top 10 IT company, Cloud Engineer Openings, IT Project Manager Careers, Walk-In IT Jobs, Tech Careers at ZenQua, Remote IT Jobs, Emerging Technology Careers, Innovation in IT Careers, Future-Ready IT Jobs, Technology Jobs in Indore, Career in Web Development, ZenQua Technologies Careers, Software Engineer Openings, IT Internships, Experienced IT Jobs, Growth-Oriented Careers, Collaborative Work Environment Jobs, Trending IT Jobs, Career in Digital Innovation,Indore IT Best Company,Indore IT Jobs,Indore Top IT company",
  };
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.zenqua.com/career/#breadcrumblist",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.zenqua.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Careers",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  name: "Zenqua Technologies",
                  url: "https://www.zenqua.com/",
                },
                {
                  "@type": "WebPage",
                  url: "https://www.zenqua.com/career",
                  name: "Careers - Zenqua Technologies",
                  description:
                    "Join Our Team | Explore Open Positions at Our Software Development Company | Zenqua Technologies",
                  datePublished: "2025-01-10T06:34:35+00:00",
                  dateModified: "2025-01-29T06:33:47+00:00",
                },
              ],
            }),
          }}
        />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
