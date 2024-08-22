"use client";
import React from "react";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function Hero() {
  return (
    <div className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify">
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
          <button className="bg-[#019dce] text-white text-md mt-6 px-6 rounded-md h-10 w-36 font-medium text-[#D9E3EA]">
            What we do
          </button>
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
