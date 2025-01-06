import { Box, Button, Grid } from '@material-ui/core';
import Image from 'next/image';
import React from 'react'
import webDesginIcon from "@/components/assets/img/projectImg/web-design.webp";
import softwareDeveloperIcon from "@/components/assets/img/projectImg/software-developer.webp";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: "6rem", // 24px
    paddingBottom: "2rem", // 8px
    paddingLeft: "6rem", // 24px
    paddingRight: "6rem", // 24px
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2rem", // 8px
      paddingRight: "2rem", // 8px
    },
  },
}));
const projects = [
  {
    src: webDesginIcon,
    alt: "Enterprise e-Commerce Store – CAMPSAVER",
    description: "Enterprise e-Commerce Store – CAMPSAVER",
  },
  {
    src: softwareDeveloperIcon,
    alt: "UAE Government Application – DTMC",
    description: "UAE Government Application – DTMC",
  },
  {
    src: webDesginIcon,
    alt: "Marshalls World of Sport Website",
    description: "Marshalls World of Sport Website",
  },
  {
    src: softwareDeveloperIcon,
    alt: "Employees Shift Management Web App – Shift Manager",
    description: "Employees Shift Management Web App – Shift Manager",
  },
];
function PortfolioProjects() {
   const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer} spacing={4}>
      <Grid item xs={12}>
        <h2 className=" font text-center uppercase">PORTFOLIO</h2>
        <h2 className="text-3xl font-bold text-center mb-6 txt-[#D9E3EA]  ">
          Why Outsource Your Project to ZenQua?
        </h2>
      </Grid>
      <Grid container spacing={3}>
        {projects?.map((project, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <div className="w-full h-full flex flex-col items-center">
              <Image
                loading="lazy"
                src={project.src}
                alt={project.alt}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
              />
              <p className="text-center w-full text-[#9BA9B4] py-4 text-sm md:text-base lg:text-lg xl:text-xl">
                {project.description}
              </p>
            </div>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box className="w-full flex justify-center mt-4">
            <Button
              variant="contained"
              className="text-lg text-left text-white bg-[#019dce] hover:bg-[#1a7687] h-12 w-36 normal-case"
            >
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PortfolioProjects
