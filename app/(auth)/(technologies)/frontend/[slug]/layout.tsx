import React from "react";
import { Metadata } from "next";
import jsonData from "./data.json";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Fetch dynamic data based on slug
  const content = jsonData[params.slug as keyof typeof jsonData] || {
    title: "Page not found",
    body: "Content not available for this route.",
  };
  return {
    title: content?.metaData?.title || "zenqua",
    description: content?.metaData?.description || "Zenqua",
    keywords:content?.metaData?.keywords || "zenqua",
  };
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
