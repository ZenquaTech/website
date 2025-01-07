"use client";
import React from "react";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import { Button } from "@material-ui/core";

export default function Hero() {
  const scrollUp = () => {
    const container = document.getElementById("what-we-do");
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify hyphens-auto">
        <div className="bg-transparent p-8 flex flex-col text-left">
          <h2 className="text-lg mt-12 font-bold text-[#D9E3EA] ">
            Best Web and Mobile App Development Company
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold my-4 text-[#D9E3EA] ">
            Developing Software For Your Digital Success
          </h1>
          <p className="text-[#9BA9B4] text-lg my-2 text-justify">
            Driven by innovation, ZenQua is your reliable development partner
            for cutting-edge digital solutions. With our extensive expertise in
            custom web and mobile app development, we help automate businesses,
            empower agility and optimize digital experiences. Unleash the power
            of digital transformation and build a future-proof scaffolding for
            success.
          </p>

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
              padding: "2%",
              fontWeight: "bold",
              borderRadius: "10px",
              width: "160px",
              textTransform: "none",
            }}
            onClick={scrollUp}
          >
            What we do
          </Button>
        </div>
        <div className="mt-20 flex justify-center">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={200}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1200}
          />
        </div>
      </div>
    </div>
  );
}
