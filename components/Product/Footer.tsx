"use client";
import { Box, Typography, Container, Grid } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          paddingTop: "40px",
          alignItems: "center",
          backgroundColor: "#212627",
          marginTop: "auto",
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Top section with left and right */}
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="space-between"
            spacing={4}
            sx={{
              color: "#fff",
            }}
          >
            {/* Left Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">ZENQUA</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#EAEAEA",
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
                accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
                accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur. Dolor ac habitasse in
                accumsan et consectetur.Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="text-sm ml-1">
                <h2 className="text-gray-200 font-medium mb-1">Services</h2>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/feedback"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Feedback/Inquiry
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
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
                +91 12345 67890
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
                <EmailIcon />
                contact@zenqua.com
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
                <LocationOnIcon />
                Shreevardhan Complex, RNT Marg, South Tukoganj, Indore, Madhya
                Pradesh 452001
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Bottom Section */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#0E1011",
            py: 2,
            px: { xs: 4, md: 10 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <CopyrightIcon
              sx={{ width: "24px", height: "24px", color: "#ffffff" }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "100%",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
