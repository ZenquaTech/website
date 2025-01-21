import TestimonialImage01 from "@/public/images/testimonial-01.webp";
import TestimonialImage02 from "@/public/images/testimonial-02.webp";
import TestimonialImage03 from "@/public/images/testimonial-03.webp";
import dynamic from "next/dynamic";
const LazyTestimonialItem = dynamic(() => import("@/components/TestimonialItem"));
const testimonialArray = [
  {
    image: TestimonialImage01,
    text: `"Partnering with Zenqua for our mobile app development project was the best decision we made. Their technical proficiency, seamless communication, and on-time delivery surpassed our expectations. The app has received excellent feedback from our users!"`,
    name: "David Thompson",
    position: "CTO of V7 Infotech",
    delay: "0",
  },
  {
    image: TestimonialImage02,
    text: `"Partnering with Zenqua for our mobile app development project was the best decision we made. Their technical proficiency, seamless communication, and on-time delivery surpassed our expectations. The app has received excellent feedback from our users!"`,
    name: "Michael Johnson",
    position: "COO of Nblik",
    delay: "200",
  },
  {
    image: TestimonialImage03,
    text: `"Working with the team at Zenqua Technologies has been a pleasure from start to finish. Their collaborative approach, proactive communication, and ability to understand our business needs set them apart. They delivered a software solution that has transformed our business processes. Highly recommend their services!"`,
    name: "Amanda Roberts",
    position: "Operations Manager at Open Track",
    delay: "400",
  },
];
export default function Testimonials() {
  return (
    <section>
      <div
        // className="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-800"
        className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
      >
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">Words from our Client</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            {testimonialArray.map((item, index) => (
              <LazyTestimonialItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
