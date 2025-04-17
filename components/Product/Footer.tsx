"use client";
import { Box, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <footer>
      {/* {   hideFooter ? null :  */}
      <Box
        sx={{
          width: "1440px",
          height: "279px",
          position: "absolute",
          // top: '2345px',
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          paddingTop: "40px",
          alignItems: "center",
          backgroundColor: "#212627",
          marginTop: "auto",
        }}
      >
        {/* Top section with left and right */}
        <Box
          sx={{
            font: "roboto",
            width: "1200px",
            height: "135px",
            display: "flex",
            justifyContent: "space-between",
            gap: "200px",
            color: "#fff",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              width: "659px",
              height: "135px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography variant="h6">ZENQUA</Typography>
            <Typography
              variant="body2"
              sx={{
                size: "14px",
                lineHeight: "21px",
                letterSpacing: "0",
                color: "#EAEAEA",
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
              accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
              accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
              accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consectetur.{" "}
            </Typography>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              width: "302px",
              height: "135px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                size: "16px",
                font: "roboto",
                lineHeight: "100%",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "#EAEAEA",
              }}
            >
              <PhoneEnabledIcon />
              +91 12345 67890{" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                weight: "400",
                size: "14px",
                letterSpacing: "0",
                lineHeight: "100%",
                color: "#EAEAEA",
              }}
            >
              <EmailIcon />
              contact@zenqua.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                width: "302px",
                height: "26px",
                fontSize: "14px",
                letterSpacing: "0",
                color: "#EAEAEA",
              }}
            >
              <LocationOnIcon />
              Shreevardhan Complex, RNT Marg, South Tukoganj, Indore, Madhya
              Pradesh 452001
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            width: "1440px",
            height: "64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 130px 20px 130px",
            // borderTop: '1px solid #ccc',
            backgroundColor: "#0E1011",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              margin: "auto",
            }}
          >
            <CopyrightIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "#ffffff",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              All rights reserved.
            </Typography>
          </Box>
          {/* </box> */}
        </Box>
      </Box>
    </footer>
    // )
  );
};
export default Footer;
