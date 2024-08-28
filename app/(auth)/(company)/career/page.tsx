"use client";
import React from "react";
import { Box, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { FaRegCircleDot } from "react-icons/fa6";
import { Button } from "reactstrap";

const Page = () => {
  const commonStyle = {
    color: "white",
    backgroundColor: "transparent",
    padding: "20px",
    width: "92%",
    margin: "10px",
    boxShadow: "0px 0px 8px #fff",
    transition: "transform 0.3s ease",
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
            <Grid container spacing={2} style={{ color: "#D9E3EA", padding: "20px" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  className="text-[#D9E3EA] mb-2 service-button mt-11 sm:mt-12 lg:mt-0"
                >
                  Give Flight to Your Skills and touch The Skies
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
                  Career Openings
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  className="text-[#9BA9B4] mb-2 service-button mt- lg:mt-0"
                >
                  ZenQua Invites Professionals from all niches and cliques to join a team of 150+
                  energetic, highly-skilled, motivated and highly capable professionals working
                  together to create future-ready solutions to usher in a tech tomorrow.
                </Typography>
              </Grid>

              {["Explore Featured Jobs", "Walk-In Interviews", "Look For All Jobs"].map(
                (industry, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Paper
                      elevation={1}
                      style={{
                        ...commonStyle,
                        height: "10vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "3%",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Typography variant="subtitle1" align="center" style={{ fontSize: "x-large" }}>
                        {industry}
                      </Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>
          </div>
        </Box>
      </Box>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        style={{ width: "100vw", margin: "0 auto", display: "flex" }}
      >
        <Grid
          item
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            marginBottom: "5%",
          }}
        >
          <Box className="flex justify-center" style={{ width: "100%" }}>
            <Paper
              style={{
                height: "max(70%,100%)",
                backgroundColor: "transparent",
                boxShadow: "0px 0px 5px white",
                width: "92%",
                padding: "20px",
              }}
            >
              <Paper
                className="flex-col md:flex-row"
                style={{
                  marginTop: "5px",
                  backgroundColor: "transparent",
                  display: "flex",
                  boxShadow: "none",
                }}
              >
                <Typography
                  className="w-full md:w-1/2"
                  style={{ color: "#A1A1A1", padding: "10px" }}
                >
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}
                  >
                    Featured Jobs We're Hiring
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-2xl text-justify text-center mb-2 service-button lg:mt-0"
                  >
                    ZenQua offers an excellent career where every day is filled with great excitement
                    and unmatchable growth. Our industry leaders guide in creating next-gen IT
                    solutions by using the latest tools and technologies.
                  </Typography>
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ backgroundColor: "#A1A1A1", width: "4px", margin: "0 2%" }}
                />
                <Typography
                  className="w-full md:w-1/2"
                  style={{
                    color: "#9BA9B4",
                    backgroundColor: "transparent",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}
                  >
                    Job Title
                  </Typography>
                  {[
                    "Trainee",
                    "ASP.Net Developer",
                    "Power BI Developer",
                    "Power Apps Developer",
                    "DevOps Engineer",
                    "Java Developer",
                  ].map((title, idx) => (
                    <Typography key={idx} style={{ display: "flex", alignItems: "center" }}>
                      <FaRegCircleDot style={{ marginRight: "2%" }} />
                      {title}
                    </Typography>
                  ))}
                </Typography>
              </Paper>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ boxSizing: "border-box", width: "80%" }}>
          <Grid container spacing={2} style={{ padding: "20px" }}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
                Join Our Innovative Team
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                className="text-[#9BA9B4] mb-2 service-button mt-2 lg:mt-0"
              >
                Give Yourself a Chance to work on trending and emerging projects.
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "10px",
                  fontSize: "17px",
                  textTransform: "none",
                  marginTop: "8px 30px",
                  backgroundColor: "#019dce",
                  color: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10%",
                }}
              >
                Apply Now
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Page;