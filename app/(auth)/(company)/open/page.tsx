"use client";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
// import Divider from '@mui/material/Divider';
import { Divider } from "@material-ui/core";
import { Button } from "reactstrap";

class page extends Component {
  render() {
    const style1 = {
      height: "max(70%,100%)",
      flexWrap: "wrap",
      backgroundColor: "transparent",
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
            boxSizing: "border-box",
            width: "100%",
            marginTop: "8%",
            marginBottom: "5%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{ boxSizing: "border-box", width: "92%" }}>
              <Grid
                container
                spacing={2}
                style={{ color: "#D9E3EA", padding: "20px" }}
              >
                <Grid item xs={12}>
                  <h2 className="text-[16px] text-[ #D9E3EA] text-center mb-2 service-button mt-11 sm:mt-12 lg:mt-0">
                    Give Flight to Your Skills and touch The Skies
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <h2 className="text-7xl font-bold text-center mb-4 service-button">
                    Career Openings
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <h2 className="text-[19px] text-justify text-[ #9BA9B4] text-center mb-2 service-button mt- lg:mt-0">
                    ZenQua Invites Professionals from all niches and cliques to
                    join a team of 150+ energetic, highly-skilled, motivated and
                    highly capable professionals working together to create
                    future ready solutions to usher in a tech tomorrow.
                  </h2>
                </Grid>

                {[
                  "Explore Featured Jobs",
                  "Walk-In Interviews",
                  "Look For All Jobs",
                ].map((industry, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Paper
                      elevation={1}
                      style={{
                        backgroundColor: "transparent",
                        padding: "10px",
                        height: "15vh",
                        // width:'30%',
                        flexWrap: "wrap",
                        color: "#9BA9B4",
                        boxShadow: "0px 0px 8px white",
                        margin: "5px",
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
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

            <Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

        <div style={mainDiv}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            style={{
              width: "100vw",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              // xs={12}
              sm={12}
              // md={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                marginBottom: "5%",
              }}
            >
              <Box className="flex justify-center">
                <Paper
                  style={{
                    ...style1,
                    width: "92%",
                    boxSizing: "border-box",
                    padding: "20px",
                  }}
                >
                  <Paper
                    className="flex-col md:flex-row"
                    style={{
                      marginTop: "5px",
                      backgroundColor: "transparent",
                      display: "flex",
                    }}
                  >
                    <Typography
                      className="w-full md:w-1/2"
                      style={{
                        color: "#A1A1A1",
                        padding: "10px",
                      }}
                    >
                      <h2
                        className="text-3xl font-bold text-center mb-4 service-button"
                        style={{ color: "#D9E3EA" }}
                      >
                        Featured Jobs We're Hiring
                      </h2>
                      <h2 className="text-[19px] text-justify text-[ #9BA9B4] text-center mb-2 service-button mt- lg:mt-0">
                      ZenQua offers an excellent career where every day is
                      filled with great excitement and unmatchable growth. Our
                      industry leaders guide in creating next-gen IT solutions
                      by using the latest tools and technologies.
                      </h2>
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      style={{
                        backgroundColor: "#A1A1A1 ",
                        width: "4px",
                        margin: "0 2%",
                      }}
                    />
                    <Typography
                      className="w-full md:w-1/2"
                      style={{
                        color: "#9BA9B4",
                        backgroundColor:'transparent',
                        padding: "10px",
                        display: "flex",
                        // fontSize:'19px',
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{ display: "flex", alignItems: "center" ,fontSize:'19px' }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        Job Title
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        Trainee
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        ASP.Net Developer
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        Power BI Developer
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        Power Apps Developer
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        DevOps Engineer
                      </Typography>
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FaRegCircleDot style={{ marginRight: "2%" }} />
                        Java Developer
                      </Typography>
                    </Typography>
                  </Paper>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </div>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div style={{ boxSizing: "border-box", width: "80%" }}>
            <Grid
              container
              spacing={2}
              style={{ padding: "20px" }}
            >
              <Grid item xs={12}>
                <h2 className="text-5xl font-bold text-center mb-4 service-button  text-[#D9E3EA]">
                  Join Our Innovative Team
                </h2>
              </Grid>
              <Grid item xs={12}>
                <h2 className="text-[19px] text-center mb-2 service-button mt-2 lg:mt-0 text-[#9BA9B4]">
                  Give Yourself a Chance to work on trending and emerging
                  projects.
                </h2>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  style={{
                    fontSize: "17px",
                    textTransform: "none",
                    marginTop: "16px",
                    backgroundColor: "#5D5DFF",
                    color: "#FFF",
                    height: "60px",
                    width: "180px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                    marginBottom:'10%'
                  }}
                >
                  Apply Now
                </Button>
              </Grid>
            </Grid>
          </div>

          <Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default page;
