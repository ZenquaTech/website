import Link from "next/link";
import Image from "next/image";
import { IconButton, Badge, TextField } from "@mui/material";
import '../../app/css/searchCss.css'

const PHeader = () => {
  const cartIcon = "/images/product/cart.svg";

  return (
    <>
      <header className="header">
        <div className="header-content">
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

          {/* {!hideSearchAndCart && ( */}
          <div className="search-cart">
            <div className="custom-search">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                
              </button>
            </div>

            <IconButton
              component={Link}
              href="/poc-booking"
              color="primary"
              sx={{ padding: 1 }}
            >
              <Badge badgeContent={0} className="cart-badge">
                <img src={cartIcon} alt="Cart" className="cartIcon-img" />
              </Badge>
            </IconButton>
          </div>

          {/* )} */}
        </div>
      </header>
    </>
  );
};

export default PHeader;
