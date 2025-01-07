import { Grid, Box, Typography } from '@material-ui/core';
import React from 'react'
import { FaStar } from 'react-icons/fa';

function Experties({content}:any) {
    console.log(content)
  return (
    <div>
                <Grid container>
                  {content?.section4?.map((item: any, index: any) => {
                    return (
                      <Grid item xs={12} key={index}>
                        <Box className="box1">
                          <Typography style={{ color: "#D9E3EA" }}>
                            {item.heading1}
                          </Typography>
                          <Typography className="typo-2 text-center">
                            {item.heading2}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
    
                <Grid container>
                  {content?.item3?.map((item: any, index: any) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                      <Box
                        style={{
                          boxShadow: "0 0 10px 0 rgba(139,139,139,.5)",
                          margin: "1rem",
                          padding: "2rem",
                          height: "500px",
                          flexWrap: "wrap",
                          borderRadius: "20px",
                        }}
                      >
                        <Typography
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem",
                            fontSize: "21px",
                            color: "#D9E3EA",
                            fontWeight: "bold",
                          }}
                        >
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

export default Experties