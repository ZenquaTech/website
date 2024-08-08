"use client";
import React, { Component } from "react";
import jsonData from "./data.json"; // Define interfaces for props
import {
  Typography,
  Grid,
  Box,
  styled,
  Avatar,
  Paper,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "reactstrap";
import { FaStar } from "react-icons/fa6";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { FaTools } from "react-icons/fa";
import Carousel from "react-material-ui-carousel";
import ContactUs from "@/components/ui/contactus";

interface ContentProps {
  body: string;
}
interface RoutePageProps {
  params: {
    slug: string;

  };
}

interface RoutePageState {
  showDetails: boolean;
  selectedSection: string | null;
}


class Content extends Component<ContentProps> {
  render() {
    const { body } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: body }} />;
  }
} // Convert RoutePage functional component to class component
class RoutePage extends Component<RoutePageProps, RoutePageState> {
  constructor(props: RoutePageProps) {
    super(props);
    const initialSection = "Regular Reports";
    const hasInitialSection = jsonData[props.params.slug]?.sectionDetails?.hasOwnProperty(initialSection);

    this.state = {
      showDetails: hasInitialSection,
      selectedSection: hasInitialSection ? initialSection : null,
    };

    // Binding the onClick method to ensure it has the correct context
    this.onClick = this.onClick.bind(this);
  }

  onClick(key: string) {
    this.setState({
      showDetails: true,
      selectedSection: key,
    });
  }

  render() {
    console.log("hello world");
    const { params } = this.props;
    const { showDetails, selectedSection } = this.state;
    // Ensure we have valid content for the route
    const content = jsonData[params.slug] || {
      title: "Page not found",

      body: "Content not available for this route.",
    };
    return (
      <>
        <MainWrapper>
          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
            {content?.data1?.map((item: any, index: any) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={index}>
                <div className="bg-transparent p-8 flex flex-col text-left">
                  <h2 className="text-lg mt-12 font-bold text-[#D9E3EA]">{item.title}</h2>
                  <h1 className="text-2xl md:text-3xl font-bold my-4 text-[#D9E3EA]">
                    {item.description1}
                  </h1>
                  <p className="text-medium my-2 text-justify text-[#9BA9B4]">
                    {item.description2}
                  </p>
                  <p className="text-medium my-2 text-justify text-[#9BA9B4]">
                    {item.description3}
                  </p>
                  <button className="bg-[#2090a4] text-[#D9E3EA] text-md mt-4 px-6 rounded-lg py-2 w-40 font-medium" onClick={() => scrollToBottom()}>
                    {item.buttonLabel}
                  </button>
                </div>
                <div className="mt-20 flex justify-center">
                  <img src={item.imageSrc} alt="" className="object-contain" />
                </div>
              </div>
            ))}
          </Grid>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
            {content?.data2?.map((item: any, index: any) => (
              <Grid item xs={12} key={index}>
                <Box className="box1">
                  <Typography style={{ color: "rgba(255,255,255,.75)" }}>
                    {item.description1}
                  </Typography>
                  <Typography className="typo-2"> {item.description2} </Typography>
                  <Typography className="typo-4"> {item.description3} </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20">
            {content?.text?.map((item: any, index: any) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box className="box2">
                  <Typography className="typo-5">
                    <FaStar style={{ color: "#2090a4", fontSize: "150%" }} />
                    <Typography className="typo-6"> {item.title} </Typography>
                  </Typography>
                  <Typography className="typo-7"> {item.description} </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6  mb-8">
            {content?.text?.map((item: any, index: any) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box className="box2">
                  <Typography className="typo-5">
                    <FaStar style={{ color: "#2090a4", fontSize: "150%" }} />
                    <Typography className="typo-6"> {item.title} </Typography>
                  </Typography>
                  <Typography className="typo-7"> {item.description} </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
            {content?.data3?.map((item: any, index: any) => (
              <Grid item xs={12} key={index}>
                <Typography className="typo-8">{item.description1}</Typography>
                <Typography className="typo-9">{item.description2}</Typography>
                <Typography className="typo-10">{item.description3}</Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={1} className="mx-auto px-4 sm:px-6 mb-8">
            {content?.content?.map((content: any, index: any) => (
              <Grid item xs={12} sm={3} key={index}>
                <Box className="box3">
                  <img src={content.image} alt={content.title} style={{ color: "rgb(25, 191, 177)" }} />
                  <Typography className="typo-11"> {content.title} </Typography>
                  <Typography className="typo-12">{content.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
            {content?.data4?.map((item: any, index: any) => (
              <Grid item xs={12}>
                <Typography className="typo-10">{item.description1}</Typography>
                <Typography className="typo-9">{item.description2}</Typography>
                <Typography className="typo-10">{item.description3}</Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container className="max-w-[90%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8 border rounded-[20px]">
            <Grid container spacing={0} className="justify-center w-full p-4">
              <Grid item xs={6} sm={3}>
                <div
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {content?.sectionDetails &&
                    Object.entries(content.sectionDetails).map(
                      ([key, value], i) => (
                        <Button
                          className="hover:text-#D9E3EA w-full bg-transparent hover:bg-transparent hover:border-transparent text-left"

                          style={{
                            width: "90%",
                            height: "36px",
                            borderRight:
                              this.state.selectedSection === key
                                ? "2px solid #2090a4"
                                : "none",
                            paddingLeft: 10,
                            color:
                              this.state.selectedSection === key
                                ? "#2090a4"
                                : "#D9E3EA",
                            fontSize: "15px",
                            backgroundColor:
                              this.state.selectedSection === key
                                ? "#222224"
                                : "transparent",
                          }}
                          onClick={() => this.onClick(key)}
                          disableRipple
                          key={key}
                        >

                          {key}

                        </Button>
                      )
                    )}
                </div>
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
                  {showDetails && selectedSection && (
                    <>
                      <div className="text-2xl font-bold text-[#2090a4]">
                        {content.sectionDetails[selectedSection].title}
                      </div>
                      <div className="text-lg text-[#9BA9B4]">
                        {content.sectionDetails[selectedSection].description}
                      </div>
                    </>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: '1rem'
            }}
          >

            <Carousel
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {content?.sectionDetails && Object?.entries(content.sectionDetails).map(([key, value], i) => (
                <Card
                  key={i}
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "solid 1px white",
                    borderRadius: "20px",
                    background: "transparent",
                    color: "#fff",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ textAlign: "center", marginTop: "2%", color: "rgb(25, 191, 177)" }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ textAlign: "center", marginTop: "5%" }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>


          </Box>

          <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
            {content?.data5?.map((item: any, index: any) => (
              <Grid item xs={12}>
                <Typography className="typo-10">{item.description1}</Typography>
                <Typography className="typo-9">{item.description2}</Typography>
                <Typography className="typo-10">{item.description3}</Typography>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid container className="max-w-[90%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">
              {/* Hiring Options */}
              <Grid item xs={12}>
                <Grid container spacing={3} style={{ marginBottom: "5px" }}>
                  {content?.hiringOptions?.map((option: any, index: any) => (
                    <Grid item xs={3} key={index}>
                      <Box className="box4">
                        <PersonSearchIcon fontsize={30} color="green" />
                        <Typography className="typo-14">{option.title}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Hiring Details */}
              <Grid item xs={3}>
                <Grid container spacing={3}>
                  {content?.hiringDetails?.map((detail: any, index: any) => (
                    <Grid item xs={12} key={index} style={{ marginRight: "15px" }}>
                      <Box className="box5">
                        <Typography className="typo-15">{detail.title}</Typography>
                      </Box>
                    </Grid>
                  ))}

                </Grid>
              </Grid>

              {/* Hours Details */}
              <Grid item xs={9}>
                <Grid container spacing={3}>
                  {content?.hoursDetails?.map((hour: any, index: any) => (
                    <Grid item xs={hour.titleNew ? 12 : 4} key={index}>
                      <Box className="box6">
                        <Typography className="typo-15">
                          {hour.title || hour.titleNew}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Carousel
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {content?.hiringNew?.map((category: any, i: any) => (
                <Card
                  key={i}
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "solid 1px white",
                    borderRadius: "20px",
                    background: "transparent",
                    color: "white",
                    // margin: "25px",
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
                        {category.title}
                      </Typography>
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {category.details.map((detail: any, j: any) => (
                          <li key={j}>
                            <Typography
                              variant="body1"
                              component="p"
                              style={{ textAlign: "center", marginTop: "5%" }}
                            >
                              {detail.title || detail.titleNew}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Box>

          <Grid container className="max-w-[90%] mx-auto px-4 sm:px-6 md:mt-12 sm:mt-20 mb-8">

            {content.data6.map((item: any, index: any) => (
              <Grid item xs={12}>
                <Typography className="typo-10">{item.description1}</Typography>
                <Typography className="typo-9">{item.description2}</Typography>
                <Typography className="typo-10">{item.description3}</Typography>
              </Grid>
            ))}
          </Grid>

          {/* cards */}
          <center>
            <Box
              style={{
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <div style={mainDiv}>
                <Grid container spacing={2} justifyContent="space-around">
                  {content.people.map((person: any, index: any) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <Avatar
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "100px",
                        }}
                        src={person.avatarSrc}
                      />
                      <Box
                        className="bg-gray-700"
                        sx={{

                          height: { xs: "300px" },
                          width: {
                            xs: "55vw",
                            sm: "34vw",
                            md: "24vw",
                            lg: "19vw",
                          },
                          marginTop: "-50px",
                          borderRadius: '20px'
                        }}
                      >
                        <br />
                        <br />
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: '600',
                            marginTop: "20px",
                            color: "#D9E3EA",
                          }}
                        >
                          {person.name}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            marginTop: "20px",
                            color: "#9BA9B4",
                          }}
                        >
                          Experience: {person.experience}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            marginTop: "20px",
                            color: "#9BA9B4",
                          }}
                        >
                          Expertise: {person.expertise}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            marginTop: "20px",
                            color: "#9BA9B4",
                          }}
                        >
                          Worked with: {person.workedWith}
                        </Typography>
                        <br />
                        <button className="bg-[#2090a4] text-white text-md px-8 py-2 rounded-md w-34 font-medium text-[#D9E3EA]">
                          Hire Me
                        </button>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Box>
          </center>

          <Grid
            container
            className=" pt-24 pb-8 px-24 flex text-center"
            spacing={2}
          >
            <Grid item xs={12}>
              <h2
                className=" font text-center uppercase">
                OUR WORK
              </h2>
              <h2 className="text-3xl font-bold text-center mb-6 txt-[#D9E3EA]  ">
                Case Study
              </h2>
            </Grid>

            <Grid item xs={12} lg={6}>
              <figure>
                <img
                  src="../images/sport.png"
                  alt="sport"
                  className="rounded-xl w-full h-full md:h-[400px] object-cover"
                />
              </figure>
              <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                <Box className="text-center w-[80%]">Sport Planner</Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <figure>
                <img
                  src="../images/pet.png"
                  alt="pet"
                  className="rounded-xl w-full h-full md:h-[400px] object-cover"
                />
              </figure>
              <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                <Box className="text-center w-[80%]">Pet Hotels</Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <figure>
                <img
                  src="../images/flex.png"
                  alt="Shoes"
                  className="rounded-xl w-full h-full md:h-[400px] object-cover"
                />
              </figure>
              <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
                <Box className="text-center w-[80%]">Felix Printers</Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <figure>
                <img
                  src="../images/case.png"
                  alt="Shoes"
                  className="rounded-xl w-full h-full md:h-[400px] object-cover"
                />
              </figure>
              <Box className="text-xl w-full mt-4 flex justify-center flex-wrap ">
                <Box>React Custom Fantasy Sports App Development</Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="w-full flex justify-center">
                <Button
                  variant="contained"
                  style={{
                    fontSize: "17px",
                    textAlign: "left",
                    borderRadius: '10px',
                    textTransform: "none",
                    marginTop: "16px",
                    backgroundColor: "#2090a4",
                    color: "#FFF",
                  }}
                >
                  Load More
                </Button>
              </Box>
            </Grid>
          </Grid>

          <ContactUs />
        </MainWrapper>
      </>
    );
  }
}
export default RoutePage;
const MainWrapper = styled(Box)({
  "& .typo-1": {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "1rem",
  },
  "& .typo-2": {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "35px",
  },
  "& .typo-3": {
    marginTop: "2rem",
    color: "rgba(255,255,255,.75)",
    fontSize: "16px",
  },
  "& .btn1": {
    background: "rgb(25, 191, 177)",
    borderRadius: "5px",
    marginTop: "1.5rem",
  },
  "& .box1": {
    display: "flex",
    alignItems: "center",
    borderRadius: '20px',
    flexDirection: "column",
    textAlign: 'center'
  },
  " & .typo-4": {
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
    margin: "1rem",
  },

  "& .box2": {

    boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
    margin: "1rem",
    padding: "2rem",
    height: "500px",
    borderRadius: '20px',
    flexWrap: "wrap",
  },
  " & .typo-5": {
    display: "flex",
    marginTop: "1rem",
    fontSize: "21px",
    color: "#D9E3EA",
    fontWeight: "bold",
  },
  " & .typo-6": {
    display: "flex",
    justifyContent: "center",
    marginLeft: "1rem",
    fontSize: "20px",
    color: "#fff",
  },
  " & .typo-7": {
    textAlign: "justify",
    marginTop: "1rem",
    color: "rgba(255,255,255,.75)",
  },
  " & .typo-8": {
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
  },
  " & .typo-9": {
    textAlign: "center",
    margin: "1rem",
    fontSize: "25px",
    fontWeight: "bold",
    color: "#fff",
  },
  " & .typo-10": {
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
  },
  "& .box3": {
    boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
    padding: "1rem",
    height: "550px",
    borderRadius: '20px'

  },
  " & .typo-11": {
    display: "flex",
    textAlign: "center",
    marginTop: "1rem",
    flexDirection: "column",
    fontSize: "20px",
    color: "#fff",
  },
  " & .typo-12": {
    textAlign: "justify",
    marginTop: "1rem",
    fontSize: "15px",
    color: "rgba(255,255,255,.75)",
  },

  " & .typo-13": {
    fontSize: "25px",
    color: "rgb(25, 191, 177)",
  },
  " & .typo-14": {
    fontSize: "20px",
    marginTop: '2px',
    fontWeight: "bold",
  },
  " & .typo-15": {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
  },
  "& .box4": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,.75)",
    boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
    height: "100px",
    padding: "1rem",
    borderRadius: "10px",
  },
  "& .box5": {
    boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
    border: "1px solid  rgba(255,255,255,.75)",
    padding: "1rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "40px",
    justifyContent: "center",
  },
  "& .box6": {
    boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
    padding: "1rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "40px",
    justifyContent: "center",
  },
});

const style1 = {
  height: "max(70%,100%)",
  flexWrap: "wrap",
  backgroundColor: "transparent",
  boxShadow: "0px 0px 5px white",
};
const mainDiv = {
  width: "94%",
  marginTop: "20px",
};
const Boxes = {
  width: "100%",
  height: "5px",
  background: "#2090a4",
  marginTop: "10px",
};

