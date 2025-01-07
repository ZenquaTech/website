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
import AWS from "@/public/images/webpFile/AWS.webp"
import Azure from "@/public/images/webpFile/Azure.webp"
import GoogleCloud from "@/public/images/webpFile/Google_Cloud.webp";
import HeroContent from "@/components/ui/HeroContent";
const LazyContactComponent = dynamic(
  () => import("@/components/ui/contactus")
);
const LazyWantToHireComponent = dynamic(
  () => import("@/components/ui/WantToHire")
);
const LazyBusinessEmpowermentComponent = dynamic(
  () => import("@/components/ui/BusinessEmpowerment")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
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
const LazyPortfolioProjects = dynamic(
  () => import("@/components/ui/PortfolioProjects")
);
const LazyWhyUsContent = dynamic(() => import("@/components/ui/WhyUs"));
const imageMap: any = {
  AWS,
  GoogleCloud,
  Azure
}

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
interface ContentProps {
  body: string;
}

interface RoutePageProps {
  params: {
    slug: string;
  };
}

class Content extends Component<ContentProps> {
  render() {
    const { body } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: body }} />;
  }
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

  handleMouseEnter = (circleIndex: number) => {
    this.setState({ hoveredCircle: circleIndex });
  };

  circleData = [
    {
      id: 1,
      title: "Requirement Gathering",
    },
    {
      id: 2,
      title: "Designing",
    },
    {
      id: 3,
      title: "Development",
    },
    {
      id: 4,
      title: "Deployment",
    },
    {
      id: 5,
      title: "Maintenance",
    },
  ];

  getCircleContent = (index: number): string => {
    switch (index) {
      case 1:
        return "At zenqua, we begin the custom software development process with a discovery phase where our business analyst and project Manager collect, research, and fully undertand the subject idea and specify the main requirements for the product. At this stage, we quickly validate if your business ideas are viable, feasible, and usable. At the end of this stage, we provides accurate time and cost estimates to our customers.";
      case 2:
        return "We are done with the discovery phase, our UX/UI design team begins analyzing project requirements. this helps our design team ensure that the app's information architecture is structured effectively. Next, our team create a wireframe, which are rough sketches that show the layout and position of elements on a web page. These wireframes do not include any logos or colors, and are designed to prioritize usability over visual appeal. Once the wireframes are approved by the customer, our UI/UX design team turns them into clickable prototypes that allow for the first user interaction. The final UI design is based on these prototypes.";
      case 3:
        return "zenqua follows the Agile philosophy in the software development process to reduce the risk of project failure, continuously improve our products, and be responsive to any necessary changes. This approach gives our customers full control over their projects through the inclusion of feedback, transparency, and quality control features. As a result, they receive high-quality digital products. To complete the software development process, we divide it into short sprints. We begin each sprint by prioritizing tasks in the backlog and then have our software developers build the required functionality. After a piece of functionality is completed, our quality assurance engineers test it to ensure it functions properly and is bug-free.";
      case 4:
        return "So, basically, when we launch your software solution, it means we're releasing the final version to your end users. This happens after we've fixed all the bugs and made all the improvements. This is the last step in the development process, and it's when you can see how people are using your product. Along with putting the solution out there for everyone to use, our team will also put together some release notes. These are like technical instructions that have details about the bugs we fixed and the enhancements we made. The release notes are a big deal because they help us connect with users and get the word out about your new product.";
      case 5:
        return "To keep your PHP app relevant and responsive to customer needs, ongoing updates and maintenance are necessary. We provide high-quality post-launch maintenance and support services to ensure that your app is bug-free and available 24/7. We offer two options for maintaining your digital product: a set number of hours for a monthly fee, or a backlog of tasks that takes a minimum of 80 hours to complete.";
      default:
        return "";
    }
  };

  getCirclePositionClass = (index: number): string => {
    switch (index) {
      case 1:
        return "top";
      case 2:
        return "left";
      case 3:
        return "right";
      case 4:
        return "bottom-left";
      case 5:
        return "bottom-right";
      default:
        return "";
    }
  };

  handleClick6 = (stateKey: keyof State2, label: string) => {
    this.setState({
      clickedButton6: label,
    });
  };
  render() {
    const { hoveredCircle } = this.state;

    const { params } = this.props;
    const content = jsonData[params.slug as keyof typeof jsonData] || {
      title: "Page not found",
      body: "Content not available for this route.",
    };

    const { clickedButton } = this.state;

    const style1 = {
      flexWrap: "wrap" as "nowrap" | "wrap" | "wrap-reverse",
      backgroundColor: "transparent",
      boxShadow: "0px 0px 5px #D9E3EA",
    };

    const { Cost, Vast, Time, Experienced, Reduced, Custom, clickedButton6 } =
      this.state;

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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[100%] mt-[4%] ">
              <h2 className=" font text-center service-button uppercase">
                OUR PROCESS
              </h2>
              <h2 className="text-3xl font-bold text-center mb-8 hover:text-[#019dce]">
                Software Development Methodology
              </h2>
            </div>
            <div className="App">
              <div>
                <div className="main-circle">
                  <div
                    className="content-circle"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h1
                      style={{
                        fontSize: "15px",
                        marginBottom: "2%",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {hoveredCircle &&
                        this.circleData[hoveredCircle - 1]?.title}
                    </h1>
                    <p>{this.getCircleContent(hoveredCircle!)}</p>
                  </div>
                  {this.circleData.map((data) => (
                    <div
                      key={data.id}
                      className={`small-circle ${
                        data.id === hoveredCircle ? "hovered" : ""
                      } ${this.getCirclePositionClass(data.id)}`}
                      onMouseEnter={() => this.handleMouseEnter(data.id)}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        {data.id} . {data.title}
                      </div>
                    </div>
                  ))}
                </div>
                {/* <img src={image} alt="C++ logo" className="responsive-image" /> */}
              </div>
            </div>
            {/* *******************************GLANCE******************************    */}

            <LazyZenquaGlanceComponent />

            {/* ***********************  end********************************* */}
            {/* *********************************************************** */}

            <LazyAdoptableApprochComponent />

            {/* ******************** Why Outsource Your Project to ZenQua? ************************ */}
            <LazyWhyUsContent/>
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
