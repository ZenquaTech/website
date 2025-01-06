import { Grid, Box } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'
import Data from "./data.json";
import AddIcon from "@material-ui/icons/Add";

function zenqua_glance() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[95%]">
    <h2 className=" font text-center service-button uppercase text-[#D9E3EA] ">
      ZenQua AT GLANCE
    </h2>
    <h2 className="text-4xl font-extrabold text-center mb-10 text-[#D9E3EA]">
      Over 150+ Completed Projects & Still Counting.
    </h2>
    <div className="max-w[100%] text-[#9BA9B4]">
      <Grid container spacing={2}>
        {Data.project.map((item: any, index: any) => (
          <Grid key={index} item xs={12} md={6} lg={3}>
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 max-w[100%] rounded-t-xl"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Box className="flex justify-center items-center text-[#019dce]">
                <div className="text-4xl font-bold text-black">
                  <CountUp end={item.number} />
                </div>
                <AddIcon style={{ fontSize: "40px" }} />
              </Box>
              <div className="text-md text-[#000] font-medium">{item.title} </div>
            </div>
            <div className="h-[5px] bg-[#019dce] mt-[15px] w-full text-[#019dce]"></div>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
  )
}

export default zenqua_glance