import { Grid, Box, Typography } from '@material-ui/core';
import React, { memo } from 'react'
import { FaStar } from 'react-icons/fa';

function WhatWeDo({content}:any) {
  return (
    <div>
           <Grid container>
              {content?.section3?.map((item: any, index: any) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Box className="box1">
                      <Typography style={{ color: "#D9E3EA" }}>
                        {item.heading1}
                      </Typography>
                      <Typography className="typo-2 text-center text-[#D9E3EA]">
                        {item.heading2}
                      </Typography>
                      <Typography
                        className="text-justify py-2"
                        style={{
                          fontSize: "19px",
                          color: "#9BA9B4",
                          width: "98%",
                        }}
                      >
                        {item.para}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container>
              {content?.item1?.map((item: any, index: any) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    style={{
                      boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                      margin: "1rem",
                      padding: "2rem",
                      height: "500px",
                      borderRadius: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        marginTop: "1rem",
                        fontSize: "21px",
                        color: "#D9E3EA",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <FaStar style={{ color: "#019dce", fontSize: "150%" }} />
                      <span style={{ paddingLeft: "3%" }}>{item.title}</span>
                    </Typography>

                    <Typography
                      style={{
                        textAlign: "justify",
                        marginTop: "1rem",
                        color: "#9BA9B4",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
    </div>
  )
}

export default memo(WhatWeDo)