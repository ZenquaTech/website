import Link from "next/link";
import Image from "next/image";
import { IconButton, Badge, TextField } from "@mui/material";

const PHeader = () => {
  const cartIcon = "/images/product/cart.svg";

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .header {
          width: 100%;
          background-color: white;
          border-bottom: 1px solid #e0e0e0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          z-index: 1000;
        }

        .header-content {
          max-width: 1440px;
          width: 100%;
          height: 92px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 120px;
          margin: 0 auto;
        }

        .logo-img {
          height: 110px;
          object-fit: contain;
        }

        .search-cart {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 430px;
          height: 44px;
        }

        .search-field .MuiOutlinedInput-root {
          width: 368px;
          height: 44px;
          padding: 0 14px;
          border-radius: 100px;
        }

        .search-field .MuiOutlinedInput-input {
          padding: 12px 0;
        }

        .cart-badge {
          color: #019dce;
        }

        a {
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            padding: 16px;
            gap: 12px;
            height: auto;
          }

          .search-cart {
            width: 100%;
            justify-content: space-between;
          }

          .search-field .MuiOutlinedInput-root {
            width: 100%;
          }

            input[type="text"] {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #ccc;
          border-radius: 999px; /* fully rounded, pill shape */
          font-size: 14px;
          color: black; /* text color */
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background-color: white;
        }

        input[type="text"]:focus {
          border-color: #0070f3;
          box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
        }

        }
      `}</style>

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
