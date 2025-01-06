import { Box, CardActionArea, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import largeBusiness from "@/components/assets/img/reactjsimg/large_business.webp";
import startupBusiness from "@/components/assets/img/reactjsimg/startup-business.webp";
import smallMediumBusiness from "@/components/assets/img/reactjsimg/small-medium_business.webp";

const business = [
      {
        title: "Backend Development",
        description: "Our team of experts specializes in building custom web systems for small and medium-sized businesses to streamline their routine processes and enable them to focus on growth and other important tasks. Our solutions are designed with scalability in mind, ensuring they can handle future increases in workload and the number of concurrent users.",
        image: startupBusiness
      },
      {
        title: "Small & Medium Businesses",
        description: "Our team of experts specializes in building custom web systems for small and medium-sized businesses to streamline their routine processes and enable them to focus on growth and other important tasks. Our solutions are designed with scalability in mind, ensuring they can handle future increases in workload and the number of concurrent users.",
        image: smallMediumBusiness
      },
      {
        title: "Large Businesses",
        description: "We provide the perfect solution for large businesses looking to streamline their processes and manage digital success. Our web and app development service offers the perfect combination of the most up-to-date technology stack, secure product functionality, and standard development processes that protect against common threats and vulnerabilities. We ensure our customers, suppliers, partners, and investors receive the best service when it comes to their digital needs.",
        image: largeBusiness
      }
    ]
function BusinessEmpowerment() {
  return (
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
        {business?.map((item: any, i: any) => (
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
                  <Image
                    loading="lazy"
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
  );
}

export default BusinessEmpowerment
