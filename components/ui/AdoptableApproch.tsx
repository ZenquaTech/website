import { Grid, Paper, Typography, Box } from "@material-ui/core";
import React from "react";
import Image from "next/image";

function adoptable_approch() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[94%] mt-[20px]">
        <h2 className="font text-center uppercase text-[#D9E3EA]">
          ADAPTABLE APPROACH
        </h2>
        <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] ">
          Our Flexible Engagement Models
        </h2>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ width: "95%", margin: "0 auto" }}
        >
          <Grid
            item
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper
              style={{
                height: "max(70%,100%)",
                flexWrap: "wrap",
                backgroundColor: "transparent",
                boxShadow: "0px 0px 5px white",
                width: "100%",
                boxSizing: "border-box",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 className="font-bold text-xl text-[#D9E3EA]">
                Time & Material Basis Model
              </h2>
              <Typography
                style={{
                  textAlign: "justify",
                  hyphens: "auto",
                  color: "#9BA9B4",
                  marginTop: "5%",
                  fontSize: "16px",
                }}
              >
                Time and Material hiring model offers flexibility, cost saving,
                access to expertise, scalability & time-saving for projects with
                dynamic requirements. Ideal for businesses with long-term
                projects needing future modifications.
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5%",
                  width: "100%",
                }}
              >
                <Image
                  style={{
                    height: "0%",
                    width: "70%",
                  }}
                  src="/images/webpFile/Time-Material.webp"
                  alt="Time & Material Model"
                />
              </Box>
              <Paper
                style={{
                  marginTop: "5px",
                  backgroundColor: "transparent",
                  display: "flex",
                }}
              >
                <Typography
                  style={{
                    color: "#9BA9B4",
                    width: "50%",
                    padding: "10px",
                    textAlign: "justify",
                    hyphens: "auto",
                    fontSize: "16px",
                  }}
                >
                  Flexibility to hire resources as needed. cost-effective way to
                  hire expert developers. ability to scale resources up and down
                  as needed.
                </Typography>
                <Typography
                  style={{
                    color: "#9BA9B4",
                    width: "50%",
                    padding: "10px",
                    textAlign: "justify",
                    hyphens: "auto",
                    fontSize: "16px",
                  }}
                >
                  opportunity to work with experienced professionals. Quickly
                  lunch projects with minimal overhead. Access to specialized
                  skills and expertise.
                </Typography>
              </Paper>
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
            }}
          >
            <Paper
              style={{
                height: "max(70%,100%)",
                flexWrap: "wrap",
                backgroundColor: "transparent",
                boxShadow: "0px 0px 5px white",
                width: "100%",
                boxSizing: "border-box",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 className="font-bold text-xl text-[#D9E3EA]">
                Dedicated Developer Model
              </h2>

              <Typography
                style={{
                  textAlign: "justify",
                  hyphens: "auto",
                  color: "#9BA9B4",
                  marginTop: "5%",
                  fontSize: "16px",
                }}
              >
                Dedicated developer model is a cost-effective way for companies
                to hire full or part-time IT professionals for websites, mobile
                app, or software development. ideal for businesses seeking
                professionals It teams to effectively utilize time.
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5%",
                  width: "100%",
                }}
              >
                <Image
                  style={{
                    height: "90%",
                    width: "70%",
                  }}
                  src="/images/webpFile/dedicated-development_team-2.webp"
                  alt="Time & Material Model"
                />
              </Box>
              <Paper
                style={{
                  marginTop: "5px",
                  backgroundColor: "transparent",
                  display: "flex",
                }}
              >
                <Typography
                  style={{
                    color: "#9BA9B4",
                    width: "50%",
                    padding: "10px",
                    textAlign: "justify",
                    hyphens: "auto",
                    fontSize: "16px",
                  }}
                >
                  Ability to create a team around your project’s needs.
                  Long-term commitment to your project’s success. Access to wide
                  range of specialized skills.
                </Typography>
                <Typography
                  style={{
                    color: "#9BA9B4",
                    width: "50%",
                    padding: "10px",
                    textAlign: "justify",
                    hyphens: "auto",
                    fontSize: "16px",
                  }}
                >
                  Ability to use existing framework environments. Increased
                  accountability from a dedicated team. Long-term cost savings
                  from dedicated resources.
                </Typography>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default adoptable_approch;
