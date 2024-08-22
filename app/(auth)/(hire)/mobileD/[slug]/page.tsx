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
import { FaTools } from "react-icons/fa";
import Carousel from "react-material-ui-carousel";

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
    this.state = {
      showDetails: false,
      selectedSection: null,
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
    const content = jsonData[params.slug as keyof typeof jsonData] || {
      title: "Page not found",
      body: "Content not available for this route.",
    };
    return (
      <>
        <MainWrapper>
      <Grid container style={{ marginTop: "7rem" }}>
        {content.data1.map((item:any, index:any) => (
          <Grid container key={index}>
            <Grid item xs={12} sm={6}>
              <Box style={{ padding: "2rem" }}>
                <Typography className="typo-1">{item.title}</Typography>
                <Typography className="typo-2">{item.description1}</Typography>
                <Typography className="typo-2">{item.description2}</Typography>
                <Typography className="typo-3">{item.description3}</Typography>
                <Button className={item.className}>{item.buttonLabel}</Button>
              </Box>
            </Grid>
            {/* Grid for image */}
            <Grid item xs={12} sm={6}>
              <Box style={{ padding: "2rem" }}>
                <Box style={{ marginTop: "1rem" }}>
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    width={500}
                    height={300}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid container>
        {content.data2.map((item:any, index:any) => (
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

      <Grid container>
        {content.text.map((item:any, index:any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="box2">
              <Typography className="typo-5">
                <FaStar />
              </Typography>
              <Typography className="typo-6"> {item.title} </Typography>
              <Typography className="typo-7"> {item.description} </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container>
        {content.items.map((item:any, index:any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="box2">
              <Typography className="typo-5">
                <FaStar />
              </Typography>
              <Typography className="typo-6">{item.title}</Typography>
              <Typography className="typo-7">{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container style={{ marginTop: "2rem" }}>
        {content.data3.map((item:any, index:any) => (
          <Grid item xs={12} key={index}>
            <Typography className="typo-8">{item.description1}</Typography>
            <Typography className="typo-9">{item.description2}</Typography>
            <Typography className="typo-10">{item.description3}</Typography>
          </Grid>
        ))}
      </Grid>

     <Box sx={{width:'90%'}}>
      <Grid container spacing={3} style={{ margin: "1rem" }}>
        {content.content.map((content:any, index:any) => (
          <Grid item xs={12} sm={3} key={index}>
            <Box className="box3">
              <img src={content.image} alt={content.title} style={{color: "#2090a4"}}/>
              <Typography className="typo-11"> {content.title} </Typography>
              <Typography className="typo-12">{content.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Box>

      <Grid container style={{ marginTop: "2rem" }}>
        {content.data4.map((item:any, index:any) => (
          <Grid item xs={12}>
            <Typography className="typo-10">{item.description1}</Typography>
            <Typography className="typo-9">{item.description2}</Typography>
            <Typography className="typo-10">{item.description3}</Typography>
          </Grid>
        ))}
      </Grid>

 <Box sx={{
          display: { xs: "none", sm: "block" },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "95%",
        }}>

      <Grid
        container
        style={{
          margin: "2rem",
          border: "1px solid #fff",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={3}>
          <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
          }}
        >
   
   {Object.entries(content.sectionDetails).map(([key, value], i) => (
              <Grid item xs={12} key={i}>
                <Button
                  onClick={() => this.onClick(key)}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor:'rgba(150,144,162,.08)',
                    lineHeight: "1rem",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                >
                  {key}
                </Button>
              </Grid>
            ))}
         
        </Box>
        </Grid>

       
        <Grid item xs={9}>
          <Box>
            {showDetails && selectedSection && (
              <>
                <Typography
                  style={{
                    color: "rgb(93, 93, 255)",
                    marginBottom: "20px",
                    fontSize: "20px",
                  }}
                >
                   {
                          (
                            content.sectionDetails as {
                              [key: string]: { title: string };
                            }
                          )[selectedSection].title
                        }
                  {/* {content.sectionDetails[selectedSection].title} */}
                </Typography>
                <Typography style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                {
                          (
                            content.sectionDetails as {
                              [key: string]: { description: string };
                            }
                          )[selectedSection].description
                        }
                {/* {content.sectionDetails[selectedSection].description} */}
                </Typography>
              </>
            )}
          </Box>
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
          marginTop:'1rem'
        }}
      >

<Carousel
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {Object.entries(content.sectionDetails).map(([key, value], i) => (
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
                        style={{ textAlign: "center", marginTop: "2%", color: "#2090a4" }}
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

      <Grid container style={{ marginTop: "2rem" }}>
        {content.data5.map((item:any, index:any) => (
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
        <Grid container style={{ marginTop: "2rem" }}>
          {/* Hiring Options */}
          <Grid item xs={12}>
            <Grid container spacing={3} style={{ marginBottom: "5px" }}>
              {content.hiringOptions.map((option:any, index:any) => (
                <Grid item xs={3} key={index}>
                  <Box className="box4">
                    <FaTools className="typo-13" />
                    <Typography className="typo-14">{option.title}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Hiring Details */}
          <Grid item xs={3}>
            <Grid container spacing={3}>
              {content.hiringDetails.map((detail:any, index:any) => (
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
              {content.hoursDetails.map((hour:any, index:any) => (
                <Grid item xs={hour.titleNew ? 12 : 4} key={index}>
                  <Box className="box5">
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
        {content.hiringNew.map((category:any, i:any) => (
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
                  {category.details.map((detail:any, j:any) => (
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

      <Grid container style={{ marginTop: "2rem" }}>
        {content.data6.map((item:any, index:any) => (
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
            <Grid container spacing={5} justifyContent="space-around">
              {content.people.map((person:any, index:any) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Avatar
                    style={{
                      borderRadius: "40px",
                      width: "150px",
                      height: "150px",
                    }}
                    src={person.avatarSrc}
                  />
                  <Box
                    sx={{
                      borderColor: "rgba(255,255,255,.75)",
                      height: { xs: "346px" },
                      width: { xs: "55vw", sm: "37vw", md: "27vw", lg: "19vw" },
                      marginTop: "-50px",
                    }}
                  >
                    <br />
                    <br />
                    <Typography
                      style={{
                        fontSize: "15px",
                        marginTop: "20px",
                        color: "#555",
                      }}
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginTop: "50px",
                        color: "#555",
                      }}
                    >
                      Experience: {person.experience}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                        color: "#555",
                      }}
                    >
                      Expertise: {person.expertise}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                        color: "#555",
                      }}
                    >
                      Worked with: {person.workedWith}
                    </Typography>
                    <br />
                    <Button
                      style={{
                        background: "#2090a4",
                        color: "#fff",
                        padding: "15px",
                        width: "50%",
                      }}
                    >
                      Hire Me
                    </Button>
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
        spacing={4}
      >
        <Grid item xs={12}>
          <h2
            className=" font text-center  service-button"
            style={{ textTransform: "uppercase" }}
          >
            OUR WORK
          </h2>
          <h2 className="text-3xl font-bold text-center mb-6 service-button">
            Case Study
          </h2>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} lg={6}>
          <figure>
            <img
              src="../images/sport.png"
              alt="sport"
              className="rounded-xl w-full h-full md:h-[400px]"
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
              className="rounded-xl w-full h-full md:h-[400px]"
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
              className="rounded-xl w-full h-full md:h-[400px]"
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
              className="rounded-xl w-full h-full md:h-[400px]"
            />
          </figure>
          <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
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

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className="box-shadow: 0 0px 10px 0 rgb(139 139 139 / 0.5)"
        >
          <Box className="w-full flex flex-col justify-center items-center p-[20px] ">
            <Box className="text-5xl font-bold text-center service-button mt-16 mb-12">
              Contact Us
            </Box>
            <img
              style={{
                height: "100%",
                width: "80%",
                margin: "15px",
              }}
              src="../images/contact.svg"
              alt="contact"
            />
            <Box>
              <h2 className="text-md text-center service-button mb-10 mt-20 w-[97%]">
                Let’s kickstart the journey together with a friendly greeting!
                Whether you have questions to ask or just want to connect, drop
                us a message and let’s build a strong relationship.
              </h2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className=" flex justify-center items-center">
          <Box
            className="w-[100%] p-12"
            style={{
              // ...style1,
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
                  className="input input-bordered w-full bg-gray-900 
                    bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                />
              </Grid>
              <Grid item xs={12} md={6} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Last name</Box>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full bg-gray-900 
                    bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                />
              </Grid>
              <Grid item xs={12} className="m-[10px] w-full font-bold">
                <Box className="mb-[10px]">Email</Box>
                <Box className="w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full bg-gray-900 
                      bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Phone</Box>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered w-full bg-gray-900 
                    bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                />
              </Grid>
              <Grid item xs={12} md={6} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Choose a service</Box>
                <select
                  className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Mobile App Development</option>
                    <option>Web Development</option>
                    <option>Customized Development</option>
                    <option>Cloud Computing and DevOps</option>
                    <option>UI/UX Designing</option>
                    <option>AI/ML/IOT</option>
                    <option>Quality Control Service</option>
                    <option>Others</option>
                </select>
              </Grid>
              <Grid item xs={12} md={6} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Engagement type</Box>
                <select
                  className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Hire Dedicated developer</option>
                    <option>New Project</option>
                    <option>Ongoing Project</option>
                    <option>Maintenance & Support</option>
                </select>
              </Grid>
              <Grid item xs={12} md={6} className="m-[10px] font-bold">
                <Box className="mb-[10px]">When to start?</Box>
                <select
                  className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Immediately</option>
                    <option>with in Week</option>
                    <option>with in Month</option>
                    <option>Not Sure</option>
                </select>
              </Grid>
              <Grid item xs={12} md={6} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Budget (USD)</Box>
                <select
                  className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]"
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>0-$10k+</option>
                    <option>$10k-$25k+</option>
                    <option>$25k-$50k+</option>
                    <option>$50k-$100k</option>
                </select>
              </Grid>
              <Grid item xs={12} className="m-[10px] font-bold">
                <Box className="mb-[10px]">Brief about the Project</Box>
                <textarea
                  className="textarea input input-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] 
                  text-white focus:bg-gray-800 h-36 focus:border-[#2090a4]"
                  placeholder="About project"
                ></textarea>
              </Grid>
              <Grid item xs={12}>
                <Box className="w-[400px]">
                  <Button
                    style={{
                      backgroundColor: "#2090a4",
                      color: "white",
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
    fontSize: "18px",
  },
  "& .btn1": {
    background: "#2090a4",
    borderRadius: "5px",
    marginTop: "1.5rem",
  },
  "& .box1": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign:'center'
  },
  " & .typo-4": {
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
    margin: "1rem",
  },

  "& .box2": {
    boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
    margin: "1rem",
    padding: "2rem",
    height: "450px",
  },
  " & .typo-5": {
    display: "flex",
    justifyContent: "center",
    color: "#2090a4",
    fontSize: "25px",
  },
  " & .typo-6": {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
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
    height: "650px",
    
  },
  " & .typo-11": {
    display: "flex",
    textAlign: "center",
    marginTop: "1rem",
    flexDirection: "column",
    fontSize: "25px",
    color: "#fff",
  },
  " & .typo-12": {
    textAlign: "justify",
    marginTop: "1rem",
    color: "rgba(255,255,255,.75)",
  },

  " & .typo-13": {
    fontSize: "25px",
    color: "#2090a4",
  },
  " & .typo-14": {
    fontSize: "25px",
    fontWeight: "bold",
  },
  " & .typo-15": {
    fontSize: "18px",
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
    height: "50px",
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
