"use client";
import {
  Grid,
  Typography,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import heroImageIcon from "@/public/images/zenquaphoto.webp";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
export default function ContactUs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
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
      .send(
        "service_14pyn8e",
        "template_zzxciyv",
        templateParams,
        "iV2LpGhkJHKT6wGLR"
      )
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
    <MainWrapper className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mt-[100px]  mb-8">
      {/* First Container */}
      <Grid
        container
        // className="mt-[100px]"
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: isMdScreen ? "column" : "row",
            justifyContent: "center",
            alignItem: "center",
            gap: "40px",
            marginTop: "30px",
          }}
        >
          <Box
            // className="p-12"
            style={{
              boxSizing: "border-box",
              width: isMdScreen ? "100%" : "60%",
            }}
          >
            <p>Get in Touch</p>
            <h1 className="text-[24px] font-bold   text-[#D9E3EA]">
              Contact Us
            </h1>
            <p>
              Have questions or feedback? We’re here to help. Send us a message,
              and we’ll respond within 24 hours
            </p>
            <hr className="my-8"></hr>
            <form ref={form}>
              <Grid container spacing={3}>
                {["First name", "Last name", "Email", "Phone"].map(
                  (label, index) => (
                    <Grid
                      item
                      xs={12}
                      md={index < 2 ? 6 : 12}
                      className="m-[10px] font-bold"
                      key={index}
                    >
                      <Box className="mb-[10px]">{label}</Box>
                      <input
                        onChange={handleChange}
                        name={label.toLowerCase().replace(" ", "")}
                        type={label === "Email" ? "email" : "text"}
                        placeholder={label}
                        className="input input-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce]"
                      />
                    </Grid>
                  )
                )}
                {[
                  { label: "Choose a service", name: "service" },
                  { label: "Engagement type", name: "engagementType" },
                  { label: "When to start?", name: "whenToStart" },
                  { label: "Budget (USD)", name: "budget" },
                ].map((selectField, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className="m-[10px] font-bold"
                    key={index}
                  >
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
                      fontWeight: "bold",
                      textTransform: "none",
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
          <Box className="my-10" style={{ width: isMdScreen ? "100%" : "40%" }}>
            <Image
              src={heroImageIcon}
              alt="best-it-company-in-indore"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box className="my-5  h-[650px] bg-gray-800 pt-10 grid-rows-5 gap-4 rounded-[20px]">
              <a
                href="//www.linkedin.com/company/zenqua-technologies/"
                target="_blank"
                className="linkedin-link"
              >
                <div className="bg-gray-900  flex  text-white p-4 w-[80%] h-[70px] mx-auto rounded-[16px]">
                  <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                    <BsLinkedin className="linkedin-link" />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-[2px_9px_1px_15px] text-[15px]">Linkedin</p>
                  </Box>
                </div>
              </a>
              <a
                href="//github.com/zenqua-technologies"
                target="_blank"
                className="linkedin-link"
              >
                <div className="bg-gray-900 my-3 flex  text-white p-4 w-[80%] h-[70px] mx-auto rounded-[16px]">
                  <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                    <BsGithub className="linkedin-link" />
                  </Box>{" "}
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-[2px_9px_1px_15px] text-[15px]">Github</p>
                  </Box>
                </div>
              </a>

              <a
                href="//www.instagram.com/zenqua_technologies/"
                target="_blank"
              >
                <div className="bg-gray-900  my-3 flex  text-white p-4 w-[80%] h-[70px] mx-auto rounded-[16px]">
                  <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                    <BsInstagram className="linkedin-link" />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-[2px_9px_1px_15px] text-[15px]">
                      Instagram
                    </p>
                  </Box>
                </div>
              </a>
              <a
                href="//www.facebook.com/profile.php?id=61557762022662"
                target="_blank"
                className="linkedin-link"
              >
                <div className="bg-gray-900 my-3 flex  text-white p-4 w-[80%] h-[70px] mx-auto rounded-[16px]">
                  <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                    <FaFacebookF className="linkedin-link" />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-[2px_9px_1px_15px] text-[15px]">Facebook</p>
                  </Box>
                </div>
              </a>
              <a
                href="https://twitter.com/zenquaTech"
                target="_blank"
                className="linkedin-link"
              >
                <div className="bg-gray-900 my-3 flex  text-white p-4 w-[80%] h-[70px] mx-auto rounded-[16px]">
                  <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                    <FaTwitter className="linkedin-link" />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-[2px_9px_1px_15px] text-[15px]">Twitter</p>
                  </Box>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/dir//RNT+Marg,+South+Tukoganj,+Indore,+Madhya+Pradesh+452001/@22.7176073,75.7903869,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fd9723fad585:0x8222898785684e10!2m2!1d75.8727885!2d22.7176284?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="linkedin-link"
              >
                <div className="bg-gray-900 my-3 flex  text-white p-4 w-[80%]  mx-auto rounded-[16px]">
                  <div>
                    <Box className="w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center">
                      <FaLocationDot className="linkedin-link" />
                    </Box>
                  </div>
                  <div className="flex flex-col m-[2px_9px_1px_15px] text-[15px]">
                    <p className="text-[15px]">Address</p>
                    <p>Shreevardhan Complex, RNT Marg, South</p>
                    <p>Tukoganj, Indore, Madhya Pradesh 452001</p>
                  </div>
                </div>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid className="mt-162;" container>
        <Grid
          item
          xs={12}
          style={{
            marginTop: "5rem",
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
              fontSize: isSmallScreen ? "25px" : "40px",
              fontWeight: "bold",
              color: "#fff",
              margin: "2rem",
              textAlign: "center",
            }}
          >
            Bring Your Software Dreams to Life with ZenQua
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              color: "rgba(255,255,255,.75)",
              textAlign: "center",
            }}
          >
            Connect with us today and let us help bring your software dreams to
            life, transforming disruption into breakthroughs.
          </Typography>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid
        className="mt-[40px]"
        container
        style={{ borderBottom: "1px solid gray" }}
      >
        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Box className="box-1">
            <Typography className="typo-1">Get in touch </Typography>
            <Typography style={{ color: "#019dce" }}>
              +91 74006-20393
            </Typography>
            <Typography>Assistance hours:</Typography>
            <Typography>Monday – Friday</Typography>
            <Typography style={{ marginBottom: "2rem" }}>
              8 am to 6 pm{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Address */}
        <Grid item xs={12} sm={4} style={{ marginBottom: "40px" }}>
          <Box className="box-1">
            <Typography className="typo-1">Address</Typography>
            <Typography>Shreevardhan Complex, RNT Marg, South</Typography>
            <Typography>Tukoganj, Indore, Madhya Pradesh 452001</Typography>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4} style={{ marginBottom: "40px" }}>
          <Box className="box-1">
            <Typography className="typo-1">Social Media</Typography>
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href="//www.linkedin.com/company/zenqua-technologies/"
                target="_blank"
                className="linkedin-link"
              >
                <BsLinkedin />
              </a>
              <a
                href="//github.com/zenqua-technologies"
                target="_blank"
                className="linkedin-link"
              >
                <BsGithub />
              </a>
              <a
                href="//www.instagram.com/zenqua_technologies/"
                target="_blank"
                className="linkedin-link"
              >
                <BsInstagram />
              </a>
              <a
                href="//www.facebook.com/profile.php?id=61557762022662"
                target="_blank"
                className="linkedin-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/zenquaTech"
                target="_blank"
                className="linkedin-link"
              >
                <FaTwitter />
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* Form Section */}

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
