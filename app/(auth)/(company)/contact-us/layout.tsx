import React from "react";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  // Static metadata
  return {
    title: "Static Page",
    description: "Learn more on this static page.",
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
