"use client";
import { Paper, Typography, Avatar, Box, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Button } from "reactstrap";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

<<<<<<< HEAD
export default class page extends Component {
=======
class page extends Component {
>>>>>>> master
  render() {
    const style1 = {
      // marginTop:'2%' ,
      padding: "2%",
      transition: "color 0.3s",
      boxShadow: "none",
      backgroundColor: "transparent",
      // minHeight: 'auto',
      display: "flex",
      flexWrap: "wrap",
      textOverflow: "",
    };

    const mainDiv = {
      width: "80%",
      margin: "10% auto",
      marginBottom: "2%",
      height: "auto",
      display: "flex",
      "@media (max-width: 960px)": {
        marginTop: "20%",
      },
    };

    return (
      <>
        <Box
          style={mainDiv}
          className="max-w-6xl mx-auto px-4 sm:px-6 md:mt-12 sm:mt-"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                style={{
                  // marginTop:'2%' ,
                  padding: "2%",
                  transition: "color 0.3s",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  // minHeight: 'auto',
                  display: "flex",
                  flexWrap: "wrap",
                  textOverflow: "",
                }}
                text-align="left"
              >
                <Typography
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "white !important",
                    marginTop: "12%",
                    fontWeight: "bold",
                    flexWrap: "wrap",
                  }}
                >
                  Best Web and Mobile App Development Company
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "White",
                    margin: "4% 0 4%",
                    fontSize: "26px",
                    flexWrap: "wrap",
                  }}
                >
                  Developing Software For Your Digital Success
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: "#A1A1A1",
                    textAlign: "left",
                    margin: "2% 0 2%",
                    fontSize: "18px",
                    flexWrap: "wrap",
                  }}
                >
                  Driven by innovation, ZenQua is your reliable development
                  partner for cutting-edge digital solutions. With our extensive
                  expertise in custom web and mobile app development, we help
                  automate businesses, empower agility and optimize digital
                  experiences. Unleash the power of digital transformation and
                  build a future-proof scaffolding for success.
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "17px",
                    textAlign: "left",
                    textTransform: "none",
                    marginTop: "16px",
                    backgroundColor: "#5D5DFF",
                    color: "#FFF",
                    height: "50px",
                    width: "150px",
                  }}
                >
                  What we do{" "}
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} style={{ marginTop: "5%" }}>
              <Paper
                style={{
                  // marginTop:'2%' ,
                  padding: "2%",
                  transition: "color 0.3s",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  // minHeight: 'auto',
                  display: "flex",
                  flexWrap: "wrap",
                  textOverflow: "",
                }}
              >
                <ModalVideo
                  thumb={VideoThumb}
                  thumbWidth={1024}
                  thumbHeight={576}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1200}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
