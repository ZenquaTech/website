"use client";
import {
  Grid,
  Typography,
  Box,
  styled,
  Card,
  CardActionArea,
  CardContent,
  image,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  style
  } from "@material-ui/core";
// import { Button } from "reactstrap";
import styles from "./infinite.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import React,{useState} from "react";


export default function InfinitySms() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(true);
  }

  const items = [
    {
      title: "Backend Development",
      description:
        "Our team of experts specializes in building custom web systems for small and medium-sized businesses to streamline their routine processes and enable them to focus on growth and other important tasks. Our solutions are designed with scalability in mind, ensuring they can handle future increases in workload and the number of concurrent users. ",
      image: "../images/startup-business.svg",
    },
    {
      title: "Small & Medium Businesses",
      description:
        "Our team of experts specializes in building custom web systems for small and medium-sized businesses to streamline their routine processes and enable them to focus on growth and other important tasks. Our solutions are designed with scalability in mind, ensuring they can handle future increases in workload and the number of concurrent users.",
      image: "../images/small-medium_business.svg",
    },
    {
      title: "Large Businesses",
      description:
        "We provide the perfect solution for large businesses looking to streamline their processes and manage digital success. Our web and app development service offers the perfect combination of the most up-to-date technology stack, secure product functionality, and standard development processes that protect against common threats and vulnerabilities. We ensure our customers, suppliers, partners, and investors receive the best service when it comes to their digital needs.",
      image: "../images/large_business.svg",
    },
  ];

  
  return (
    <MainWrapper>
      {/* // container first */}
      <Grid container>
        <Grid item xs={12}>
          <Box className="box-1">
            <Typography className="typo-1">Infinity SMS Platform</Typography>
            <Typography className="typo-2">
              Elevate Your Messaging Strategy with Infinity SMS Platform
            </Typography>
            <Typography style={{ fontSize: "16px" }}>
              Are you looking for a reliable, scalable, and feature-rich
              messaging solution for your business? Look no further! Introducing
              Infinity SMS Platform
            </Typography>
            <Typography>
              Your Ultimate Carrier-Grade Messaging Solution. With powerful
              features and robust capabilities, Infinity SMS Platform empowers
              your business to communicate seamlessly and efficiently with your
              audience
            </Typography>
            <Typography className="typo-3">Infinity SMS Platform</Typography>
          </Box>
         
          <Box className="box-2">
            <iframe
              width="782"
              height="440"
              //src="https://www.youtube.com/embed/vz1RlUyrc3w?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
              title="React JS roadmap | chai aur react series"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      {/* // container second*/}
      <Grid container style={{ marginTop: "7rem" }}>
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:'center',
              margin:'1rem'
            }}
          >
            <Typography
              style={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}
            >
              Why Choose Infinity SMS Platform?
            </Typography>
            <Typography
              style={{ color: "rgba(255,255,255,.75)", marginTop: "2rem" }}
            >
              Are you looking for a reliable, scalable, and feature-rich
              messaging solution for your business? Look no further! Introducing
              Infinity SMS Platform
            </Typography>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Your data is safe with us! Our platform operates on a secure
              cloud-based system, offering scalability to accommodate your
              growing messaging needs. Optimize message delivery and
              cost-effectiveness with our dynamic Least Cost Routing, auto rate,
              and advanced algorithms.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* // container third */}
      <Grid container style={{ marginTop: "3rem" }}>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Box className="box-container2">
              <Typography className="typo-container">
                Carrier-Grade Messaging
              </Typography>
              <Typography className="typo-container">System</Typography>
            </Box>
            <Typography style={{ display: "flex", textAlign: "justify" }}>
              Infinity SMS Platform offers a carrier-grade messaging system,
              ensuring the highest standards of reliability and performance.
              This means your business can rely on a robust and dependable
              messaging solution, guaranteeing seamless communication with your
              audience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Box className="box-container2">
              <Typography className="typo-container">
                Secure & Scalable Cloud
              </Typography>
              <Typography className="typo-container">Infrastructure</Typography>
            </Box>
            <Typography style={{ display: "flex", textAlign: "justify" }}>
              Infinity SMS Platform offers a carrier-grade messaging system,
              ensuring the highest standards of reliability and performance.
              This means your business can rely on a robust and dependable
              messaging solution, guaranteeing seamless communication with your
              audience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Box className="box-container2">
              <Typography className="typo-container">
                Dynamic LCR, Auto Rate &
              </Typography>
              <Typography className="typo-container">
                Advance Algorithm
              </Typography>
            </Box>
            <Typography style={{ display: "flex", textAlign: "justify" }}>
              Optimize your message delivery and cost-effectiveness with
              Infinity SMS Platform’s dynamic Least Cost Routing (LCR), auto
              rate, and advanced algorithms. This means you can ensure efficient
              and cost-effective message delivery without manual intervention.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* // fourth container */}

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Typography
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#fff",
                padding: "1rem",
              }}
            >
              Highly Available System
            </Typography>
            <Typography
              style={{
                display: "flex",
                textAlign: "justify",
                padding: "0.7rem",
              }}
            >
              Infinity SMS Platform guarantees uninterrupted messaging
              performance, even during peak traffic times. This high
              availability ensures that your critical messages reach their
              recipients promptly, regardless of the message load.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Typography
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#fff",
                padding: "1rem",
              }}
            >
              Traffic Analytics & Dashboard
            </Typography>
            <Typography style={{ display: "flex", textAlign: "justify" }}>
              Gain valuable insights into your messaging traffic with Infinity
              SMS Platform’s comprehensive traffic analytics and intuitive
              dashboard. This feature empowers you to make informed decisions
              and fine-tune your messaging strategies for better results.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="box-container1">
            <Typography
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#fff",
                padding: "1rem",
              }}
            >
              Revenue Protection Features
            </Typography>
            <Typography style={{ display: "flex", textAlign: "justify" }}>
              Maximize your profitability with Infinity SMS Platform’s revenue
              protection features. Benefit from dynamic access controls,
              multi-currency support, and accurate billing by traffic, ensuring
              that your messaging business remains financially sound and
              profitable.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box style={{ margin: "2rem" }}>
            <Typography>
              Unlock Your Business Potential with Infinity SMS Platform{" "}
            </Typography>
            <Typography
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#fff",
                padding: "0px",
                lineHeight: "1.2",
              }}
            >
              Your Carrier-Grade
            </Typography>
            <Typography
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#fff",
                padding: "0px",
                lineHeight: "1.2",
              }}
            >
              Messaging Solution with
            </Typography>
            <Typography
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#fff",
                padding: "0px",
                lineHeight: "1.2",
              }}
            >
              Dynamic Routing and
            </Typography>
            <Typography
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#fff",
                padding: "0px",
                lineHeight: "1.2",
              }}
            >
              Revenue Protection.
            </Typography>
          </Box>
          <Button
            style={{
              backgroundColor: "rgb(25, 191, 177)",
              borderRadius: "5px",
              margin: "2rem",
              fontSize:'12px',
              padding:'1rem',
              color:'#fff'
            }}
          >
            Call for Demo
          </Button>
        </Grid>

        {/* //verticle scroll */}

        <Grid
          item
          xs={12}
          sm={6}
          style={{ maxHeight: "500px", overflow: "auto" }}
          id={styles.scrl}
        >
          <Box style={{ margin: "2rem" }}>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                margin: "1rem",
              }}
            >
              Seamless Integration
            </Typography>
            <ul style={{ lineHeight: "1.8", padding: "0px" }}>
              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                MNP/HLR/Test System Integration: Seamlessly integrate Mobile
                Number Portability (MNP), Home Location Register (HLR), and Test
                System features within Infinity SMS Platform.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Store/Forward Capability: Ensure reliable message delivery with
                our store/forward capability.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                2-Way Messaging Support: Engage your audience with interactive
                communication through our 2-way messaging support.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Message Throttling Control: Take charge of your messaging
                traffic with precise message throttling control.
              </li>
            </ul>
          </Box>
          <Box style={{ margin: "2rem" }}>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                margin: "1rem",
              }}
            >
              Managing Codes & Errors{" "}
            </Typography>
            <ul style={{ lineHeight: "1.8", padding: "0px" }}>
              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                MCC MNC Code Management: Effectively manage Mobile Country Code
                (MCC) and Mobile Network Code (MNC) codes within Infinity SMS
                Platform.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Error Code Management: Streamline your messaging operations by
                effectively managing error codes.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Billing by Traffic Repush: Accurately bill your traffic with our
                traffic repush feature.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Submit/Delivery Error Codes: Stay informed about message status
                with submit and delivery error codes.
              </li>
            </ul>
          </Box>
          <Box style={{ margin: "2rem" }}>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                margin: "1rem",
              }}
            >
              Protocols & Security{" "}
            </Typography>
            <ul style={{ lineHeight: "1.8", padding: "0px" }}>
              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Protocols Supported: Infinity SMS Platform supports HTTP/HTTPS,
                SMPP 3.3/3.4/3.5, SMPP over SSL, and VPN protocols for seamless
                connectivity.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Security Features: Benefit from built-in DDOS protection,
                dynamic firewall, role-based rights control, IP-based access
                control, and 2-factor authentication.
              </li>
            </ul>
          </Box>
          <Box style={{ margin: "2rem" }}>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                margin: "1rem",
              }}
            >
              Rate Templates & Management{" "}
            </Typography>
            <ul style={{ lineHeight: "1.8", padding: "0px" }}>
              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Rate Templates: Create and manage rate templates with ease,
                featuring rate notifications, rate history, and Excel/CSV
                support.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Traffic Simulator & Revenue Protection in LCR: Test customer
                traffic step-by-step and safeguard your revenue with dynamic
                Least Cost Routing (LCR).
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Billing Controls & Prepaid/Postpaid Management: Efficiently
                manage accounting controls, billing periods, credit limits, and
                prepaid/postpaid billing within Infinity SMS Platform.
              </li>
            </ul>
          </Box>
          <Box style={{ margin: "2rem" }}>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                margin: "1rem",
              }}
            >
              Real-Time Billing & Analytics{" "}
            </Typography>
            <ul style={{ lineHeight: "1.8", padding: "0px" }}>
              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Real-Time Billing: Experience real-time billing with accurate
                tracking of messaging transactions.
              </li>

              <li>
                <span style={{ display: "inline-block", width: "1em" }}>•</span>
                Traffic Dashboard & Analytics: Utilize Infinity SMS Platform’s
                traffic dashboard for in-depth analytics, troubleshooting, and
                performance monitoring.
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              BUSINESS EMPOWERMENT{" "}
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                color: "#fff",
                display:'flex',
                justifyContent: "center",
                alignItems:'center',
                marginBottom:'2rem'
              }}
            >
              Tailored development solutions for all business types
            </Typography>
          </Box>
        </Grid>
      </Grid>

     
     <Carousel >
  {items.map((item, i) => (
    <Grid
      key={i}
      container
      style={{
        background: "transparent",
        color: "#fff",
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
                color: "#fff",
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
                color: "rgba(255,255,255,.75)",    
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

<Grid container>
  <Grid item xs={12} >
    <Box style={{marginTop:'3rem', display:"flex", flexDirection:'column', alignItems:'center' }}>
     <Typography>TESTIMONIALS</Typography>
    <Typography style={{color:'#fff',fontSize:'40px', fontWeight:'bold'}} >What Our Clients Say</Typography>
    </Box>
  </Grid>
</Grid>

<Grid container >


  {/* Form Section */}


  <Grid item xs={12} md={6} className="box-shadow: 0 0px 10px 0 rgb(139 139 139 / 0.5)">
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
                src="https://d1ocmjvagn5mw1.cloudfront.net/wp-content/uploads/2023/04/18151312/Time-Material.svg"
                alt="Time & Material Model"
              />
              <Box>
                <h2 className="text-md text-center service-button mb-10 mt-20 w-[97%]">
                  Let’s kickstart the journey together with a friendly greeting!
                  Whether you have questions to ask or just want to connect,
                  drop us a message and let’s build a strong relationship.
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
                  <select className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]">
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
                  <select className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]">
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
                  <select className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]">
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
                  <select className="select select-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 focus:border-[#2090a4]">
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
                  <textarea className="textarea input input-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] 
                  text-white focus:bg-gray-800 h-36 focus:border-[#2090a4]" placeholder="About project"></textarea>
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

    </MainWrapper>
  );
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    fontSize: "40px",
    fontWeight: "bold",
    color: "rgb(25, 191, 177)",
    margin: "3rem",
  },
  "& .box-1": {
    margin: "7rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  "& .typo-2": {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "1rem",
    color: "#fff",
  },
  "& .typo-3": {
    fontSize: "60px",
    fontWeight: "bold",
    color: "rgb(25, 191, 177)",
    margin: "3rem",
  },
  "& .box-2": {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0.5rem",
  },
  "& .box-container1": {
    boxShadow: " 0 0 20px 0 rgba(139,139,139,.5)",
    padding: "1rem",
    margin: "1rem",
  },
  "& .typo-container": {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#fff",
  },
  "& .box-container2": {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "1rem",
  },
});
