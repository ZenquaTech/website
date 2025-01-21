import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";

const servicesData = [
  {
    label: "Cost-Effectiveness",
    stateKey: "Cost",
    content:
      "Building a website or application doesn't have to be expensive.Partnering with a reliable development company can help you save on costs associated with hiring an in-house development team, such as software licensing, taxes, hardware, salaries and compensation. With their expertise, you can create an attractive and cost-effective      solution for your business.",
  },
  {
    label: "Vast Knowledge",
    stateKey: "Vast",
    content:
      "At ZenQua, we have the expertise and experience to create customwebsites andapps that are tailored to your specific business needs. Our dedicated team of developers has the technical knowledge and coding. experience to handle any challenges and provide solutions that comply with industry regulations. With a proven track record of delivering successful projects, you can trust us to create the perfect digital solution for you.",
  },

  {
    label: "Time-Saving",
    stateKey: "Time",
    content:
      "Launch your digital product quickly by outsourcing your development services to a reputable offshore software development agency. ZenQua experienced developers can create a high-quality solution efficiently, enabling you to validate your business idea and adapt your promotional strategies and sales channels as needed. Don't waste time forming an in-house development team- outsource and get. up and runing in no time!",
  },

  {
    label: "Experienced Partner",
    stateKey: "Experienced",
    content:
      "We have a strict quality assurance process in place for all our web      development projects. Our dedicated QA team continously checks for bugs and errors, guaranteeing high-quality code. Our custom solutions are reliable, flexible and cost-effective, offering clients more features and functionalities within their budget and timeline. with us, you can trust that the solutions we provide are reliable and      flecible.",
  },

  {
    label: "Reduced Costs",
    stateKey: "Reduced",
    content:
      "Our team carefully assesses your requirements, understands your goals and applies a standard development process tailored to your project needs to avoid unnecessary costs. To make web application development more accessible for businesses, we offer cost-effective development models.This allows companies with limited budgets to complete their projects without breaking the bank.",
  },
  {
    label: "Custom Solution",
    stateKey: "Custom",
    content:
      "We help you achieve your goals one step at a time by scaling your idea in a budget-focused manner. Our customized web and application development approach, suitable for startups, businesses and enterprises, allows you to make small investments and move forward in a controlled environment with the best java industry expertise. Our standardized process helps you reach your milestones efficiently.",
  },
];
function WhyUs({isFeature=false}:any) {
  const [clickedButton6, setClickedButton6] = useState("Cost-Effectiveness");
  const handleClick6 = (stateKey: any, label: string) => {
    setClickedButton6(label);
  };
  return (
    <div
      // className={
      //   isFeature ? "m-[50px] box-border" : "box-border w-full mt-[4%]"
      // }
      // className="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-800"
      className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mb-8 "
    >
      <h2 className=" font text-center uppercase text-[#D9E3EA]">WHY US</h2>
      <h2
        className={
          isFeature
            ? "text-4xl font-extrabold text-center mb-6 service-button text-[#D9E3EA] "
            : "text-3xl font-bold text-center mb-6 service-button"
        }
      >
        Why Outsource Your Project to ZenQua?
      </h2>
      <div>
        <div className="hidden sm:block flex-wrap justify-center items-center w-full">
          <Grid
            container
            spacing={0}
            className="justify-center border rounded-xl w-full p-4"
          >
            <Grid item xs={6} sm={3}>
              <Paper
                style={{
                  height: "100%",
                  paddingRight: "4px",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              >
                {servicesData.map((service, index) => (
                  <Button
                    className="hover:text-[#9BA9B4] w-full"
                    key={index}
                    onClick={() =>
                      handleClick6(service.stateKey, service.label)
                    }
                    disableRipple
                  >
                    <h3
                      className="font-bold flex items-center w-full h-full"
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0px 8px",
                        borderRight:
                          clickedButton6 === service.label
                            ? "2px solid #019dce"
                            : "none",
                        paddingLeft: 10,
                        color:
                          clickedButton6 === service.label
                            ? "#019dce"
                            : "#9BA9B4",
                        fontSize: "14px",
                        backgroundColor:
                          clickedButton6 === service.label
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
                }}
              >
                {servicesData.map((service) =>
                  clickedButton6 === service.label ? (
                    <div key={service.label}>
                      <div className="col-span-2 sm:col-span-3 text-lg">
                        <div>
                          <p className="text-2xl font-bold text-[#019dce] mb-[2%]">
                            {service.label}
                          </p>
                        </div>
                        <p className="text-lg text-[#9BA9B4] text-justify">
                          {service.content}
                        </p>
                      </div>
                    </div>
                  ) : null
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="block sm:hidden flex-wrap justify-center items-center w-[100%]">
        <Carousel
          autoPlay={true}
          navButtonsAlwaysVisible={false}
          indicators={false}
          animation="slide"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "transform 0.10s ease-in-out",
          }}
        >
          {servicesData.map((item, i) => (
            <Card
              key={i}
              style={{
                height: "100%",
                width: "100%",
                border: "solid 1px white",
                borderRadius: "20px",
                background: "transparent",
                color: "#D9E3EA",
                boxShadow: "none",
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
                      color: "#019dce",
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
                      textAlign: "center",
                    }}
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default WhyUs;

