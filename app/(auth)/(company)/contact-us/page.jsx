"use client";
import { Grid, Typography, Box, styled } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
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

  const form = useRef();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "Ayush Tule",
      subject: "New Contact Form Submission",
      message: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        Engagement Type: ${formData.engagementType}
        When to Start: ${formData.whenToStart}
        Budget: ${formData.budget}
        Project Brief: ${formData.projectBrief}
      `,
    };

    emailjs
      .send("service_14pyn8e", "template_zzxciyv", templateParams, "iV2LpGhkJHKT6wGLR")
      .then((response) => {
        notify("Request sent successfully!", "success");
        // Reset form
        setFormData({
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
      })
      .catch((error) => {
        notify("Error while sending contact request", "error");
        console.error("Error sending email:", error);
      });
  };

  const notify = (message, type) =>
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
      type,
    });

  return (
    <MainWrapper>
      {/* First Container */}
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
          <Typography style={{ fontWeight: "bold", color: "rgba(255,255,255,.75)" }}>
            Connect with us today and let us help bring your software dreams to life, transforming disruption into breakthroughs.
          </Typography>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid container>
        {/* Contact Information */}
        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid gray" }}>
          <Box className="box-1">
            <Typography className="typo-1">Get in touch </Typography>
            <Typography style={{ color: "#019dce" }}>+91 74006-20393</Typography>
            <Typography>Assistance hours:</Typography>
            <Typography>Monday – Friday</Typography>
            <Typography style={{ marginBottom: "2rem" }}>8 am to 6 pm </Typography>
          </Box>
        </Grid>

        {/* Address */}
        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid gray" }}>
          <Box className="box-1">
            <Typography className="typo-1">Address</Typography>
            <Typography>Shreevardhan Complex, RNT Marg, South</Typography>
            <Typography>Tukoganj, Indore, Madhya Pradesh 452001</Typography>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4} style={{ borderBottom: "1px solid gray" }}>
          <Box className="box-1">
            <Typography className="typo-1">Social Media</Typography>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="//www.linkedin.com/company/zenqua-technologies/" target="_blank" className="linkedin-link">
                <BsLinkedin />
              </a>
              <a href="//github.com/zenqua-technologies" target="_blank" className="linkedin-link">
                <BsGithub />
              </a>
              <a href="//www.instagram.com/zenqua_technologies/" target="_blank" className="linkedin-link">
                <BsInstagram />
              </a>
              <a href="//www.facebook.com/profile.php?id=61557762022662" target="_blank" className="linkedin-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/zenquaTech" target="_blank" className="linkedin-link">
                <FaTwitter />
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* Form Section */}
      <Grid container className="my-4 px-4">
        <Grid item xs={12} className="flex justify-center items-center">
          <Box className="w-[100%] p-12" style={{ boxSizing: "border-box", margin: "30px" }}>
            <form ref={form}>
              <Grid container spacing={3}>
                {["First name", "Last name", "Email", "Phone"].map((label, index) => (
                  <Grid item xs={12} md={index < 2 ? 6 : 12} className="m-[10px] font-bold" key={index}>
                    <Box className="mb-[10px]">{label}</Box>
                    <input
                      onChange={handleChange}
                      name={label.toLowerCase().replace(" ", "")}
                      type={label === "Email" ? "email" : "text"}
                      placeholder={label}
                      className="input input-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    />
                  </Grid>
                ))}
                {[
                  { label: "Choose a service", name: "service" },
                  { label: "Engagement type", name: "engagementType" },
                  { label: "When to start?", name: "whenToStart" },
                  { label: "Budget (USD)", name: "budget" },
                ].map((selectField, index) => (
                  <Grid item xs={12} md={6} className="m-[10px] font-bold" key={index}>
                    <Box className="mb-[10px]">{selectField.label}</Box>
                    <select
                      className="select select-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                      name={selectField.name}
                      onChange={handleChange}
                    >
                      <option disabled selected>
                        Select
                      </option>
                      {index === 0 && (
                        <>
                          <option>Mobile App Development</option>
                          <option>Web Development</option>
                          <option>Customized Development</option>
                          <option>Cloud Services</option>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <option>Project-Based</option>
                          <option>Dedicated Team</option>
                          <option>Consultation</option>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <option>Immediate</option>
                          <option>Within 3 months</option>
                          <option>Within 6 months</option>
                          <option>Flexible</option>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <option>0 - 5,000 USD</option>
                          <option>5,000 - 10,000 USD</option>
                          <option>10,000 - 25,000 USD</option>
                          <option>25,000 - 50,000 USD</option>
                          <option>50,000+ USD</option>
                        </>
                      )}
                    </select>
                  </Grid>
                ))}
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Box className="mb-[10px]">Brief about your project</Box>
                  <textarea
                    onChange={handleChange}
                    name="projectBrief"
                    className="textarea textarea-bordered h-24 w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                    placeholder="Brief about your project"
                  ></textarea>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="captchaChecked"
                      checked={formData.captchaChecked}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-green-500 rounded-md mr-2"
                    />
                    I'm not a robot
                  </label>
                </Grid>
                <Grid item xs={12} className="m-[10px] font-bold">
                  <Button
                    style={{
                      backgroundColor: "#019dce",
                      color: "white",
                      padding: "10px 30px",
                      fontWeight: 'bold',
                      textTransform: 'none'
                    }}
                    onClick={handleSubmit}
                    disabled={!formData.captchaChecked}
                  >

                    Send Your Message

                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
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