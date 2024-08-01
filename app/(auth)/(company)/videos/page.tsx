"use client";
import { Paper, Typography, Avatar, Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

export class page extends Component {
  render() {
    const style1 = {
      height: "250px",
      flexWrap: "wrap",
      backgroundColor: "black",
      boxShadow: "0px 0px 5px white",
    };
    const mainDiv = {
      width: "80%",
      //   marginTop: "20px",
    };
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop:'12%'
          }}
        >
          <div style={mainDiv}>
            <h2 className="text-3xl font-bold text-center mb-6 service-button text-[#D9E3EA]">
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
                // xs={12}
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
                    // padding: "20px",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/z9bZufPHFLU?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                    title="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </Paper>
              </Grid>

              <Grid
                item
                // xs={12}
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
                    // padding: "20px",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Hr5iLG7sUa0?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
                    title="Javascript for beginners | chai aur #javascript"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Box>

        {/* ************************************ */}
        <div>
          <div
            style={{ boxSizing: "border-box", width: "100%", marginTop: "2%" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <div style={{ boxSizing: "border-box", width: "80%" }}>
                <Grid
                  container
                  spacing={2}
                  style={{ color: "white", padding: "20px" }}
                >
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
                          // width:'30%',
                          flexWrap: "wrap",
                          color: "#9BA9B4",
                          boxShadow: "0px 0px 8px white",
                          margin: "5px",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          align="center"
                          style={{ fontSize: "x-large" }}
                        >
                          {industry}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Box>
          </div>
        </div>
      </>
    );
  }
}

export default page;
