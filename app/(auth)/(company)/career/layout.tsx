import React from "react";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://www.zenqua.com");

  return {
    metadataBase,
    title: "Career Openings | ZenQua Technologies Pvt Ltd",
    description:
      "Explore exciting career opportunities at ZenQua Technologies. Work with industry experts on cutting-edge IT projects. Apply now for roles like DevOps Engineer, Java Developer, and more.",
    keywords:
      "Job Openings, ZenQua Jobs, ReactJS Jobs, Frontend Developer Careers, Backend Developer Jobs, Full Stack Developer Roles, ASP.Net Developer Jobs, Power BI Developer Careers, DevOps Engineer Openings, Java Developer Positions, Power Apps Developer Opportunities, IT Jobs Near Me, Software Developer Careers, Digital Marketing Jobs, Mobile App Developer Jobs, UI/UX Designer Roles, Data Analyst Jobs, Cloud Engineer Openings, IT Project Manager Careers, Walk-In IT Jobs, Tech Careers at ZenQua, Remote IT Jobs, Emerging Technology Careers, Innovation in IT Careers, Future-Ready IT Jobs, Technology Jobs in Indore, Career in Web Development, ZenQua Technologies Careers, Software Engineer Openings, IT Internships, Experienced IT Jobs, Growth-Oriented Careers, Collaborative Work Environment Jobs, Trending IT Jobs, Career in Digital Innovation",
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
