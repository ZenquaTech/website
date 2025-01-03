"use client";
import { Box, Grid, Typography, styled, Button } from "@mui/material";
import ModeStandbyTwoToneIcon from "@mui/icons-material/ModeStandbyTwoTone";
import Image from "next/image";
import { FaDatabase, FaWpexplorer, FaSpinner } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const models = [
  {
    title: "FIXED PRICE",
    description: "Fixed price model is convenient when scope and specification of the project are reasonably well defined. It’s a low-risk model in which we define expected deliverables and fix time-lines of each milestone ultimately fixing a deadline of the project. It is applicable to Agile projects too as the scope of a project is determined in advance along with the costs regardless of the project size.",
    items: [
      "Fixed deadline of project",
      "Cost and overheads are quoted",
      "Pre-defined solution in detail",
      "Specified Scope and Specification"
    ],
    imageSrc: "/../images/webpFile/Fixed_price.webp",
    imageAlt: "Fixed Price"
  },
  {
    title: "TIME AND MATERIAL",
    description: "This model offers great flexibility in terms of control over project cost, deadline and specification plan. Dedicated resources like developers, testers, team leaders, designers etc. are available on a long-term contract for a fixed monthly fee for their services and you can also pick and choose resources from our pool by conducting interviews. You can monitor progress of the project via remote monitoring and make numerous iterations within the project scope.",
    items: [
      "Greater project flexibility",
      "Variable budget and cost",
      "Pay per hour model",
      "Design and specification iterations"
    ],
    imageSrc: "/../images/webpFile/time_n_material.webp",
    imageAlt: "Time and Material"
  },
  {
    title: "DEDICATED TEAM",
    description: "This model offers great flexibility in terms of control over project cost, deadline and specification plan. Dedicated resources like developers, testers, team leaders, designers etc. are available on a long-term contract for a fixed monthly fee for their services and you can also pick and choose resources from our pool by conducting interviews. You can monitor progress of the project via remote monitoring and make numerous iterations within the project scope.",
    items: [
      "Handpick Dedicated resources",
      "Control Cost and Milestones",
      "Convenient for large projects",
      "Flexibility to make numerous iterations"
    ],
    imageSrc: "/../images/webpFile/dedicated_team.webp",
    imageAlt: "Dedicated Team"
  },
  {
    title: "Team Formations",
    description: "Whether you hire a single developer or create your own team of developers, our team structure remains the same. We work with the same vigor and maintain same quality standards for all our work and processes. We are fully committed to complete your work and maintain security to give you best IT support and services. And that’s our guarantee.",
    imageSrc: "/../images/webpFile/team_formation.webp",
    imageAlt: "Team Formations"
  }
];

const icons = [
  { icon: <FaDatabase style={{ fontSize: '40px', color: "#019dce" }} />, title: "CURIOSITY", description: "A small river named Duden flows by their place and supplies it with the necessary regelialia." },
  { icon: <FaWpexplorer className="text-[#019dce] text-4xl" />, title: "EXPLORATION", description: "We love to move into uncharted waters to explore the best creative ideas and insight of what we have on offer both in terms of talent and capabilities." },
  { icon: <FaSpinner className="text-[#019dce] text-4xl" />, title: "INNOVATION", description: "We are an idea factory. We imagine, innovate and implement great ideas into technology solutions." },
  { icon: <IoMdSettings className="text-[#019dce] text-4xl" />, title: "INGENUITY", description: "We trust our workers’ ingenuity. We tell them what we want and they keep on surprising us with new and disruptive ways the technology works." }
];

const ModelDetails = ({ title, description, items, imageSrc, reverse }) => (
  <>
    <Grid item xs={12} sm={6} md={6} style={{ order: reverse ? 1 : 2 }}>
      <Box style={{ marginTop: "4rem" }}>
        <Typography className="typo-5">{title}</Typography>
      </Box>
      <Box>
        <Typography className="typo-6">{description}</Typography>
      </Box>
      {items && (
        <Box style={{ margin: "2rem", fontWeight: 600, fontSize: "16px", color: "rgba(255,255,255,.75)" }}>
          <ul>
            {items.map((item, index) => (
              <li key={index}><ModeStandbyTwoToneIcon /> {item}</li>
            ))}
          </ul>
        </Box>
      )}
    </Grid>
    <Grid item xs={12} sm={6} md={6} style={{ order: reverse ? 2 : 1 }}>
      <Box style={{display: "flex", justifyContent: "center" }}>
        <Image src={imageSrc} alt={title} width={400} height={200} />
      </Box>
    </Grid>
  </>
);



export default function Engagement() {
  return (
    <MainWrapper>
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12}>
          <Box className="box-2">
            <Typography className="typo-1">Engagement Models</Typography>
            <Typography className="typo-2">
              Curiosity and exploration are the two most essential traits we possess and they distinguish us from our competitors. And no we have not sent that rover to Mars. Not yet! Innovation and ingenuity are the other two that makes us unique in technology service market.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        {icons.map((icon, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box className="box-1">
              <div className="inline-flex justify-center items-center border-4 border-[#019dce] rounded-full p-3">
                {icon.icon}
              </div>
              <Typography className="typo-3">{icon.title}</Typography>
              <Typography className="typo-4">{icon.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12}>
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem" }}>
            <Typography className="typo-1">Our Flexible, Reliable And Scalable Models</Typography>
            <Typography style={{ textAlign: "center", color: "rgba(255,255,255,.75)" }}>
              We tailor our engagement model depending upon your business requirements. We ensure that you enjoy the benefits of our expertise, lower exposure to risks and cost-effective project management.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {models.map((model, index) => (
  <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8" key={index}>
    <ModelDetails {...model} reverse={index % 2 === 1} />
  </Grid>
))}


      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", fontSize: "18px", backgroundColor: "#019dce", textAlign: "center", marginBottom: "2rem" }}>
        <Grid container className="max-w-[95%] mx-auto py-6">
          <Grid item sm={8} md={8}>
            <Typography style={{ fontSize: "28px", color: "#fff", fontWeight: '600' }}>Partnerships Are Great. Let's Get Work Together</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
              <Button style={{ backgroundColor: "#fff", fontSize: "15px", color: "#019dce", borderRadius: "5px", textTransform: 'none', padding: '8px 10px', fontWeight: '600' }}>
                Partner With Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainWrapper>
  );
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "50px",
    marginTop: "4rem",
    display: "flex",
  },

  "& .typo-2": {
    textAlign: "center",
    color: "rgba(255,255,255,.75)",
  },

  "& .typo-3": {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
  },

  "& .box-1": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "18px",
    margin: "0px 2rem",
    alignItems: "center",
  },

  "& .typo-4": {
    fontSize: "15px",
    color: "rgba(255,255,255,.75)",
  },

  "& .box-2": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "5rem",

   "@media (max-width:599px)":
    {
      display:"none",
    }
  },
  "& .typo-5": {
    fontWeight: "bold",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },

  "& .typo-6": {
    margin: "2rem",
    color: "rgba(255,255,255,.75)",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
  },
});