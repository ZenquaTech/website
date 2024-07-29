"use client";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react"
import { FaArrowRight } from "react-icons/fa";

interface Person {
  name: string;
  experience: string;
  expertise: string;
  workedWith: string;
  avatarSrc: string;
}

const people: Person[] = [
  {
    name: "Mehul P",
    experience: "10+ Years",
    expertise: "AWS | Azure | Linux",
    workedWith: "CICD | Terraform",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Umesh G",
    experience: "5+ Years",
    expertise: "Core | MVC | PowerBI",
    workedWith: " SQL | APIs",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Ram N",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
  {
    name: "Gaurang S",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCdf-64YOMcOjmE9KLzTYG3dk_-iaYY4qvEQLnaLuf-FF2bsOOg8yIQ_JelIlq1kPmhg&usqp=CAU",
  },
];

export default class page extends Component {
  render() {
    const style1 = {
      flexWrap: "wrap" as "nowrap" | "wrap" | "wrap-reverse",
      backgroundColor: "transparent",
      boxShadow: "0px 0px 5px white",
    };

    const mainDiv = {
      width: "100%",
      marginTop: "20px",
    };

    return (
      <div className="pt-[70px] pb-[70px] m-[15px]" data-aos="fade-up">
        <Grid
          container
          spacing={2}
          className="flex flex-col justify-center items-center"
        >
          <Grid item xs={12}>
          <h2 className="text-3xl font-bold text-center mb-6 service-button text-[#D9E3EA]">
  Backend Development Services
</h2>
          </Grid>
          <Grid item xs={10}>
            <h2 className="text-center service-button mb-24 text-[19px] text-justify text-[#9BA9B4]">
              As a reputable company specializing in backend development, we
              offer comprehensive backend development services that enable the
              conversion of your conceptualizations into dynamic digital
              solutions of substantial prowess. Our proficient team meticulously
              engineers resilient Application Programming Interfaces (APIs),
              seamlessly merges databases, fine-tunes server-side logic, and
              guarantees impeccable coordination between frontend and backend
              constituents, culminating in the provision of unparalleled user
              experiences.
            </h2>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold text-[#D9E3EA]">
              PHP Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  We offer exceptional PHP development services that empower
                  businesses to fortify their online presence through
                  cutting-edge web solutions. Our proficient squad of PHP
                  developers crafts robust and adaptable websites tailored to
                  meet your specific requirements. Whether you seek bespoke PHP
                  applications, e-commerce remedies, or efficient content
                  management systems, our expertise in PHP frameworks such as
                  Laravel and CodeIgniter guarantees optimal performance.
                  Unleash the full potential of PHP with our top-notch
                  development services.
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px] ">
                    <FaArrowRight className="mr-[7px]" />
                    PHP Web Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    PHP Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    PHP E-commerce Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    PHP CMS Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    PHP Framework Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Third-Party API Integration
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold">
              JAVA Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  Unleash the boundless capabilities of Java through our
                  comprehensive array of Java development services. Our
                  proficient team of Java developers is wholeheartedly committed
                  to delivering exceptional solutions customized to meet your
                  unique business requirements. With our profound expertise in
                  Java development, we empower enterprises to harness the
                  versatility and potency of Java for their software solutions,
                  fostering heightened performance, scalability, and
                  groundbreaking innovation. We provide an extensive range of
                  Java development services:
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Web Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Desktop Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Mobile Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Cloud-based Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Integration Services
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold">
              Nodejs Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  At ZenQua, we specialize in offering exceptional Node.js
                  development services to assist you in crafting the ideal web
                  application. With our team of highly skilled developers, we
                  work closely alongside you to develop a bespoke solution that
                  wholly fulfills the unique requirements of your business. Our
                  wide array of Node.js development services encompasses the
                  creation of personalized, user-friendly websites, the
                  construction of robust real-time applications, and the
                  seamless migration of pre-existing applications to the cloud.
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Web & Mobile Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    IOT & Desktop Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Real-time Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Microservices & API Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Data Streaming and Processing
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Custom Module Development
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold">
              Nestjs Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  At ZenQua, we possess a specialization in providing
                  remarkable NestJS development services tailored to meet your
                  specific requirements. Through close collaboration with our
                  team of proficient developers, we strive to develop customized
                  solutions that perfectly align with the objectives of your
                  business. Our extensive array of NestJS development services
                  encompasses the construction of top-tier web applications, the
                  design of efficient APIs, and the seamless integration of
                  database connectivity. Leveraging our expertise in NestJS, we
                  ensure that your applications exhibit scalability, robust
                  security measures, and optimal performance.
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Web Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Mobile App Backend Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Serverless Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Real-time Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    API Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Microservices Development
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold">
              Python Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  We are a specialized team that offers excellent Python
                  development services tailored to your specific needs. Our
                  skilled Python experts provide comprehensive solutions in
                  various areas such as web development, data analysis, machine
                  learning, and automation. Using popular frameworks like Django
                  and Flask, we can create web applications with user-friendly
                  interfaces and strong security measures. With expertise in
                  libraries like Pandas, we can extract valuable insights from
                  data and present them in visually appealing ways. In the field
                  of machine learning, we utilize cutting-edge tools such as
                  scikit-learn, TensorFlow, and Keras to deliver advanced
                  solutions. Additionally, we are proficient in developing
                  automation solutions that optimize your business processes and
                  improve overall efficiency.
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Web Application Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Data Analysis
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Machine Learning
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Automation & Web Scrapping
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Natural Language Processing (NLP)
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Internet of Things (IoT)
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            className="md:flex justify-center items-center hidden"
            style={{
              ...style1,
              width: "95%",
              boxSizing: "border-box",
              margin: "30px",
              padding: "20px",
            }}
          >
            <Box className="w-full text-center text-4xl font-bold">
              Blockchain Development Services
            </Box>
            <Box className="w-full m-6 flex">
              <Box className="w-1/2 flex justify-center items-center">
                <img
                  style={{
                    height: "100%",
                    width: "70%",
                  }}
                  src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                  alt="Time & Material Model"
                />
              </Box>
              <Box className="w-1/2">
                <Box className="text-[19px] text-justify text-[#9BA9B4]">
                  we specialize in delivering exceptional blockchain development
                  services tailored to your specific needs. With a skilled team
                  of developers and blockchain experts, we offer comprehensive
                  solutions that leverage the power of blockchain technology.
                  Whether it's building secure and scalable blockchain networks
                  using platforms like Ethereum, Hyperledger, and Corda,
                  developing smart contracts to automate agreements, or creating
                  decentralized applications (DApps) for various industries, we
                  have the expertise to provide customized blockchain-based
                  solutions. Additionally, we offer consultancy services to
                  guide you in adopting the right blockchain solutions for your
                  business, ensuring informed decision-making.
                </Box>

                <Box className="text-[18px] py-[20px] text-[#9BA9B4]">
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Token and Coin Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Decentralized App Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Hyperledger Development
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Cryptocurrency Exchange Solutions
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Blockchain Consulting Services
                  </Box>
                  <Box className="flex items-center my-[5px]">
                    <FaArrowRight className="mr-[7px]" />
                    Multichain Development
                  </Box>
                </Box>

                <Box className="w-full flex justify-center">
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "17px",
                      textAlign: "left",
                      textTransform: "none",
                      marginTop: "16px",
                      backgroundColor: "#5D5DFF",
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Explore Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          {[
            "PHP Development Services",
            "JAVA Development Services",
            "Nodejs Development Services",
            "Nestjs Development Services",
            "Python Development Services",
            "Blockchain Development Services",
          ].map((industry, index) => (
            <Grid className="md:hidden" item xs={12} key={index}>
              <Paper
                elevation={1}
                style={{
                  backgroundColor: "black",
                  padding: "10px",
                  height: "10vh",
                  width: "80vw",
                  flexWrap: "wrap",
                  color: "white",
                  boxShadow: "0px 0px 8px white",
                  margin: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{ fontSize: "x-large" }}
                >
                  {industry}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Projects */}
        <Grid container className=" pt-24 pb-8 px-24 flex text-center" spacing={4}>
          <Grid item xs={12}>
          <h2
                className="font text-center service-button"
                style={{ textTransform: "uppercase" }}
              >
                PORTFOLIO
              </h2>
          </Grid>
          <Grid item xs={12}>
            <h2 className="text-3xl font-bold text-center mb-6 service-button text-[#D9E3EA]">
            Our Showcased Projects
            </h2>
          </Grid>
          <Grid item xs={12} lg={6}>
          <figure>
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl w-full h-full md:h-[400px]" />
          </figure>   
          <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
            <Box className="text-center w-[80%] text-[#9BA9B4]">
            Enterprise e-Commerce Store – CAMPSAVER
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
          <figure>
            <img src="https://media.istockphoto.com/id/1362508194/vector/modern-3d-illustration-of-web-development.jpg?s=612x612&w=0&k=20&c=FzoSgPjIPiPV7wFtCHCFDOehKVgOkDWVdgtZb8N797s=" alt="Shoes" className="rounded-xl w-full h-full md:h-[400px]" />
          </figure>
          <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
            <Box className="text-center w-[80%] text-[#9BA9B4]">
            UAE Government Application – DTMC
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
          <figure>
            <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt="Shoes" className="rounded-xl w-full h-full md:h-[400px]" />
          </figure>
          <Box className="text-xl w-full mt-4 flex justify-center flex-wrap">
            <Box className="text-center w-[80%] text-[#9BA9B4]">
            Marshalls World of Sport Website
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
          <figure>
            <img src="https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_640.jpg" alt="Shoes" className="rounded-xl w-full h-full md:h-[400px]" />
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
                      color: "#D9E3EA",
                      fontWeight:'bold',
                      height: "50px",
                      width: "150px",
                    }}
                  >
                    Load More
                  </Button>
                </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          style={{ color: "white" }}
          className="flex justify-center pt-[5px] pb-6 px-24"
        >
          <Grid item xs={12}>
            <h2 className="text-3xl font-bold text-center mb-6 service-button text-[#D9E3EA]">
              Hire The Best Developers
            </h2>
          </Grid>
          <Grid item xs={10}>
            <h2 className="text-center service-button mb-8 text-[19px] text-justify text-[#9BA9B4]">
              ZenQua offers expert developers for fixed-time/cost and dedicated
              projects in web design and software development. Our web
              developers specialise in trending technologies like PHP, Laravel,
              Magento, and ReactJS for custom, responsive web solutions. Our
              mobile app developers have advanced skills in the latest
              technologies and tools like Android Studio, Xcode, Kotlin, Xamrin,
              PhoneGap, React Native, etc., delivering cutting-edge mobile apps
              for Android, iOS, and cross-platform.
            </h2>
          </Grid>
          {people.map((person, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="flex flex-col justify-center items-center"
            >
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
                  height: { xs: "346px" },
                  width: {
                    xs: "55vw",
                    sm: "37vw",
                    md: "27vw",
                    lg: "19vw",
                  },
                  marginTop: "-50px",
                }}
                className="bg-slate-600"
              >
                <br />
                <br />
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    // color: "#222",
                    color: "white",
                  }}
                  className="text-center"
                >
                  {person.name}
                </Typography>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginTop: "50px",
                    color: "white",
                  }}
                  className="text-center"
                >
                  Experience: {person.experience}
                </Typography>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    color: "white",
                  }}
                  className="text-center"
                >
                  Expertise: {person.expertise}
                </Typography>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    color: "white",
                  }}
                  className="text-center"
                >
                  Worked with: {person.workedWith}
                </Typography>
                <br />
                <Box className="w-full flex justify-center">
                  <Button
                    style={{
                      backgroundColor: "#5D5DFF",
                      color: "white",
                      padding: "15px",
                      width: "50%",
                    }}
                  >
                    Hire Me
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

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
                <h2 className="text-md text-center service-button mb-10 mt-20 w-[97%] text-[#9BA9B4]">
                  Let’s kickstart the journey together with a friendly greeting!
                  Whether you have questions to ask or just want to connect,
                  drop us a message and let’s build a strong relationship.
                </h2>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className=" flex justify-center items-center w-[95%]">
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
                    className="input input-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]"
                  />
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Last name</Box>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]"
                  />
                </Grid>
                <Grid item xs={12} className="m-[10px] w-full font-bold">
                  <Box className="mb-[10px]">Email</Box>
                  <Box className="w-full">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Phone</Box>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="input input-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]"
                  />
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Choose a service</Box>
                  <select className="select select-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]">
                    <option disabled selected>
                      Select
                    </option>
                    <option>item 1</option>
                    <option>item 2</option>
                  </select>
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Engagement type</Box>
                  <select className="select select-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]">
                    <option disabled selected>
                      Select
                    </option>
                    <option>item 1</option>
                    <option>item 2</option>
                  </select>
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">When to start?</Box>
                  <select className="select select-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]">
                    <option disabled selected>
                      Select
                    </option>
                    <option>item 1</option>
                    <option>item 2</option>
                  </select>
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Budget (USD)</Box>
                  <select className="select select-bordered w-full bg-gray-900 text-white focus:bg-gray-800 focus:border-[#5D5DFF]">
                    <option disabled selected>
                      Select
                    </option>
                    <option>item 1</option>
                    <option>item 2</option>
                  </select>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Brief about the Project</Box>
                  <textarea className="textarea input input-bordered w-full bg-gray-900 text-white focus:bg-gray-800 h-36 focus:border-[#5D5DFF]" placeholder="About project"></textarea>
                </Grid>
                <Grid item xs={12}>
                <Box className="w-[400px]">
                  <Button
                    style={{
                      backgroundColor: "#5D5DFF",
                      color: "white",
                      padding: "15px",
                      width: "50%",
                    }}
                  >
                    <Box className="font-bold">
                    Send Your Message
                    </Box>
                  </Button>
                </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

      </div>
    );
  }
}

