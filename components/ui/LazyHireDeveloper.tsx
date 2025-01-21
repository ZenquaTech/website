import React from 'react'
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import LazyLoad from "react-lazyload";
import Link from "next/link";
const people: any[] = [
  {
    name: "Mehul Manu",
    experience: "10+ Years",
    expertise: "AWS | Azure | Linux",
    workedWith: "CICD | Terraform",
    avatarSrc:
      "/../images/webpFile/personAvatar.webp",
  },
  {
    name: "Dev Girisha",
    experience: "5+ Years",
    expertise: "Core | MVC | PowerBI",
    workedWith: " SQL | APIs",
    avatarSrc:
      "/../images/webpFile/personAvatar.webp",
  },
  {
    name: "Sumat Bala",
    experience: "7+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "/../images/webpFile/personAvatar.webp",
  },
  {
    name: "Prabhakara Indra",
    experience: "10+ Years",
    expertise: "Net | Sharepoint | Blazor",
    workedWith: " APIs | MVC",
    avatarSrc:
      "/../images/webpFile/personAvatar.webp",
  },
];


function LazyHireDeveloper() {
    
  return (
    <center>
      <div
        // style={{
        //   justifyContent: "space-around",
        //   marginTop: "30px",
        // }}
        // className="max-w-6xl mx-auto px-4 sm:px-6 justify-around mt-[30px] bg-yellow-800"
        className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
        justify-center
      >
        <div style={{ marginTop: "20px" }}>
          <h2 className="font text-center uppercase  text-[#D9E3EA]">
            HIRE TEAM
          </h2>
          <h2 className="text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] ">
            Hire The Best Developers
          </h2>
          <h2 className="font text-center text-[#9BA9B4] mb-[80px] text-lg text-justify m-[2%]">
            ZenQua offers expert developers for fixed-time/cost and dedicated
            projects in web design and software development. Our web developers
            specialise in trending technologies like PHP, Laravel, Magento, and
            ReactJS for custom, responsive web solutions. Our mobile app
            developers have advanced skills in the latest technologies and tools
            like Android Studio, Xcode, Kotlin, Xamrin, PhoneGap, React Native,
            etc., delivering cutting-edge mobile apps for Android, iOS, and
            cross-platform.
          </h2>
          <Grid container spacing={5} justifyContent="space-around">
            {people.map((person: any, index: any) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <LazyLoad height={100} offset={100}>
                  <Avatar
                    alt={person.name}
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                    }}
                    src={person.avatarSrc}
                  />
                </LazyLoad>

                <Box
                  style={{
                    height: "300px",
                    // width: "55vw",
                    backgroundColor: "#33363A",
                    marginTop: "-50px",
                    borderRadius: "20px",
                  }}
                >
                  <br />
                  <br />
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
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
                      marginTop: "10px",
                      color: "#9BA9B4",
                    }}
                  >
                    Expertise: {person.expertise}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "14px",
                      marginTop: "10px",
                      color: "#9BA9B4",
                    }}
                  >
                    Worked with: {person.workedWith}
                  </Typography>
                  <br />
                  <Link href="/contact-us">
                    <Button
                      variant="contained"
                      style={{
                        alignItems: "center",
                        fontSize: "15px",
                        marginTop: "2%",
                        textAlign: "center",
                        flexWrap: "wrap",
                        backgroundColor: "#019dce",
                        color: "#D9E3EA",
                        padding: "2%",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        width: "160px",
                        textTransform: "none",
                      }}
                    >
                      Hire Me
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </center>
  );
}

export default LazyHireDeveloper
