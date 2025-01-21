"use client";
import FeatImage01 from "@/public/images/webpFile/features-03-image-01.webp";
import FeatImage02 from "@/public/images/webpFile/features-03-image-02.webp";
import FeatImage03 from "@/public/images/webpFile/features-03-image-03.webp";
import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";

const LazyFeatureItem = dynamic(() => import("@/components/FeatureItem"));

export default function Zigzag() {
  return (
    <section>
      <div
        // className="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-800"
        className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
      >
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <Box
              component="div"
              style={{
                display: "inline-flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.25rem 0.75rem",
                margin: "0.5rem",
                color: "#16a34a",
                backgroundColor: "#bbf7d0",
                borderRadius: "9999px",
                marginBottom: "1rem",
              }}
            >
              Reach goals that matter
            </Box>
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">
              At{" "}
              <span style={{ fontWeight: "600", color: "#b9b9b9" }}>
                Zenqua
              </span>
              , we believe in the power of innovation to transform businesses.
              With our flagship product, we offer more than just a solution—we
              offer a gateway to unlimited possibilities. Here's how:
            </p>
          </div>
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <LazyFeatureItem
              key="feature1"
              heading="Protecting Your Project"
              title="Give your ideas in responsible hand"
              subtitle={
                <>
                  At{" "}
                  <span style={{ fontWeight: "600", color: "#b9b9b9" }}>
                    Zenqua
                  </span>
                  , we recognize the importance of safeguarding the
                  confidentiality of our projects and the sensitive information
                  they entail. We are committed to upholding the highest
                  standards of confidentiality and security
                </>
              }
              features={[
                "Data Protection.",
                "Sign Non-Disclosure Agreements with employees.",
                "Restricted Access to our developers.",
              ]}
              imageSrc={FeatImage01.src}
              imageAlt="Features 01"
            />
            <LazyFeatureItem
              key="feature2"
              heading="Responsibilities of Responsiveness"
              title="More speed. Less spend"
              subtitle={
                <>
                  Ensuring that the website or application provides a seamless
                  and intuitive experience across various devices and screen
                  sizes is crucial. Responsiveness involves optimizing layout,
                  navigation, and functionality to enhance user satisfaction and
                  engagement.
                </>
              }
              features={[
                "Ensuring seamless navigation & usability across devices.",
                "Enhancing loading times for improved user satisfaction.",
                "Enhancing loading times for improved user satisfaction.",
                "Optimizing responsiveness for improved search engine rankings.",
              ]}
              imageSrc={FeatImage02.src}
              imageAlt="Features 02"
              reverse={true}
            />
            <LazyFeatureItem
              key="feature3"
              heading="Support and Training"
              title="We're more than just a product vendor"
              subtitle={
                <>
                  With comprehensive support and training programs, we're here
                  to help you maximize the value of our solution and achieve
                  your business goals. From onboarding to ongoing support, we're
                  committed to your success every step of the way.
                </>
              }
              features={[
                "Our team provides thorough onboarding sessions to familiarize your staff with product's features, functionalities, and best practices.",
                "Tailored to address specific business needs & objectives.",
                "Accessible documentation, tutorials, and video guides.",
              ]}
              imageSrc={FeatImage03.src}
              imageAlt="Features 03"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
     