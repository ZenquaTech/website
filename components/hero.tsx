"use client";
import React from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "next/navigation"; // For Next.js 13+ App Router
import Head from 'next/head'; // Importing the Head component from Next.js

export default function Hero() {
  const router = useRouter();

  const scrollUp = () => {
    const container = document.getElementById("what-we-do");
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRoute = () => {
    router.push("/contact-us"); // Replace "/contact" with your desired route
  };

  return (
    <>
      <Head>
        {/* Adding meta keyword for SEO */}
        <meta name="keywords" content="top 10 vue.js company in Indore, vue.js development, best vue.js companies, IT staff augmentation, vue.js experts in Indore, vue.js developers" />
        <meta name="description" content="Looking for the top Vue.js companies in Indore? Hire the best Vue.js developers and IT staff augmentation services." />
        <title>Top Vue.js Company in Indore | Hire Vue.js Developers</title>
      </Head>
      
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
        <div className="grid grid-cols-1 md:grid-cols gap-4 text-justify hyphens-auto">
          <div className="bg-transparent p-8 flex flex-col items-center text-center">
            <h1 className="text-[46px] font-bold mt-24 my-4 text-[#D9E3EA]">
              Hire Vetted Professionals from the Best IT Staff Augmentation Company
            </h1>

            <Button
              variant="contained"
              style={{
                alignItems: "center",
                fontSize: "15px",
                marginTop: "2%",
                textAlign: "center",
                flexWrap: "wrap",
                backgroundColor: "#019dce",
                color: "#D9E3EA",
                padding: "1%",
                fontWeight: "bold",
                borderRadius: "50px",
                width: "217px",
                textTransform: "none",
              }}
              onClick={handleRoute} // Route on button click
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
