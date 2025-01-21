import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'

function ZenquaIndustryExpertise() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div
        // style={{ boxSizing: "border-box", width: "98%" }}
        // className="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-800"
        className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
      >
        <Grid container spacing={2} >
          <Grid item xs={12} className="py-3">
            <h2 className="font text-center uppercase text-[#D9E3EA]">
              INDUSTRIES WE SERVE
            </h2>
            <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA]">
              ZenQua Industry Expertise
            </h2>
          </Grid>

          {[
            "Health & Medicare",
            "Logistics & Distribution",
            "Real Estate",
            "eCommerce & Retail",
            "Finance & Banking",
            "Education & Elearning",
            "Travel & Hospitality",
            "Manufacturing",
            "Oil & Gas",
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
                className="hover:scale-105"
              >
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{
                    fontSize: "x-large",
                    color: "#9BA9B4",
                    fontWeight: "bold",
                  }}
                >
                  {industry}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default ZenquaIndustryExpertise
