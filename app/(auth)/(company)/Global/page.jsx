"use client";
import React ,{useState} from 'react';
import { Button, Box, Typography, Grid, styled } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { FaLeaf } from "react-icons/fa";
import RemoveIcon from "@material-ui/icons/Remove";
import { IoMdStopwatch } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs6CircleFill } from "react-icons/bs";
import { Bs7CircleFill } from "react-icons/bs";
const models = [
  {
    title: "OFFSHORE MODEL",
    description:
      "All project development requirements are covered, starting from conception to deployment and maintenance. It also supports outsourcing models where you can rely on us to complete your project on time and in the budget that we agreed. We keep you updated with each activity and stage of the project with our constant communication and project managers.",
    borderStyle: "borderRight",
  },
  {
    title: "ONSITE MODEL",
    description:
      "In this model, you post us with your project requirements, we assess them and carry out the project execution on your business location or site. Our expert developers, quality analysts, testers and deployment experts ensure that your project is completed efficiently and cost-effectively. Moreover, you can interview and shortlist developers and change engagement model to suit your business model.",
    borderStyle: "borderLeft",
  },
  {
    title: "CUSTOMIZED MODEL",
    description:
      "We customize the project development depending upon your business model. This model is both dynamic and flexible to accommodate rapidly changing project requirements. Our resources will work according to your priority and project leads along with your work standards and methodologies.",
    borderStyle: "borderLeft",
  },
  {
    title: "OFFSHORE DEVELOPMENT TEAM",
    description:
      "This model allows you to have a virtual extension to your in-house team for project development and requirements. You interview and select your resources and agree upon a payment model of your choosing, your team sits on our premises, directly under your control and reporting. We provide logistical and technical support when necessary along with facilitation of payments and other norms. The biggest benefit of this model is that the entire team reports directly to you, giving you unhindered access. They adapt to your business practices and methodologies of software development and project management.",
    borderStyle: "borderRight",
  },
  {
    title: "ONSITE/OFFSITE COMBINATION",
    description:
      "Our team located on customer site directly interacts with the offshore team back with us to ensure smooth addressing of critical items and tasks. They integrate and fix pain points and issues that need immediate attention, while our dedicated offshore team develops systems and processes. This model maximizes utilization of time and resources by providing the client with greater access to team and cost reduction of project development through our facilities. This model is recommended for SME and large projects which are prone to change and need immediate attention from our team.",
    borderStyle: "borderLeft",
  },
];

const ModelBox = ({ title, description, borderStyle }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    className={borderStyle === "borderRight" ? "borderRight" : "borderLeft"}
  >
    <Box
      style={{
        boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
        margin: "3rem",
        padding: "2rem",
      }}
    >
      <Typography style={{ fontWeight: "bold", fontSize: "25px", color: "#fff" }}>
        {title}
      </Typography>
      <Typography
        style={{
          color: "rgba(255,255,255,.75)",
          fontSize: "16px",
          marginTop: "1rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Grid>
);

const steps = [
  { icon: Bs1CircleFill, title: "DEFINE", subtitle: "SET A CLEAR VISION" },
  { icon: Bs2CircleFill, title: "DEPLOY", subtitle: "DEPLOYMENT AND SUPPORT" },
  { icon: Bs3CircleFill, title: "DIGEST", subtitle: "UNDERSTAND REQUIREMENT" },
  { icon: Bs4CircleFill, title: "DELIVER", subtitle: "MONITOR & IMPLEMENT PRODUCT" },
  { icon: Bs5CircleFill, title: "DISCOVER", subtitle: "EXPLORE POTENTIAL & PROVIDE SOLUTIONS" },
  { icon: Bs6CircleFill, title: "DESIGN", subtitle: "DESIGN EXPERIENCE" },
  { icon: Bs7CircleFill, title: "DRIVE", subtitle: "MAINTAIN & EVOLVE" },
];

const StepBox = ({ Icon, title, subtitle }) => (
  <Grid item xs={12} lg={1} style={{ width: "9vw", margin: "30px" }}>
    <Box style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", margin: "50px", padding: "40px" }}>
      <Icon style={{ fontSize: "50px", color: "rgb(25, 191, 177)" }} />
      <Typography style={{ marginTop: "1rem" }}>{title}</Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  </Grid>
);

const accordionData = [
  {
    title: "Technology Solutions",
    details: [
      "End-To-End Technology Solutions And Services",
      "Our solutions offer full spectrum of IT enabled services from a simple web development to mobile application development and technology solutions from enterprise mobility to big data and from cloud computing to Internet of Things (IoT)."
    ],
  },
  {
    title: "Experience",
    details: [
      "Experience",
      "We tap into our homegrown talent pool of Designers, Architects, Analysts, Coders and Digital experts to deliver you the best positive experience. We not only think about client’s experience but also their end user’s experience too. And that’s what sets the ball rolling."
    ],
  },
  {
    title: "Strong Expertise",
    details: [
      "Strong Expertise",
      "With over 500 satisfied clients and more than 750 completed projects; we offer strong expertise in the field of Information Technology and Services. Whether it’s a simple web or an application development or complex software solution and maintenance we provide all the solutions."
    ],
  },
  {
    title: "Range of Businesses",
    details: [
      "Work With Range Of Businesses",
      "From technology heavyweights to startups our skilled workforces of 175 technology experts cater to all types of businesses at any given stage. Size, number of employees or type of business does not deter us from framing an ideal tech solution for any issue. We adapt and tailor our contemporary approach to help you handle even the toughest enterprise challenges."
    ],
  },
  {
    title: "Turn Around Time",
    details: [
      "End-To-End Technology Solutions And Services",
      "Our solutions offer full spectrum of IT enabled services from a simple web development to mobile application development and technology solutions from enterprise mobility to big data and from cloud computing to Internet of Things (IoT)."
    ],
  },
  {
    title: "Engagement Models",
    details: [
      "Experience",
      "We tap into our homegrown talent pool of Designers, Architects, Analysts, Coders and Digital experts to deliver you the best positive experience. We not only think about client’s experience but also their end user’s experience too. And that’s what sets the ball rolling."
    ],
  },
  {
    title: "Quality And Security",
    details: [
      "Strong Expertise",
      "With over 500 satisfied clients and more than 750 completed projects; we offer strong expertise in the field of Information Technology and Services. Whether it’s a simple web or an application development or complex software solution and maintenance we provide all the solutions."
    ],
  },
  {
    title: "Technical Support",
    details: [
      "Work With Range Of Businesses",
      "From technology heavyweights to startups our skilled workforces of 175 technology experts cater to all types of businesses at any given stage. Size, number of employees or type of business does not deter us from framing an ideal tech solution for any issue. We adapt and tailor our contemporary approach to help you handle even the toughest enterprise challenges."
    ],
  },
];

const AccordionItem = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion className="acordian" expanded={expanded} onChange={handleToggle}>
      <AccordionSummary style={{ width: "100%" }}>
        <Box className="acordian_sum">
          <Typography className="acordian_typo1">{title}</Typography>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{marginBottom:'15px'}}>
        {details.map((detail, index) => (
          <Typography key={index} className={`acordian_typo${index + 2}`}>
            {detail}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default function Global() {
  return (
    <MainWrapper>
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12}>
          <Box className="box-2">
            <Typography className="typo-1">Our Business Models</Typography>
            <Typography className="typo-2">
            We have no limits when it comes to geography or innovation in our
            projects.  
            </Typography>
            <Typography className="typo-3">
              Our clients are poles apart in their business types, models and
              sizes, but they all share a common need to have the perfect IT
              solution for their respective businesses and that’s where we come
              in. We can work with any technology and offer simple and scalable
              IT solutions that are flexible and easily implementable on your
              current IT infrastructure or a new IT architecture. We offer
              flexibility of choosing appropriate pricing models to choose for
              your technology product development. Moreover, we offer flexible
              resources to work on your projects along with custom business
              models to choose from:
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {models.map((model, index) => (
        <Grid
          container
          className="max-w-[95%] mx-auto px-4 sm:px-6"
          key={index}
        >
          {index % 2 === 0 && <ModelBox {...model} />}
          <Grid item xs={12} sm={6} md={6}></Grid>
          {index % 2 !== 0 && <ModelBox {...model} />}
        </Grid>
      ))}

        <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              margin: "1rem",
              fontFamily: "sans-serif",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Working Smarter to Design and Develop Exceptional Products in Wider
            Windows of Time
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              margin: "1rem",
              textAlign: "center",
              color: "rgba(255,255,255,.75)",
            }}
          >
            Our methodologies have revolutionized the Development Lifecycle
            process by being highly robust, structured, interchangeable, and
            adaptive, allowing them to handle any issue at any stage of the
            project lifecycle. Moreover, they are also scalable, enabling
            scalability to ensure effective project management.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        {steps.map((step, index) => (
          <StepBox key={index} Icon={step.icon} title={step.title} subtitle={step.subtitle} />
        ))}
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              margin: "1rem",
              fontFamily: "sans-serif",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Why Choose Us
          </Typography>
        </Grid>

        <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
      {accordionData.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <AccordionItem title={item.title} details={item.details} />
        </Grid>
      ))}
    </Grid>
      </Grid>
     
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              margin: "1rem",
              fontFamily: "sans-serif",
              color: "#fff",
              textAlign: "center",
            }}
          >
            We Are In The Business Of Digital Innovation And Transformation 
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              margin: "1rem",
              textAlign: "center",
              color: "rgba(255,255,255,.75)",
            }}
          >
            Creativity and innovation occur when you view the world differently and that’s what we do, daily. Our data-driven solutions cover a wide variety of disciplines to grow business and produce results.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            style={{
              boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
              margin: "3rem",
              padding: "2rem",
              display:"flex",
              textAlign:'center',
              flexDirection:"column",
              alignItems:"center",
              borderRadius:'20px'
            }}
          >
            <FaLeaf style={{fontSize:'50px',color:"rgb(25, 191, 177)"}} />
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff",marginTop: "1rem" }}
            >
              Learn 
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                marginTop: "1rem",
              }}
            >
              We help identify and refine the requirements for projects and ensure what we are building will deliver the much needed business impact. 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            style={{
              boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
              margin: "3rem",
              padding: "2rem",
              display:"flex",
              textAlign:'center',
              flexDirection:"column",
              alignItems:"center",
               borderRadius:'20px'
            }}
          >
            <IoMdStopwatch style={{fontSize:'50px',color:"rgb(25, 191, 177)"}} />
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff",marginTop: "1rem", }}
            >
              Measure 
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                marginTop: "1rem",
              }}
            >
              Using quantitative and qualitative data, we measure the effectiveness of application, iterating through the process again until the full business value is realized. 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            style={{
              boxShadow: " 0 0 10px 0 rgba(139,139,139,.5)",
              margin: "3rem",
              padding: "2rem",
              display:"flex",
              textAlign:'center',
              flexDirection:"column",
              alignItems:"center",
               borderRadius:'20px'
            }}
          >
            <BsBuildingsFill style={{fontSize:'50px',color:"rgb(25, 191, 177)"}} />
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff" ,marginTop: "1rem"}}
            >
              Build 
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                marginTop: "1rem",
              }}
            >
              Using methodologies like MVP, Agile and Scrum, our team builds your solution in short bursts, responding to change as required. . 
            </Typography>
          </Box>
        </Grid>
        </Grid>

        <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              margin: "1rem",
              fontFamily: "sans-serif",
              color: "#fff",
              textAlign: "center",
            }}
          >
            FLEXIBLE ENGAGEMENT MODELS 
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              margin: "1rem",
              textAlign: "center",
              color: "rgba(255,255,255,.75)",
            }}
          >
            We understand the changing business scenarios and requirements. Therefore, we have customizable and convenient engagement models you can choose from. If you want to pay a Fixed price for your development cost, you want to pay by hours for development work or want a dedicated development team for a project or switching between these options. We can customize them according to your needs without delay and hassle. Isn’t it conveniently fantastic!
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            style={{ 
              backgroundImage: "linear-gradient(90deg,rgba(59, 57, 57, 0.719),#2090a4 100%)",
              margin: "3rem",
              padding: "2rem",
              borderRadius:'20px'
            }}
          >
            
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff" }}
            >
              Fixed Price 
            </Typography>
            <Typography >
              <Box
            style={{
               margin: "1rem",
               fontSize: "14px",
              color: "rgba(255,255,255,.75)",
              
            }}
          >
            <ul style={{ listStyleType: "disc" }}>
              <li style={{marginBottom:"1rem"}}>
              Fixed deadline of project
              </li>
              <li style={{marginBottom:"1rem"}}>
              Quoted costs & overheads
              </li>
              <li style={{marginBottom:"1rem"}}>
              Pre-defined solution in detail
              </li >
              <li>
              Specified Scope
              </li>
            </ul>
          </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box
            style={{ 
              backgroundImage: "linear-gradient(90deg,rgba(59, 57, 57, 0.719),#2090a4 100%)",
              margin: "3rem",
              padding: "2rem",
              borderRadius:'20px'
            }}
          >
            
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff" }}
            >
              Time And Material  
            </Typography>
            <Typography >
              <Box
            style={{
               margin: "1rem",
              fontSize: "14px",
              color: "rgba(255,255,255,.75)",
              
            }}
          >
            <ul style={{ listStyleType: "disc" }}>
              <li style={{marginBottom:"1rem"}}>
              Greater project flexibility
              </li>
              <li style={{marginBottom:"1rem"}}>
              Variable budget and cost
              </li>
              <li style={{marginBottom:"1rem"}}>
              Pay per hour model
              </li >
              <li>
              Flexibility for changes
              </li>
            </ul>
          </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box
            style={{ 
              backgroundImage: "linear-gradient(90deg,rgba(59, 57, 57, 0.719),#2090a4 100%)",
              margin: "3rem",
              padding: "2rem",
              borderRadius:'20px'
            }}
          >
            
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px", color: "#fff" }}
            >
              Dedicated Team 
            </Typography>
            <Typography >
              <Box
            style={{
               margin: "1rem",
              fontSize: "14px",
              color: "rgba(255,255,255,.75)",
              
            }}
          >
            <ul style={{ listStyleType: "disc" }}>
              <li style={{marginBottom:"1rem"}}>
              Handpick Dedicated resources
              </li>
              <li style={{marginBottom:"1rem"}}>
              Control Cost and Milestones
              </li>
              <li style={{marginBottom:"1rem"}}>
              Convenient for large projects
              </li >
              <li>
              Flexibility for iterations
              </li>
            </ul>
          </Box>
            </Typography>
          </Box>
        </Grid>
        </Grid>


    </MainWrapper>
  );
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    color: "#fff",
    marginTop: "6rem",
    justifyContent: "space-around",
    fontWeight: "bold",
    fontSize: "15px",
     marginTop: "6rem",
  },

  "& .typo-2": {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "3rem",
    fontFamily: "sans-serif",
    color: "#fff",
    textAlign: "center",
  },

  "& .typo-3": {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "16px",
    margin: "3rem",
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
  },
  "& .box-1": {
    "@media (max-width:600px)": {
      display: "none",
    },
  },

  "& .box2": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    // width: '50vw',
    margin: "50px",
    padding: "40px",
  },

  "& .acordian_typo1": {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
  },

  "& .acordian_typo2": {
    color: "#fff",
    fontSize: "16px", 
    fontWeight: "bold" 
  },

  "& .acordian_typo3": {
    color: "rgba(255,255,255,.75)",
    fontSize: "12px",

  },
  
  "& .acordian":{
    
      backgroundColor: "rgba(150,144,162,.08)",
      borderRadius: "none",
      marginBottom: "1rem",
      marginRight:"2rem",
      paddingLeft:'5px'
    

  },

  "& .acordian_sum":{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginLeft:"1rem",
      marginRight:"1rem",
      color:'#fff'
  
    
  }

});
