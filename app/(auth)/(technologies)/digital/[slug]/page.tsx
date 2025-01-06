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
import { FaStar } from "react-icons/fa";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import ContactUs from "@/components/ui/contactus";
import WantToHire from "@/components/ui/WantToHire";

const LazyZenquaGlanceComponent = dynamic(
  () => import("@/components/ui/ZenquaGlance")
);
const LazyAdoptableApprochComponent = dynamic(
  () => import("@/components/ui/AdoptableApproch")
);
const LazyWhatWeDoComponent = dynamic(
  () => import("@/components/ui/WhatWeDo")
);
const LazyPortfolioProjects = dynamic(
  () => import("@/components/ui/PortfolioProjects")
);
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
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

            {content?.section1?.map((item: any, index: any) => (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                key={index}
              >
                <div className="bg-transparent p-8 flex flex-col text-left">
                  <h2 className="text-lg mt-12 font-bold text-[#D9E3EA]">
                    {item.heading1}
                  </h2>
                  <h1 className="text-2xl md:text-3xl font-bold my-4 text-[#D9E3EA]">
                    {item.heading2}
                  </h1>
                  <p className="text-medium my-2 text-justify text-[#9BA9B4]">
                    {item.para}
                  </p>
                  <button
                    className="bg-[#019dce] text-[#D9E3EA] text-md mt-4 px-6 rounded-lg py-2 w-40 font-medium"
                    onClick={() => scrollToBottom()}
                  >
                    {item.button}
                  </button>
                </div>
                <div className="mt-20 flex justify-center">
                  <img src={item.image} alt="" className="object-contain" />
                </div>
              </div>
            ))}
            {/* ************************end********************************** */}

            {/* ************************section2********************************** */}
            <WantToHire
              headingText={content.section2?.heading1}
              buttonText={content.section2?.button}
            />
            {/* ************************end********************************** */}

            {/* ************************section3********************************** */}
            <LazyWhatWeDoComponent content={content}/>

            {/* <Grid container>
              {content.section3.map((item: any, index: any) => {
                return (
                  <Grid item xs={12}>
                    <Box className="box1">
                      <Typography style={{ color: "#D9E3EA" }}>
                        {item.heading1}
                      </Typography>
                      <Typography className="typo-2 text-center text-[#D9E3EA]">
                        {item.heading2}
                      </Typography>
                      <Typography
                        className="text-justify py-2"
                        style={{
                          fontSize: "16px",
                          color: "#9BA9B4",
                          width: "98%",
                        }}
                      >
                        {item.para}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            <Grid container>
              {content.item1.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    sx={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "500px",
                      borderRadius: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        marginTop: "1rem",
                        fontSize: "21px",
                        color: "#D9E3EA",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <FaStar style={{ color: "#019dce", fontSize: "150%" }} />
                      <span style={{ paddingLeft: "3%" }}>{item.title}</span>
                    </Typography>

                    <Typography
                      style={{
                        textAlign: "justify",
                        marginTop: "1rem",
                        color: "#9BA9B4",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Grid container>
              {content.item2.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    style={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "500px",
                      borderRadius: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        fontSize: "21px",
                        color: "#D9E3EA",
                        fontWeight: "bold",
                      }}
                    >
                      <FaStar style={{ color: "#019dce", fontSize: "150%" }} />
                      <span style={{ paddingLeft: "3%" }}>{item.title}</span>
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "justify",
                        marginTop: "1rem",
                        color: "#9BA9B4",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid> */}

            {/* ***********************end************************** */}

            {/* ************************section4********************************** */}

            {/* <Grid container>
              {content.section4.map((item: any, index: any) => {
                return (
                  <Grid item xs={12}>
                    <Box className="box1">
                      <Typography style={{ color: "#D9E3EA" }}>
                        {item.heading1}
                      </Typography>
                      <Typography className="typo-2 text-center">
                        {item.heading2}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            <Grid container>
              {content.item3.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    style={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "500px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        fontSize: "21px",
                        color: "#D9E3EA",
                        fontWeight: "bold",
                      }}
                    >
                      <FaStar style={{ color: "#019dce", fontSize: "150%" }} />
                      <Box style={{ marginTop: "2%", paddingLeft: "3%" }}>
                        {item.title}
                      </Box>
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "justify",
                        marginTop: "1rem",
                        color: "#9BA9B4",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Grid container>
              {content.item4.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    style={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "500px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        fontSize: "21px",
                        color: "#D9E3EA",
                        fontWeight: "bold",
                      }}
                    >
                      <FaStar style={{ color: "#019dce", fontSize: "150%" }} />
                      <Box style={{ marginTop: "2%", paddingLeft: "3%" }}>
                        {item.title}
                      </Box>
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "justify",
                        marginTop: "1rem",
                        color: "#9BA9B4",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid> */}

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

            <LazyZenquaGlanceComponent/>

            {/* ***********************  end********************************* */}

            {/* *********************************************************** */}

            
            <LazyAdoptableApprochComponent/>

            {/* ******************** Why Outsource Your Project to ZenQua? ************************ */}

            <div className="box-border w-full mt-[4%]">
              <h2 className=" font text-center uppercase text-[#D9E3EA]">
                WHY US
              </h2>
              <h2 className="text-3xl font-bold text-center mb-6 service-button">
                Why Outsource Your Project to ZenQua?
              </h2>
              <div
                className="hidden sm:flex justify-center flex rounded-[20px]"
                style={{ border: "1px solid #D9E3EA !important" }}
              >
                <Grid
                  container
                  spacing={0}
                  className="justify-center w-full border rounded-[20px] p-4"
                >
                  <Grid item xs={6} sm={3}>
                    <Paper
                      style={{
                        height: "100%",
                        paddingRight: "4px",
                        backgroundColor: "transparent",
                      }}
                    >
                      {content.servicesData2.map((service: any, index: any) => (
                        <Button
                          className="hover:text-#D9E3EA w-full"
                          key={index}
                          onClick={() =>
                            this.handleClick6(service.stateKey, service.label)
                          }
                          disableRipple
                        >
                          <h3
                            className="font-bold flex items-center w-full h-full"
                            style={{
                              width: "100%",
                              height: "40px",
                              marginTop: "3%",
                              borderRight:
                                this.state.clickedButton6 === service.label
                                  ? "2px solid #019dce"
                                  : "none",
                              paddingLeft: 10,
                              color:
                                this.state.clickedButton6 === service.label
                                  ? "#019dce"
                                  : "#D9E3EA",
                              fontSize:
                                this.state.clickedButton6 === service.label
                                  ? "16px"
                                  : "14.50px",
                              backgroundColor:
                                this.state.clickedButton6 === service.label
                                  ? "#222224"
                                  : "transparent",
                            }}
                          >
                            {service.label}
                          </h3>
                        </Button>
                      ))}
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={9}>
                    <Paper
                      style={{
                        height: "100%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        padding: "12px",
                        color: "#D9E3EA",
                      }}
                    >
                      {content.servicesData2.map((service: any) =>
                        this.state.clickedButton6 === service.label ? (
                          <div>
                            <div className="text-2xl font-bold text-[#019dce]">
                              {service.label}
                            </div>

                            <div
                              className="text-xl  text-[#9BA9B4]"
                              key={service.label}
                            >
                              {service.content}
                            </div>
                          </div>
                        ) : null
                      )}
                    </Paper>
                  </Grid>
                </Grid>
              </div>
              {/* </div> */}

              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "98%",
                  marginBottom: "2%",
                }}
              >
                <Carousel
                  autoPlay={true}
                  navButtonsAlwaysVisible={false}
                  indicators={false}
                  animation="slide"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "transform 0.10s ease-in-out",
                  }}
                >
                  {content.servicesData2.map((item: any, i: any) => (
                    <Card
                      key={i}
                      style={{
                        height: "50vh",
                        width: "100%",
                        border: "solid 1px #D9E3EA",
                        borderRadius: "20px",
                        background: "transparent",
                        color: "#D9E3EA",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            variant="h5"
                            component="h2"
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                              fontSize: "21px",
                              marginBottom: "5%",
                              color: "#019dce",
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              color: "#9BA9B4",
                              fontSize: "19px",
                              margin: "2%",
                              textAlign: "justify",
                            }}
                          >
                            {item.content}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </Box>
            </div>

            {/* ********************  End ************************ */}

            {/* ***********************      BUSINESS EMPOWERMENT   ***************************** */}

            <Box style={{ marginTop: "5%" }}>
              <h2
                className=" font text-center  service-button"
                style={{ textTransform: "uppercase" }}
              >
                BUSINESS EMPOWERMENT
              </h2>
              <h2 className="text-3xl font-bold text-center mb-6 service-button">
                Tailored development solutions for all business types
              </h2>
              <Carousel
                autoPlay={true}
                navButtonsAlwaysVisible={false}
                indicators={false}
                animation="slide"
              >
                {content.business.map((item: any, i: any) => (
                  <Grid
                    key={i}
                    container
                    style={{
                      background: "transparent",
                      color: "#9BA9B4",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "justify",
                    }}
                  >
                    <Grid item xs={12} sm container>
                      <CardActionArea>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={400}
                          />
                        )}
                      </CardActionArea>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                          <Typography
                            style={{
                              color: "#D9E3EA",
                              fontSize: "30px",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: "#9BA9B4",
                              fontSize: "16px",
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Carousel>
            </Box>
            {/* **********************  End   ****************************** */}

            {/* ***********************     PORTFOLIO  ***************************** */}

           <LazyPortfolioProjects/>

            {/* **********************  End   ****************************** */}

            {/* ********************************** Contact Us *********************** */}
            <ContactUs />
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
