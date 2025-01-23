import { Button, useMediaQuery, useTheme } from '@material-ui/core'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'



function HeroContent({ item, image }: any) {
  const router = useRouter()
  const scrollToBottom = () => {
    router.push("/contact-us");
  };
   const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      className=" flex flex-row sm:flex-col gap-4 "
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: "1rem",
      }}
    >
      <div
        className="bg-transparent pt-8 pr-8 pb-8 sm:pr-0 max-sm:pr-0 flex flex-col text-left sm:w-full"
        style={{ width: isSmallScreen ? "100%" : "60%" }}
      >
        <h2 className="text-lg mt-12 font-bold text-[#D9E3EA]">
          {item.heading1}
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold my-4 text-[#D9E3EA]">
          {item.heading2}
        </h1>
        <p className="text-medium my-2 text-justify text-[#9BA9B4]">
          {item.para}
        </p>
        <Button
          variant="contained"
          onClick={() => scrollToBottom()}
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
        >
          {item.button}
        </Button>
      </div>
      <div
        className="flex justify-center sm:w-full"
        style={{ width: isSmallScreen ? "100%" : "50%" }}
      >
        <Image
          src={image}
          alt={item.heading1}
          className="object-contain"
          width={880}
          height={799}
        />
      </div>
    </div>
  );
}

export default HeroContent
