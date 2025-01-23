"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useMediaQuery, useTheme } from "@material-ui/core";

import { ThemeProvider } from "@mui/styles";
import Image from "next/image";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const textStyle: React.CSSProperties = {
  color: "red",
  fontSize: "15px",
  marginTop: "30px",
};

const buttonStyle: React.CSSProperties = {
  margin: "0 20px",
  cursor: "pointer",
  transition: "color 0.3s",
};

const hoverEffect = {
  ":hover": {
    color: "blue",
  },
};

export default function Header() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className="absolute w-full z-30"
        // className="max-w-6xl mx-auto px-4 sm:px-6"
        style={{ justifyContent: "space-between", zIndex: 1000 }}
      >
        <nav
          className="md:flex md:grow "
          style={{ backgroundColor: "transparent", width: "100%" }}
        >
          <div
            className="w-full max-w-[100rem] mx-auto"
            style={{ width: "100%" }}
          >
            <div
              className="flex items-center justify-between h-20"
              style={{ justifyContent: "space-between" }}
            >
              {/* Site branding */}
              <div
                className="shrink-0 mr-4 mt-2"
                style={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "none",
                }}
              >
                {/* Logo */}
                <Link href="/" className="block" aria-label="Cruip">
                  <Image
                    priority
                    style={{
                      top: "0%",
                      marginTop: "-1%",
                    }}
                    height={110}
                    width={110}
                    src="/images/webpFile/WhatsApp_Image_2024-03-23_at_4.37.01_PM-removebg-preview.webp"
                    alt="logo"
                  />
                </Link>
              </div>

              {matches ? (
                <MobileMenu />
              ) : (
                <div
                  className="flex-grow flex justify-center"
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "",
                  }}
                >
                  <div style={{ ...buttonStyle, ...hoverEffect }}>
                    <ThemeProvider theme={theme}>
                      <Navbar />
                    </ThemeProvider>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!matches ? (
            <ul className="justify-start flex-wrap items-center mt-5">
              <li></li>
            </ul>
          ) : null}
        </nav>
      </header>
    </>
  );
}
