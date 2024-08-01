"use client";
import { Paper, Typography, Avatar, Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

export class page extends Component {
  render() {
    return (
      <>
        <div>
          <div
            style={{ boxSizing: "border-box", width: "100%", margin: "10% 0" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <div style={{ boxSizing: "border-box", width: "91%" }}>
                <Grid
                  container
                  spacing={2}
                  style={{ padding: "20px" }}
                >
                  <Grid item xs={12}>
                    <h2 className="text-[16px]  text-[#D9E3EA] text-center mb-2 service-button mt-10 sm:mt-5 lg:mt-0">
                      Improve and Innovate with the Tech Trends
                    </h2>
                  </Grid>
                  <Grid item xs={12}>
                    <h2 className="text-4xl  text-[#D9E3EA] font-bold text-center mb-6 service-button">
                      Discover Exciting Career Opportunities at ZenQua
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
                          height: "13vh",
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
            </Box>
          </div>
        </div>
      </>
    );
  }
}

export default page;
