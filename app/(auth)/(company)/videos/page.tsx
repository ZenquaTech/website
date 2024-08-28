"use client";
import { Paper, Typography, Box, Grid } from "@material-ui/core";
import React from "react";

const Page = () => {
  const style1 = {
    height: "250px",
    flexWrap: "wrap" as "wrap",
    backgroundColor: "black",
    boxShadow: "0px 0px 5px white",
  };
  const mainDiv = {
    width: "80%",
  };
  const handleMouseEnter = (e:any) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e:any) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <div style={mainDiv}>
          <h2 className="text-4xl font-bold text-center mb-6 service-button text-[#D9E3EA]">
            Videos
          </h2>
          <h2 className="text-[19px] font text-center service-button text-[#9BA9B4]">
            Explore actionable insights on your complex biz problems through
            technology and visuals
          </h2>

          <Grid
            container
            spacing={1}
            justifyContent="center"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <Grid
              item
              sm={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Paper
                style={{
                  ...style1,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/z9bZufPHFLU?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                  title="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Paper>
            </Grid>

            <Grid
              item
              sm={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Paper
                style={{
                  ...style1,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Hr5iLG7sUa0?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
                  title="Javascript for beginners | chai aur #javascript"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box sx={{ width: "100%", margin: "2%", display: "flex", justifyContent: "center"}}>
        <div style={{ boxSizing: "border-box", width: "80%" }}>
          <Grid container spacing={2} style={{ color: "white", padding: "20px" }}>
            <Grid item xs={12}>
              <h2 className="text-[19px] text-[#D9E3EA] text-center mb-2 service-button mt-32 lg:mt-0">
                Ready to brush up on something new? we’ve got more to read
                right this way.
              </h2>
            </Grid>
            <Grid item xs={12}>
              <h2 className="text-4xl text-[#D9E3EA] font-bold text-center mb-6 service-button">
                Explore More Topics
              </h2>
            </Grid>

            {[
              "Software Deveopment",
              "Software Outsourcing",
              "Digital Transformation",
              "Mobile App Development",
              "Enterprise Mobility",
              "Thought Leadership",
              "Events",
              "Life at ZenQua",
              "Careers",
            ].map((industry, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                    <Paper
                      elevation={1}
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        height: "10vh",
                        width: "92%",
                        flexWrap: "wrap",
                        color: "white",
                        boxShadow: "0px 0px 8px #fff",
                        margin: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "3%",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Typography
                        variant="subtitle1"
                        align="center"
                        style={{ fontSize: "large" }}
                      >
                        {industry}
                      </Typography>
                    </Paper>
                  </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Page;
