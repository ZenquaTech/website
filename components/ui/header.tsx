"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-2">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img
                style={{ position: "absolute", top: "0%" }}
                height="150px"
                width="150px"
                src="/images/WhatsApp_Image_2024-03-23_at_4.37.01_PM-removebg-preview.png"
                alt="logo"
              />
              {/* <span style={{fontWeight:700,fontSize:14,position:"absolute",top:"74%"}}>Zenqua</span> */}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                {/* <button onClick={scrollToBottom}>Scroll to Bottom</button> */}
                <button
                  // href="/"
                  style={{
                    backgroundColor: "rgb(93 93 255 / var(--tw-bg-opacity))",
                    width: "100%",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    height: 42,
                    borderRadius: "3px",
                  }}
                  onClick={() => scrollToBottom()}
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </button>
              </li>
              {/* <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
