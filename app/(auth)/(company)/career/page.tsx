"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Page = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const commonStyle = {
    color: "white",
    backgroundColor: "transparent",
    padding: "20px",
    width: "92%",
    margin: "10px",
    boxShadow: "0px 0px 8px #fff",
    transition: "transform 0.3s ease",
  };
  const [content, setContent] = React.useState<string | null>(null);
  const [filename, setFilename] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState<any>({
    fullname: "",
    email: "",
    phone: "",
    coverletter: "",
    techstack: "",
    experience: "",
    captchaChecked: false,
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const form: any = useRef();

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!formData.fullname.trim())
      validationErrors.fullname = "Full Name is required.";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone must be a valid 10-digit number.";
    }
    if (!formData.coverletter.trim())
      validationErrors.coverletter = "Cover Letter is required.";
    if (!formData.techstack.trim())
      validationErrors.techstack = "Tech Stack is required.";
    if (!formData.experience.trim())
      validationErrors.experience = "Experience is required.";
    if (!content) validationErrors.file = "Please upload a CV/Resume.";
    if (!formData.captchaChecked)
      validationErrors.captchaChecked =
        "You must agree to the terms and conditions.";

    return validationErrors;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    if (content === null) {
      alert("Please select a file to upload");
      setLoading(false);
      return;
    }
    const base64Content = content.split(",")[1];
    try {
      const res: any = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: base64Content, filename, formData }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            coverletter: "",
            techstack: "",
            experience: "",
            captchaChecked: false,
          });

          setContent(null);
          setFilename("");
          setErrors({});

          // Clear file input using ref
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          // notify("Your application has been submitted.", "success");
          setOpenModal(true);
        } else {
          notify("Something went wrong. No response data received.", "error");
        }
      } else {
        const errorMessage = `Request failed with status: ${res.status}`;
        console.error(errorMessage);
        notify(errorMessage, "error");
      }
    } catch (e) {
      notify(
        "Something went wrong while submitting your application.",
        "error"
      );
    } finally {
      // Reset loading state after the submission attempt
      setLoading(false);
    }
  };
  const notify = (message: any, type: any) =>
    toast(<p style={{ fontSize: 16 }}>{message}</p>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      type,
    });
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (files && files.length > 0) {
      reader.onload = (r) => {
        if (r.target?.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
          setErrors((prevErrors) => ({ ...prevErrors, file: "" })); // Clear file error
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div
      // style={{ marginTop: "100px", padding: "27px" }}
      className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 mt-[100px]  mb-8"
    >
      <Head>
        {/* Adding meta keyword for SEO */}
        <meta name="keywords" content="top 10 vue.js company in Indore, vue.js development, best vue.js companies, IT staff augmentation, vue.js experts in Indore, vue.js developers" />
        <meta name="description" content="Looking for the top Vue.js companies in Indore? Hire the best Vue.js developers and IT staff augmentation services." />
        <title>Top Vue.js Company in Indore | Hire Vue.js Developers</title>
      </Head>
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          // marginTop: "8%",
          marginBottom: "5%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              boxSizing: "border-box",
              // width: "92%"
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                color: "#D9E3EA",
                // padding: "20px"
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  className="text-[#D9E3EA] mb-2 service-button mt-11 sm:mt-12 lg:mt-0"
                >
                  Give Flight to Your Skills and touch The Skies
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={isSmallScreen ? "h4" : "h2"}
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  Career Openings
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  className="text-[#9BA9B4] mb-2 service-button mt- lg:mt-0"
                >
                  ZenQua Invites Professionals from all niches and cliques to
                  join a team of 150+ energetic, highly-skilled, motivated and
                  highly capable professionals working together to create
                  future-ready solutions to usher in a tech tomorrow.
                </Typography>
              </Grid>

              {[
                "Explore Featured Jobs",
                "Walk-In Interviews",
                "Look For All Jobs",
              ].map((industry, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Paper
                    elevation={1}
                    style={{
                      ...commonStyle,
                      height: "10vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "3%",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Typography
                      variant="subtitle1"
                      align="center"
                      style={{ fontSize: "x-large" }}
                    >
                      {industry}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </Box>

      <Box
        className=" bg-gray-800 rounded-[20px]"
        style={{
          boxSizing: "border-box",
          marginLeft: isMdScreen ? "" : "100px",
          marginRight: isMdScreen ? "" : "100px",
          padding: isSmallScreen ? "1.5rem" : "3rem",
          marginBottom: "150px",
        }}
      >
        <h1 className="text-[24px] mb-6 font-bold   text-[#D9E3EA]">
          Apply for the Job
        </h1>
        <form ref={form}>
          <Grid container spacing={3}>
            {["Full Name", "Email", "Phone"].map((label, index) => (
              <Grid
                item
                xs={12}
                md={12}
                className="m-[10px] font-bold"
                key={index}
              >
                <Box className="mb-[10px]">
                  {label}
                  <span className="text-red-500 ml-1">*</span>
                </Box>
                <input
                  onChange={handleChange}
                  name={label.toLowerCase().replace(" ", "")}
                  value={formData[label.toLowerCase().replace(" ", "")]}
                  type={label === "Email" ? "email" : "text"}
                  placeholder={label}
                  className={`input input-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800  ${
                    errors[label.toLowerCase().replace(" ", "")]
                      ? "border-red-500 focus:border-red-500"
                      : "focus:border-[#019dce]"
                  }`}
                  // className="input input-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce] "
                />
                {errors[label.toLowerCase().replace(" ", "")] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[label.toLowerCase().replace(" ", "")]}
                  </p>
                )}
              </Grid>
            ))}
            <Grid item xs={12} className="m-[10px] font-bold">
              <Box className="mb-[10px]">
                Cover Letter
                <span className="text-red-500 ml-1">*</span>
              </Box>
              <textarea
                onChange={handleChange}
                name="coverletter"
                value={formData.coverletter}
                className={`textarea textarea-bordered h-24 w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800  ${
                  errors.coverletter
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-[#019dce]"
                }`}
                placeholder="Cover Letter"
              ></textarea>
              {errors.coverletter && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.coverletter}
                </p>
              )}
            </Grid>
            {["Tech Stack", "Experience"].map((label, index) => (
              <Grid
                item
                xs={12}
                md={12}
                className="m-[10px] font-bold"
                key={index}
              >
                <Box className="mb-[10px]">
                  {label}
                  <span className="text-red-500 ml-1">*</span>
                </Box>
                <input
                  onChange={handleChange}
                  name={label.toLowerCase().replace(" ", "")}
                  type={label === "Email" ? "email" : "text"}
                  value={formData[label.toLowerCase().replace(" ", "")]}
                  placeholder={label}
                  className={`input input-bordered w-full bg-gray-800 text-white bg-[rgba(150,144,162,.08)] focus:bg-gray-800 focus:border-[#019dce] ${
                    errors[label.toLowerCase().replace(" ", "")]
                      ? "border-red-500 focus:border-red-500"
                      : "focus:border-[#019dce]"
                  }`}
                />
                {errors[label.toLowerCase().replace(" ", "")] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[label.toLowerCase().replace(" ", "")]}
                  </p>
                )}
              </Grid>
            ))}
            <Grid item xs={12} className="m-[10px] font-bold">
              <Box className="mb-[10px]">
                Upload CV/Resume
                <span className="text-red-500 ml-1">*</span>
              </Box>
              <input
                type="file"
                name="file"
                ref={fileInputRef}
                // value={File}

                onChange={onAddFileAction}
                accept=".pdf, .doc, .docx"
                className={`${errors.file ? "border-red-500" : ""}`}
              />
              {errors.file && (
                <p className="text-red-500 text-sm mt-1">{errors.file}</p>
              )}
              <Box style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "rgb(155 169 180 / var(--tw-text-opacity))",
                    fontSize: "13px",
                  }}
                >
                  Allowed Type(s): .pdf, .doc, .docx
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} className="m-[10px]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="captchaChecked"
                  value={formData.captchaChecked}
                  checked={formData.captchaChecked}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-500 rounded-md mr-2"
                />
                By using this form you agree with the storage and handling of
                your data by this website.
                <span className="text-red-500 ml-1">*</span>
              </label>
              {errors.captchaChecked && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.captchaChecked}
                </p>
              )}
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
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <ToastContainer />
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{
          style: {
            backgroundColor: "#25282C",
            borderRadius: "20px",
            boxShadow: "rgb(255, 255, 255) 0px 0px 7px",
          },
        }}
      >
        <DialogContent>
          <Typography style={{ fontWeight: "500", color: "white" }}>
            Your application has been submitted successfully!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              marginTop: "1rem",
              color: "rgb(155 169 180 / var(--tw-text-opacity))",
            }}
          >
            For more updates, follow us on{" "}
            <a
              href="https://www.linkedin.com/company/zenqua-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#019dce" }}
            >
              LinkedIn
            </a>
            .
          </Typography>
        </DialogContent>
        <DialogActions style={{ padding: "20px 24px" }}>
          <Button
            onClick={handleCloseModal}
            style={{
              backgroundColor: "#019dce",
              color: "white",
              padding: "5px 20px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page;
