"use client";
import React, { Component } from "react";
import jsonData from "./data.json";
import {
  Box,
  Grid,
  Button,
  Typography,
  Paper,
  styled,
  CardActionArea,
  Card,
  CardContent,
} from "@material-ui/core";
import dynamic from "next/dynamic";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import timeMaterial from "@/components/assets/img/reactjsimg/Time-Material.webp";
import dedicatedDevelopmentTeam from "@/components/assets/img/reactjsimg/dedicateddevelopmentteam.webp";
import largeBusiness from "@/components/assets/img/reactjsimg/large_business.webp";
import startupBusiness from "@/components/assets/img/reactjsimg/startup-business.webp";
import reactNative from "@/components/assets/img/angularimg/react-native.webp";
import smallMediumBusiness from "@/components/assets/img/reactjsimg/small-medium_business.webp";
import laravel from "@/components/assets/img/reactjsimg/laravel.webp";
import django from "@/components/assets/img/reactjsimg/django.webp";
import codeignitor from "@/components/assets/img/reactjsimg/Codeignitor.webp";
import nginx from "@/components/assets/img/reactjsimg/Nginx_logo.webp";
import logoUser from "@/components/assets/img/reactjsimg/randomfur.webp";
import angular from "@/components/assets/img/angularimg/angular-1.webp";
import nextjs from "@/components/assets/img/angularimg/nextjslogo.webp";
import vuejs from "@/components/assets/img/angularimg/vuejslogo.webp";
import reactjs from "@/components/assets/img/angularimg/reactjs.webp";
import firebase from "@/components/assets/img/angularimg/firebase.webp";
import mongodb from "@/components/assets/img/angularimg/mongodb.webp";
import mysql from "@/components/assets/img/angularimg/mysql.webp";
import oracle from "@/components/assets/img/angularimg/oracle.webp";
import python from "@/components/assets/img/angularimg/python.webp";
import aws from "@/components/assets/img/angularimg/Aws.webp";
import azure from "@/components/assets/img/angularimg/Azure.webp";
import google from "@/components/assets/img/angularimg/google.webp";
import nodejs from "@/components/assets/img/angularimg/nodejs.webp";
import ror from "@/components/assets/img/angularimg/nestjs.webp";
import Image from "next/image";
import HeroContent from "@/components/ui/HeroContent";

const LazyCircleContent = dynamic(
  () => import("@/components/ui/CircleContent")
);
const LazyWantToHireComponent = dynamic(
  () => import("@/components/ui/WantToHire")
);
const LazyBusinessEmpowermentComponent = dynamic(
  () => import("@/components/ui/BusinessEmpowerment")
);
const LazyContactUsComponent = dynamic(
  () => import("@/components/ui/contactus")
);
const LazyZenquaGlanceComponent = dynamic(
  () => import("@/components/ui/ZenquaGlance")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
);
const LazyWhatWeDoAndExpertiesComponent = dynamic(
  () => import("@/components/ui/WhatWeDoAndExperties")
);
const LazyPortfolioProjects = dynamic(
  () => import("@/components/ui/PortfolioProjects")
);
const LazyWhyUs = dynamic(() => import("@/components/ui/WhyUs"));
const imageMap: any = {
  laravel,
  aws,
  nodejs,
  ror,
  azure,
  google,
  vuejs,
  angular,
  reactjs,
  django,
  codeignitor,
  nginx,
  logoUser,
  mysql,
  oracle,
  mongodb,
  python,
  firebase,
  timeMaterial,
  dedicatedDevelopmentTeam,
  largeBusiness,
  startupBusiness,
  smallMediumBusiness,
  reactNative,
  nextjs,
};

interface PageState {
  hoveredCircle: number | null;
  clickedButton: string;
  State2: State2;
  clickedButton6: string;
  Cost: boolean;
  Vast: boolean;
  Time: boolean;
  Experienced: boolean;
  Reduced: boolean;
  Custom: boolean;
}

interface State2 {
  backend: boolean;
  Cost: boolean;
  Vast: boolean;
  Time: boolean;
  Experienced: boolean;
  Reduced: boolean;
  Custom: boolean;
  clickedButton6: string;
}

interface RoutePageProps {
  params: {
    slug: string;
  };
}

class RoutePage extends Component<RoutePageProps, PageState> {
  constructor(props: RoutePageProps) {
    super(props);
    this.state = {
      clickedButton: "Frameworks",
      clickedButton6: "Cost-Effectiveness",
      hoveredCircle: 1,
      Cost: false,
      Vast: false,
      Time: false,
      Experienced: false,
      Reduced: false,
      Custom: false,
      State2: {
        backend: false,
        Cost: false,
        Vast: false,
        Time: false,
        Experienced: false,
        Reduced: false,
        Custom: false,
        clickedButton6: "Cost-Effectiveness",
      },
    };
  }

  render() {
    const { params } = this.props;
    const content = jsonData[params.slug as keyof typeof jsonData] || {
      title: "Page not found",
      body: "Content not available for this route.",
    };

    const { clickedButton } = this.state;

    return (
      <>
        <MainWrapper>
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
            {/* ************************section1********************************** */}

            <HeroContent
              item={content.section1}
              image={
                imageMap[content.section1.image]?.src || content.section1.image
              }
            />

            {/* ************************end********************************** */}

            {/* ************************section2********************************** */}

            <LazyWantToHireComponent
              headingText={content.section2?.heading1}
              buttonText={content.section2?.button}
            />
            {/* ************************end********************************** */}

            {/* ************************section3********************************** */}

            <LazyWhatWeDoAndExpertiesComponent
              item={content.item1}
              content={content.section3}
            />

            {/* ***********************end************************** */}

            {/* ************************section4********************************** */}

            <LazyWhatWeDoAndExpertiesComponent
              item={content.item3}
              content={content.section4}
            />

            {/* ***********************end************************** */}

            <LazyCircleContent />

            {/* *******************************GLANCE******************************    */}

            <LazyZenquaGlanceComponent />

            {/* ***********************  end********************************* */}

            <div className="box-border w-full mt-[4%]">
              {content?.sectionexperties?.map((item: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <h2
                      className=" font text-center  service-button"
                      style={{ textTransform: "uppercase" }}
                    >
                      {item.heading}
                    </h2>
                    <h2 className="text-3xl font-bold text-center mb-6 service-button">
                      {item.heading1}
                    </h2>
                  </React.Fragment>
                );
              })}

              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      width: "100%",
                    },
                  }}
                  style={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100vw",
                  }}
                >
                  <Grid
                    container
                    spacing={0}
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Paper
                        style={{
                          height: "100%",
                          padding: "theme.spacing(2)",
                          backgroundColor: "transparent",
                          borderRadius: "none",
                          boxShadow: "none",
                          width: "92%",
                        }}
                      >
                        <Box
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {content?.expertise?.map(
                            (item: any, index: number) => {
                              return (
                                <Button
                                  key={index}
                                  className="service-button"
                                  onClick={() => {
                                    this.setState({
                                      clickedButton: `${item.button}`,
                                    });
                                  }}
                                  style={{
                                    borderBottom:
                                      this.state.clickedButton ===
                                      `${item.button}`
                                        ? "2px solid #019dce"
                                        : "none",
                                    width: "-1px",
                                    alignItems: "center",
                                    fontSize:
                                      this.state.clickedButton ===
                                      `${item.button}`
                                        ? "23px"
                                        : "20px",
                                    fontWeight: "bold",
                                    borderRadius: 0,
                                    background:
                                      this.state.clickedButton ===
                                      `${item.button}`
                                        ? "#171717"
                                        : "none",
                                    color:
                                      this.state.clickedButton ===
                                      `${item.button}`
                                        ? "#019dce"
                                        : "white",
                                  }}
                                  disableRipple
                                >
                                  {item.button}
                                </Button>
                              );
                            }
                          )}
                        </Box>
                        <Box className="flex justify-center w-full p-16">
                          {content?.expertise?.map((item: any, index: number) =>
                            item.button === clickedButton
                              ? item?.images?.map((img: any) => {
                                  return (
                                    <Image
                                      loading="lazy"
                                      key={index}
                                      src={imageMap[img.img]?.src || img.img}
                                      alt={img.img || "imagetitle"}
                                      width={110}
                                      height={110}
                                      className="flex flex-wrap"
                                    />
                                  );
                                })
                              : null
                          )}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    display: { xs: "block", sm: "none" },
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                  }}
                >
                  <Carousel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {content?.expertise?.map((item: any, index: any) => (
                      <Card
                        key={index}
                        style={{
                          height: "100%",
                          width: "100%",
                          border: "solid 1px white",
                          borderRadius: "20px",
                          background: "transparent",
                          color: "white",
                        }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{ textAlign: "center", marginTop: "12%" }}
                            >
                              {item.button}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "12%",
                                flexWrap: "wrap",
                              }}
                            >
                              {item?.images?.map((img: any, imgIndex: any) => (
                                <Image
                                  loading="lazy"
                                  key={imgIndex}
                                  src={imageMap[img.img]?.src || img.img}
                                  alt={img.img || "imagetitle"}
                                  width={110}
                                  height={110}
                                  style={{
                                    height: "70px",
                                    margin: "0 10px",
                                  }}
                                />
                              ))}
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    ))}
                  </Carousel>
                </Box>
              </Box>
            </div>

            {/* *********************************************************** */}

            <LazyAdoptableApprochComponent />

            {/* ******************** Why Outsource Your Project to ZenQua? ************************ */}

            <LazyWhyUs />

            {/* ********************  End ************************ */}

            {/* ***********************      BUSINESS EMPOWERMENT   ***************************** */}

            <LazyBusinessEmpowermentComponent />
            {/* **********************  End   ****************************** */}

            {/* ***********************     PORTFOLIO  ***************************** */}

            <LazyPortfolioProjects />

            {/* **********************  End   ****************************** */}

            {/* ********************************** Contact Us *********************** */}
            <LazyContactUsComponent />

            {/* ********************************** End *********************** */}
          </div>
        </MainWrapper>
      </>
    );
  }
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    color: "#D9E3EA",
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "1rem",
  },
  "& .typo-2": {
    color: "#D9E3EA",
    fontWeight: "bold",
    fontSize: "40px",
  },
  "& .typo-3": {
    marginTop: "2rem",
    // color: "#D9E3EA",
    fontSize: "18px",
  },
  "& .btn1": {
    background: "rgb(25, 191, 177)",
    borderRadius: "5px",
    marginTop: "1.5rem",
  },
  "& .box1": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "6%",
  },
  "& .typo-4": {
    textAlign: "center",
    color: "#D9E3EA",
    margin: "1rem",
  },
});
export default RoutePage;
