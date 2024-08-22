"use client";
import { Grid, Typography, Box, styled } from "@material-ui/core";
import { BorderColor } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Paper,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [isChecked, setIsChecked] = useState(false);
  const form = useRef();
  const handleCheckboxClick = () => {
    setIsChecked(true);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    engagementType: "",
    whenToStart: "",
    budget: 0,
    projectBrief: "",
    captchaChecked: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (event) => {
    setFormData({
      ...formData,
      captchaChecked: event.target.checked,
    });
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!formData.captchaChecked) {
    //   alert("Please check the 'I'm not a robot' checkbox.");
    //   return;
    // }

    const templateParams = {
      from_name: formData.firstName + " " + formData.lastName,
      to_name: "Ayush tule",
      subject: "New Contact Form Submission",
      message: `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Engagement Type: ${formData.engagementType}
      Phone Number :${formData.phone}
      Service : ${formData?.service}
      Engagement Type : ${formData?.engagementType}
      When to Start: ${formData.whenToStart}
      Budget: ${formData.budget}
      Project Brief: ${formData.projectBrief}
      email : ${formData?.email} 
    `,
    };

    emailjs
      .send(
        "service_14pyn8e",
        "template_zzxciyv",
        templateParams,
        "iV2LpGhkJHKT6wGLR"
      )
      .then((response) => {
        notifySuccess("Email sent successfully!");
        // Reset form
        // setFormData({
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   service: "",
        //   engagementType: "",
        //   whenToStart: "",
        //   budget: 0,
        //   projectBrief: "",
        //   captchaChecked: false,
        // });
      })
      .catch((error) => {
        notifyError("Error while sending contact request")
        console.error("Error sending email:", error);
      });
  };

 const notifySuccess = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success"
  });

 const notifyError = (message) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error"
  });

  return (
    <MainWrapper>
      {/* //first container */}
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            margin: "7rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontWeight: "bold", color: "#fff" }}>
            Reach Out and Connect with Us
          </Typography>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#fff",
              margin: "3rem",
            }}
          >
            Bring Your Software Dreams to Life with ZenQua
          </Typography>
          <Typography
            style={{ fontWeight: "bold", color: "rgba(255,255,255,.75)" }}
          >
            Connect with us today and let us help bring your software dreams to
            life, transforming disruption into breakthroughs
          </Typography>
        </Grid>
      </Grid>

      {/* //2nd container */}

      <Grid container>
        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid #fff" }}>
          <Box className="box-1">
            <Typography className="typo-1">Get in touch </Typography>
            <Typography style={{ color: "#019dce" }}>
              +91 731-4028250
            </Typography>
            <Typography
              style={{ margin: "2rem", color: "#019dce" }}
            ></Typography>
            <Typography>Assistance hours:</Typography>
            <Typography>Monday – Friday</Typography>
            <Typography style={{ margin: "2rem" }}>8 am to 6 pm </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid #fff" }}>
          <Box className="box-1">
            <Typography className="typo-1"> Address</Typography>
            <Typography>Shreevardhan Complex, RNT Marg, South</Typography>
            <Typography>Tukoganj, Indore, Madhya Pradesh 452001 </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid #fff" }}>
          <Box className="box-1">
            <Typography className="typo-1">Social Media</Typography>
            {/* <div style={{ display: "flex", gap: 16 }}>
              <a
                className="linkedin-link"
                href="//www.linkedin.com/company/zenqua-technologies/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                className="linkedin-link"
                href="//github.com/zenqua-technologies"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                className="linkedin-link"
                href="//www.instagram.com/zenqua_technologies/"
                target="_blank"
              >
                <BsInstagram />
              </a>
              <a
                className="linkedin-link"
                href="//www.facebook.com/profile.php?id=61557762022662"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                className="linkedin-link"
                href="https://twitter.com/zenquaTech"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </div> */}
            <Typography></Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Form Section */}

      <Grid container className="my-4 px-4">
        <Grid item xs={12} className=" flex justify-center items-center">
          <Box
            className="w-[100%] p-12"
            style={{
              // ...style1,
              boxSizing: "border-box",
              margin: "30px",
            }}
          >
            <form ref={form}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">First name</Box>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className="input input-bordered w-full bg-gray-900 text-white  bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                  />
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Last name</Box>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full bg-gray-900 text-white 
                    bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                  />
                </Grid>
                <Grid item xs={12} className="m-[10px] w-full font-bold">
                  <Box className="mb-[10px]">Email</Box>
                  <Box className="w-full">
                    <input
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-full bg-gray-900 text-white 
                      bg-[rgba(150,144,162,.08)]  focus:bg-gray-800 focus:border-[#019dce]"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Phone</Box>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="phone"
                    type="number"
                    placeholder="Phone number"
                    className="input input-bordered w-full bg-gray-900 text-white 
                    bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                  />
                </Grid>
                <Grid item xs={12} md={6} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Choose a service</Box>
                  <select
                    className="select select-bordered w-full bg-gray-900 text-white 
                 bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    name="service"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
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
                  <select
                    className="select select-bordered w-full bg-gray-900 text-white 
                 bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    name="engagementType"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
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
                  <select
                    className="select select-bordered w-full bg-gray-900 text-white 
                 bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    name="whenToStart"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
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
                  <select
                    className="select select-bordered w-full bg-gray-900 text-white 
                 bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    name="budget"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <option disabled selected>
                      Select
                    </option>
                    <option>0-$10k+</option>
                    <option>10k-25k+</option>
                    <option>25k-50k+</option>
                    <option>$50k-$100k</option>
                  </select>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Brief about the Project</Box>
                  <textarea
                    className="textarea input input-bordered w-full bg-gray-900 
                 bg-[rgba(150,144,162,.08)] text-white focus:bg-gray-800 h-36 focus:border-[#019dce]"
                    placeholder="About project"
                    name="projectBrief"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  ></textarea>
                </Grid>
                <Grid item xs={12}>
                  <Box className="w-[400px]">
                    <Button
                      style={{
                        backgroundColor: "#019dce",
                        color: "white",
                        padding: "15px",
                        width: "50%",
                      }}
                    >
                      <Box onClick={handleSubmit} className="font-bold">
                        Send Your Message
                      </Box>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2792665147713!2d75.87048907455463!3d22.717859179388583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1692c7021f%3A0x6bdff67530f0a2e2!2sShreevardhan%20Complex%2C%20RNT%20Marg%2C%20South%20Tukoganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1718709703126!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0", marginBottom: "2rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
      <ToastContainer />
    </MainWrapper>
  );
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "2rem",
  },
  "& .box-1": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const CustomTextField = styled("input")({
  border: "none", // Add your default border style here
  "&:focus": {
    outline: "none", // Remove the default blue outline on focus
    border: "none",
  },
});
