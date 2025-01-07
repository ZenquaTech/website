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
import HeroContent from "@/components/ui/HeroContent";
const LazyCircleContent = dynamic(
  () => import("@/components/ui/CircleContent")
);
const LazyWhyUsContent = dynamic(() => import("@/components/ui/WhyUs"));
const LazyPortfolioProjects = dynamic(
  () => import("@/components/ui/PortfolioProjects")
);
const LazyZenquaGlanceComponent = dynamic(
  () => import("@/components/ui/ZenquaGlance")
);
const LazyWhatWeDoComponent = dynamic(
  () => import("@/components/ui/WhatWeDo")
);
const LazyExpertiesComponent = dynamic(
  () => import("@/components/ui/Experties")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
);
const LazyBusinessEmpowermentComponent = dynamic(
  () => import("@/components/ui/BusinessEmpowerment")
);
const LazyContactUsComponent = dynamic(
  () => import("@/components/ui/contactus")
);
const LazyWantToHireComponent = dynamic(
  () => import("@/components/ui/WantToHire")
);

const imageMap: any = {
  timeMaterial,
  dedicatedDevelopmentTeam,
  largeBusiness,
  startupBusiness,
  smallMediumBusiness,
  reactNative,
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
      clickedButton: "Frame Work",
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
      }
    }
  }

  render() {
    const { params } = this.props;
    const content = jsonData[params.slug as keyof typeof jsonData] || {
      title: "Page not found",
      body: "Content not available for this route.",
    };
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
           
            <LazyWhatWeDoComponent content={content} />

            {/* ***********************end************************** */}

            {/* ************************section4********************************** */}

            <LazyExpertiesComponent content={content}/>

            {/* ***********************end************************** */}

            <LazyCircleContent/>

            {/* *******************************GLANCE******************************    */}

            <LazyZenquaGlanceComponent />

            {/* ***********************  end********************************* */}

            {/* *********************************************************** */}

            <LazyAdoptableApprochComponent />

            <LazyWhyUsContent/>

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
