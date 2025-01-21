
import Image from "next/image";

const FeatureItem = ({
  title,
  heading,
  subtitle,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  heading: string;
  subtitle: any;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
    {/* Image */}
    <div
      className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0  ${
        reverse ? "rtl" : "md:order-1"
      }`}
      data-aos="fade-up"
      
    >
      <Image
        className="max-w-full mx-auto md:max-w-none h-auto"
        src={imageSrc}
        width={540}
        height={405}
        style={{borderRadius:"20px"}}
        alt={imageAlt}
      />
    </div>
    {/* Content */}
    <div
      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
      data-aos={!reverse ? "fade-right" : "fade-left"}
    >
      <div
        className={
          !reverse ? "md:pr-4 lg:pr-12 xl:pr-16" : "md:pl-4 lg:pl-12 xl:pl-16"
        }
      >
        <div className="font-architects-daughter text-xl text-[#019dce] mb-2">
          {title}
        </div>
        <h3 className="h3 mb-3">{heading}</h3>
        <p className="text-xl text-gray-400 mb-4">{subtitle}</p>
        <ul className="text-lg text-gray-400 -mb-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default FeatureItem;