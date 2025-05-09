import Link from "next/link";
import Image from "next/image";
import { IconButton, Badge } from "@mui/material";
import { useProductContext } from "@/context/product/productContext";
import "../../app/css/searchCss.css"; // Make sure to add styles here as well

const PHeader = () => {
  const cartIcon = "/images/product/cart.svg";
  const { cart } = useProductContext();

  return (
    <>
     <header className="header" style={{width: '100%', margin: '0 auto'}}>
        <div className="header-content">
          <Link href="/" className="block-product" aria-label="Home">
              <Image
                priority
                height={110}
                width={110}
                src="/images/webpFile/WhatsApp_Image_2024-03-23_at_4.37.01_PM-removebg-preview.webp"
                alt="logo"
                style={{
                  marginTop: "-1%",
                }}
              />
          </Link>

          {/* Search and Cart on larger screens */}
          <div className="search-cart">
            {/* <div className="custom-search">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button type="submit" className="search-button"></button>
            </div> */}

            <IconButton
              component={Link}
              href="/poc-booking"
              color="primary"
              sx={{ padding: 1, marginRight:5 }}
            >
              <Badge badgeContent={cart.length}>
                <img src={cartIcon} alt="Cart" className="cartIcon-img" />
              </Badge>
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default PHeader;
