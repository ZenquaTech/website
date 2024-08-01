"use client";
import { Box, Grid, Typography, styled, Button } from "@material-ui/core";
import StorageSharpIcon from "@mui/icons-material/StorageSharp";
import ModeStandbyTwoToneIcon from "@mui/icons-material/ModeStandbyTwoTone";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaElementor } from "react-icons/fa6";

export default function Engagement() {
  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={12}>
          <Box className="box-2">
            <Typography className="typo-1"> Engagement Models </Typography>
            <Typography className="typo-2">
              Curiosity and exploration are the two most essential traits we
              possess and they distinguish us from our competitors. And no we
              have not sent that rover to Mars. Not yet! Innovation and
              ingenuity are the other two that makes us unique in technology
              service market.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="box-1">
            <FaDatabase  style={{fontSize:'40px',color:"rgb(25, 191, 177)",borderColor: "#f13c31"}} />
            <Typography className="typo-3">CURIOSITY </Typography>
            <Typography className="typo-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box className="box-1">
            <FaWpexplorer  style={{fontSize:'40px',color:"rgb(25, 191, 177)",borderColor: "#f13c31"}}/>
            <Typography className="typo-3">Exploration </Typography>
            <Typography className="typo-4">
              We love to move into uncharted waters to explore the best creative
              ideas and insight of what we have on offer both in terms of talent
              and capabilities.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box className="box-1">
            <FaSpinner style={{fontSize:'40px',color:"rgb(25, 191, 177)",borderColor: "#f13c31"}}/>
            
            <Typography className="typo-3">Innovation </Typography>
            <Typography className="typo-4">
              We are an idea factory. We imagine, innovate and implement great
              ideas into technology solutions.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box className="box-1">
            <IoMdSettings  style={{fontSize:'40px',color:"rgb(25, 191, 177)",borderColor: "#f13c31"}} />
            <Typography className="typo-3">Ingenuity </Typography>
            <Typography className="typo-4">
              We trust our workers’ ingenuity. We tell them what we want and
              they keep on surprising us with new and disruptive ways the
              technology works.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2rem",
            }}
          >
            <Typography style={{ fontSize: "45px", color: "#fff" }}>
              Our Flexible, Reliable And Scalable Models{" "}
            </Typography>
            <Typography
              style={{ textAlign: "center", color: "rgba(255,255,255,.75)" }}
            >
              We tailor our engagement model depending upon your business
              requirements. We ensure that you enjoy the benefits of our
              expertise, lower exposure to risks and cost-effective project
              management.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="../images/Fixed_price.svg"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem" }}>
            <Typography className="typo-5">FIXED PRICE</Typography>
          </Box>
          <Box>
            <Typography className="typo-6">
              Fixed price model is convenient when scope and specification of
              the project are reasonably well defined. It’s a low-risk model in
              which we define expected deliverables and fix time-lines of each
              milestone ultimately fixing a deadline of the project. It is
              applicable to Agile projects too as the scope of a project is
              determined in advance along with the costs regardless of the
              project size.
            </Typography>
          </Box>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "18px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Fixed deadline of project
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Cost and overheads are quoted
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Pre-defined solution in detail
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Specified Scope and Specification
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem" }}>
            <Typography className="typo-5">TIME AND MATERIAL </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",

                margin: "2rem",
              }}
            >
              This model offers great flexibility in terms of control over
              project cost, deadline and specification plan. Dedicated resources
              like developers, testers, team leaders, designers etc. are
              available on a long-term contract for a fixed monthly fee for
              their services and you can also pick and choose resources from our
              pool by conducting interviews. You can monitor progress of the
              project via remote monitoring and make numerous iterations within
              the project scope.
            </Typography>
          </Box>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "18px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Greater project flexibility
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Variable budget and cost
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Pay per hour model
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Design and specification iterations
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="../images/time_n_material.svg"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="../images/dedicated_team.svg"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem" }}>
            <Typography className="typo-5">DEDICATED TEAM</Typography>
          </Box>
          <Box>
            <Typography className="typo-6">
              This model offers great flexibility in terms of control over
              project cost, deadline and specification plan. Dedicated resources
              like developers, testers, team leaders, designers etc. are
              available on a long-term contract for a fixed monthly fee for
              their services and you can also pick and choose resources from our
              pool by conducting interviews. You can monitor progress of the
              project via remote monitoring and make numerous iterations within
              the project scope.
            </Typography>
          </Box>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "18px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Handpick Dedicated resources
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Control Cost and Milestones
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Convenient for large projects
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Flexibility to make numerous
                iterations
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem" }}>
            <Typography className="typo-5">Team Formations</Typography>
          </Box>
          <Box>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",

                margin: "2rem",
              }}
            >
              Whether you hire a single developer or create your own team of
              developers, our team structure remains the same. We work with the
              same vigor and maintain same quality standards for all our work
              and processes. We are fully committed to complete your work and
              maintain security to give you best IT support and services. And
              that’s our guarantee.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="../images/team_formation.svg"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>

        <Box
            style={{
              display: "flex",
              flexDirection:'column',
              justifyContent: "center",
              fontSize:"18px",
              // backgroundColor: "#eb5d3d",
              backgroundColor: "rgb(25, 191, 177)",
              textAlign:'center',
              width:"100vw",
              marginBottom:'2rem',
              
              "@media (max-width:767px)":
                  {
                      marginBottom:"none"
                  }
             
            }}
          >
       
        <Grid container>
            <Grid item sm={8} md={8}>
            <Box>
              <Typography
                style={{
                  margin: "3rem",
                  fontSize: "25px",
                  color: "#fff",
                }}
              >
                Partnerships Are Great.Let's Get Work Together
              </Typography>
            </Box>
            </Grid>

            <Grid item xs={12} sm={4} >
            <Box sx={{ display:"flex", justifyContent:'center', alignItems:"center", height:'100%',
                  width:"100%", }}>
              <Button
                style={{
                  backgroundColor: "#fff",
                  fontSize: "15px",
                  // color: "#eb5d3d",
                  color:"rgb(25, 191, 177)",
                  height:'40%',
                  width:"60%",
                  borderRadius:'5px'
                }}
              >
                Partner With Us
              </Button>
            </Box>
            </Grid>
            </Grid>
            </Box>

      </Grid>
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
    // marginTop:'3rem'
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
    margin: "2rem",
    alignItems: "center",
  },

  "& .typo-4": {
    fontSize: "16px",
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
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
  },
});
