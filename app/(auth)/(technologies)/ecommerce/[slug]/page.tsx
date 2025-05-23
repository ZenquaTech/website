"use client";
import React, { Component } from "react";
import jsonData from "./data.json";
import { Box, styled } from "@material-ui/core";
import dynamic from "next/dynamic";
import timeMaterial from "@/components/assets/img/reactjsimg/Time-Material.webp";
import dedicatedDevelopmentTeam from "@/components/assets/img/reactjsimg/dedicateddevelopmentteam.webp";
import largeBusiness from "@/components/assets/img/reactjsimg/large_business.webp";
import startupBusiness from "@/components/assets/img/reactjsimg/startup-business.webp";
import smallMediumBusiness from "@/components/assets/img/reactjsimg/small-medium_business.webp";
import woocommerce from "@/components/assets/img/angularimg/woocommerce.webp";
import spotify from "@/components/assets/img/angularimg/Shopify.webp";
import magento from "@/components/assets/img/angularimg/smc.webp";
import nop from "@/components/assets/img/angularimg/nopcommerce.webp";
const LazyCircleContent = dynamic(
  () => import("@/components/ui/CircleContent")
);
const LazyBusinessEmpowermentComponent = dynamic(
  () => import("@/components/ui/BusinessEmpowerment")
);
const LazyContactComponent = dynamic(() => import("@/components/ui/contactus"));
const LazyWantToHireComponent = dynamic(
  () => import("@/components/ui/WantToHire")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
);
const LazyZenquaGlanceComponent = dynamic(
  () => import("@/components/ui/ZenquaGlance")
);
const LazyWhatWeDoAndExpertiesComponent = dynamic(
  () => import("@/components/ui/WhatWeDoAndExperties")
);
const LazyPortfolioProjects = dynamic(
  () => import("@/components/ui/PortfolioProjects")
);
const LazyWhyUsContent = dynamic(() => import("@/components/ui/WhyUs"));

const imageMap: any = {
  timeMaterial,
  dedicatedDevelopmentTeam,
  smallMediumBusiness,
  startupBusiness,
  largeBusiness,
  woocommerce,
  spotify,
  nop,
  magento,
};

import HeroContent from "@/components/ui/HeroContent";

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
      },
    };
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
          <div
            // className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8"
            className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 max-sm:mt-20 mb-8"
            >
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

            {/* *********************************************************** */}

            <LazyAdoptableApprochComponent />

            {/* ******************** Why Outsource Your Project to ZenQua? ************************ */}

            <LazyWhyUsContent />
            {/* ********************  End ************************ */}

            {/* ***********************      BUSINESS EMPOWERMENT   ***************************** */}

            <LazyBusinessEmpowermentComponent />
            {/* **********************  End   ****************************** */}

            {/* ***********************     PORTFOLIO  ***************************** */}

            <LazyPortfolioProjects />

            {/* **********************  End   ****************************** */}

            {/* ********************************** Contact Us *********************** */}
            <LazyContactComponent />
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
