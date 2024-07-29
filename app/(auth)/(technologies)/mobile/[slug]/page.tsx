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
import { FaStar } from "react-icons/fa";
import AddIcon from "@material-ui/icons/Add";
import CountUp from "react-countup";
import Carousel from "react-material-ui-carousel";
import "./styles.css";

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
  constructor(props: {}) {
    super(props);
    this.state = {
      clickedButton: "Frame Work",
      clickedButton6: "Cost-Effectiveness",
      hoveredCircle: 1,
    };
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
    console.log("hello world");
    const { hoveredCircle } = this.state;

    const { params } = this.props;
    const content = jsonData[params.slug] || {
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

            {content.section1.map((item: any, index: any) => {
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-transparent p-8 flex flex-col text-left">
                    <h2 className="text-lg mt-12 font-bold text-[#D9E3EA]">
                      {item.heading1}
                    </h2>
                    <h1 className="text-2xl md:text-3xl font-bold my-4 text-[#D9E3EA]">
                      {item.heading2}
                    </h1>
                    <p className="text-xl my-2 text-justify text-[#9BA9B4]">
                      {item.para}
                    </p>
                    <button
                      className="bg-[#5D5DFF] text-[#D9E3EA] text-md mt-4 px-6 py-3 rounded-md h-14 w-40 font-medium"
                      onClick={() => scrollToBottom()}
                    >
                      {item.button}
                    </button>
                  </div>
                  <div className="mt-20 flex justify-center ">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              );
            })}
            {/* ************************end********************************** */}

            {/* ************************section2********************************** */}

            <Box
              style={{
                flexGrow: "1px",
                borderLeft: "1px solid blue",
                marginTop: "4%",
              }}
            >
              {content.section2.map((item: any, index: any) => {
                return (
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={12} md={8}>
                      <Typography
                        style={{
                          color: "#D9E3EA",
                          fontWeight: "bold",
                          fontSize: "24px",
                          marginBottom: "4px",
                          marginLeft: "2%",
                        }}
                      >
                        {item.heading}
                        <span
                          style={{
                            color: "#5D5DFF",
                            flexWrap: "wrap",
                            margin: "1%",
                          }}
                        >
                          {item.heading1}
                        </span>
                      </Typography>

                      <Typography
                        variant="body1"
                        style={{
                          color: "#9BA9B4",
                          marginLeft: "2%",
                          fontSize: "19px",
                          textAlign: "justify",
                        }}
                      >
                        {item.para}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={4}
                      container
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="contained"
                        style={{
                          alignItems: "center",
                          fontSize: "15px",
                          marginTop: "2%",
                          textAlign: "center",
                          flexWrap: "wrap",
                          backgroundColor: "#5D5DFF",
                          color: "#D9E3EA",
                          padding: "2%",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          width: "80%",
                        }}
                      >
                        {item.button}
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
            {/* ************************end********************************** */}

            {/* ************************section3********************************** */}

            <Grid container>
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
                          fontSize: "19px",
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
                      height: "530px",
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
                      <FaStar style={{ color: "#5D5DFF", fontSize: "200%" }} />
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
              {content.item2.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    style={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "560px",
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
                      <FaStar style={{ color: "#5D5DFF", fontSize: "200%" }} />
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

            {/* ***********************end************************** */}

            {/* ************************section4********************************** */}

            <Grid container>
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
                      height: "550px",
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
                      <FaStar style={{ color: "#5D5DFF", fontSize: "200%" }} />
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
                      height: "530px",
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
                      <FaStar style={{ color: "#5D5DFF", fontSize: "200%" }} />
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

            {/* ***********************end************************** */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[100%] mt-[4%] ">
              <h2 className=" font text-center service-button uppercase">
                OUR PROCESS
              </h2>
              <h2 className="text-3xl font-bold text-center mb-8 hover:text-[#5D5DFF]">
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
              </div>
            </div>

            {/* *******************************GLANCE******************************    */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[100%] mt-[4%] ">
              <h2 className=" font text-center uppercase service-button text-[#D9E3EA]">
                ZenQua AT GLANCE
              </h2>
              <h2 className="text-3xl font-bold text-center mb-8 text-[#D9E3EA] hover:text-[#5D5DFF]">
                Over 2500+ Completed Projects & Still Counting.
              </h2>
              <div className="max-w[100%]">
                <Grid container spacing={2}>
                  {content.project.map((item: any, index: any) => (
                    <Grid item xs={12} md={6} lg={3}>
                      <div
                        key={index}
                        className="flex flex-col items-center bg-gray-800 p-6 max-w[100%]"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                      >
                        <Box className="flex justify-center items-center text-[#5D5DFF]">
                          <div className="text-4xl font-bold text-purple-600">
                            <CountUp end={item.number} />
                          </div>
                          <AddIcon style={{ fontSize: "40px" }} />
                        </Box>
                        <div className="text-md text-#D9E3EA">
                          {item.title}{" "}
                        </div>
                      </div>
                      <div className="h-[5px] bg-[rgb(93,93,255)] mt-[15px] w-full text-[#5D5DFF]"></div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>

            {/* ***********************  end********************************* */}

            {/* *********************************************************** */}

            <Box className="w-full flex justify-center">
              <div className="w-[100%] mt-[20px]">
                <h2 className="font text-center uppercase text-[#D9E3EA]">
                  ADAPTABLE APPROACH
                </h2>
                <h2 className="text-3xl font-bold text-center mb-6 text-[#D9E3EA]">
                  Our Flexible Engagement Models
                </h2>

                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  style={{ width: "95%", margin: "0 auto" }}
                >
                  {content.adaptable.map((items: any) => {
                    return (
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
                            boxShadow: "0px 0px 5px #D9E3EA",
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "20px",
                          }}
                        >
                          <h2 className="font-bold text-xl text-[#D9E3EA]">
                            {items.title}
                          </h2>
                          <Typography
                            style={{
                              textAlign: "justify",
                              color: "#9BA9B4",
                              marginTop: "5%",
                              fontSize: "19px",
                            }}
                          >
                            {items.decription}
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              padding: "5%",
                              width: "100%",
                            }}
                          >
                            <img
                              style={{
                                height: "90%",
                                width: "70%",
                              }}
                              src={items.images}
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
                                fontSize: "19px",
                              }}
                            >
                              {items.para1}
                            </Typography>
                            <Typography
                              style={{
                                color: "#9BA9B4",
                                width: "50%",
                                padding: "10px",
                                textAlign: "justify",
                                fontSize: "19px",
                              }}
                            >
                              {items.para2}
                            </Typography>
                          </Paper>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </Box>

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
                  className="justify-center w-full p-4"
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
                                  ? "2px solid #5D5DFF"
                                  : "none",
                              paddingLeft: 10,
                              color:
                                this.state.clickedButton6 === service.label
                                  ? "#5D5DFF"
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
                            <div
                              className="text-2xl font-bold text-[#5D5DFF]"
                            >
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
                  direction="left"
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
                              color: "#5D5DFF",
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
                direction="left"
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
                              fontSize: "19px",
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

            <Grid
              container
              className=" pt-24 pb-8 px-24 flex text-center"
              spacing={4}
            >
              <Grid item xs={12}>
                <h2 className=" font text-center uppercase">PORTFOLIO</h2>
                <h2 className="text-3xl font-bold text-center mb-6 txt-[#D9E3EA]  ">
                  Why Outsource Your Project to ZenQua?
                </h2>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} lg={6}>
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_640.jpg"
                    alt="Shoes"
                    className="rounded-xl w-full h-full md:h-[400px]"
                  />
                </figure>
                <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                  <Box className="text-center w-[80%] text-[#9BA9B4]">
                    Enterprise e-Commerce Store – CAMPSAVER
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <figure>
                  <img
                    src="https://media.istockphoto.com/id/1362508194/vector/modern-3d-illustration-of-web-development.jpg?s=612x612&w=0&k=20&c=FzoSgPjIPiPV7wFtCHCFDOehKVgOkDWVdgtZb8N797s="
                    alt="Shoes"
                    className="rounded-xl w-full h-full md:h-[400px]"
                  />
                </figure>
                <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                  <Box className="text-center w-[80%] text-[#9BA9B4]">
                    UAE Government Application – DTMC
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                    alt="Shoes"
                    className="rounded-xl w-full h-full md:h-[400px]"
                  />
                </figure>
                <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                  <Box className="text-center w-[80%] text-[#9BA9B4]">
                    Marshalls World of Sport Website
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <figure>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_640.jpg"
                    alt="Shoes"
                    className="rounded-xl w-full h-full md:h-[400px]"
                  />
                </figure>
                <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                  <Box className="text-center w-[80%] text-[#9BA9B4]">
                    Employees Shift Management Web App – Shift Manager
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      height: "50px",
                      width: "150px",
                      color: "#D9E3EA",
                    }}
                  >
                    Load More
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* **********************  End   ****************************** */}

            {/* ********************************** Contact Us *********************** */}
            <Grid container className="my-24 px-4 sm:px-16">
              <Grid item xs={12} md={6}>
                <Box className="w-full flex flex-col justify-center items-center p-[20px]">
                  <Box className="text-5xl font-bold text-center service-button mt-16 mb-12">
                    Contact Us
                  </Box>
                  <img
                    style={{
                      height: "100%",
                      width: "80%",
                      margin: "15px",
                    }}
                    src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                    alt="Time & Material Model"
                  />
                  <Box>
                    <h2 className="text-md text-center mb-10 mt-20 w-[97%] text-[#9BA9B4]">
                      Let’s kickstart the journey together with a friendly
                      greeting! Whether you have questions to ask or just want
                      to connect, drop us a message and let’s build a strong
                      relationship.
                    </h2>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className=" flex justify-center items-center w-[95%]"
              >
                <Box
                  className="w-[100%] p-12"
                  style={{
                    ...style1,
                    boxSizing: "border-box",
                    margin: "30px",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">First name</Box>
                      <input
                        type="text"
                        placeholder="First name"
                        className="input input-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Last name</Box>
                      <input
                        type="text"
                        placeholder="Last name"
                        className="input input-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]"
                      />
                    </Grid>
                    <Grid item xs={12} className="m-[10px] w-full font-bold">
                      <Box className="mb-[10px]">Email</Box>
                      <Box className="w-full">
                        <input
                          type="text"
                          placeholder="Email"
                          className="input input-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Phone</Box>
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="input input-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Choose a service</Box>
                      <select className="select select-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]">
                        <option disabled selected>
                          Select
                        </option>
                        <option>item 1</option>
                        <option>item 2</option>
                      </select>
                    </Grid>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Engagement type</Box>
                      <select className="select select-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]">
                        <option disabled selected>
                          Select
                        </option>
                        <option>item 1</option>
                        <option>item 2</option>
                      </select>
                    </Grid>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">When to start?</Box>
                      <select className="select select-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]">
                        <option disabled selected>
                          Select
                        </option>
                        <option>item 1</option>
                        <option>item 2</option>
                      </select>
                    </Grid>
                    <Grid item xs={12} md={6} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Budget (USD)</Box>
                      <select className="select select-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 focus:border-[#5D5DFF]">
                        <option disabled selected>
                          Select
                        </option>
                        <option>item 1</option>
                        <option>item 2</option>
                      </select>
                    </Grid>
                    <Grid item xs={12} className="m-[10px] font-bold">
                      <Box className="mb-[10px]">Brief about the Project</Box>
                      <textarea
                        className="textarea input input-bordered w-full bg-gray-900 text-#D9E3EA focus:bg-gray-800 h-36 focus:border-[#5D5DFF]"
                        placeholder="About project"
                      ></textarea>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="w-[400px]">
                        <Button
                          style={{
                            backgroundColor: "#5D5DFF",
                            color: "#D9E3EA",
                            padding: "15px",
                            width: "50%",
                          }}
                        >
                          <Box className="font-bold">Send Your Message</Box>
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

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
    background: "rgb(93 93 255 / var(--tw-bg-opacity))",
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
