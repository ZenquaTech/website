"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/poc-booking-css.css";
import emailjs from "@emailjs/browser";
import { useProductContext } from "@/context/product/productContext";
import { useRouter } from "next/navigation";
import Footer from "@/components/Product/Footer";

const Feedback = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("Feedback");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    type: "",
    message: "",
  });

  const { cart } = useProductContext();
  const arrow = "/images/product/arrow.svg";
  const router = useRouter();

  const validate = () => {
    const newErrors = {
      fullName: fullName ? "" : "Full name is required.",
      email: email
        ? /\S+@\S+\.\S+/.test(email)
          ? ""
          : "Invalid email address."
        : "Email is required.",
      type: projectName ? "" : "Type is required.",
      message: message ? "" : "Message is required.",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          type: projectName, // Feedback or Inquiry
          message,
        }),
      });

      const data = await response.json();

      if (data.result) {
        router.push('/thank-you');
        // alert("Thank you for your submission!");
        // Reset form
        setFullName("");
        setEmail("");
        setProjectName("Feedback");
        setMessage("");
        setTermsAccepted(false);
      } else {
        alert(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to send feedback. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh", py: 4, backgroundColor: "#fff" }}>
        <Box sx={{ ml: 4, mb: 2 }}>
          <img
            src={arrow}
            alt="Back"
            style={{ cursor: "pointer", margin: "0 130px" }}
            onClick={() => router.push("/product")}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: 500, boxShadow: 4 }}>
            <Box
              sx={{
                height: "67.41px",
                padding: "15px 40px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                bgcolor: "#E4F1F5",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ margin: "auto", color: "#019DCE" }}
              >
                Feedback/Inquiry
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#686868",
                fontWeight: 500,
                size: "16px",
                marginLeft: "20px",
                marginTop: "10px",
                lineHeight: "100%",
              }}
            >
              Please fill out the form below to share your feedback with us.
            </Typography>

            <form onSubmit={handleSubmit}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="input-group">
                      <label htmlFor="name">Full Name </label>
                      <input
                        type="text"
                        id="name"
                        value={fullName}
                        name="name"
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="custom-input"
                      />
                      {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="custom-input"
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input-group">
                      <label htmlFor="type">Select Type</label>
                      <RadioGroup
                        row
                        id="type"
                        name="type"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                      >
                        <FormControlLabel
                          value="Feedback"
                          control={<Radio />}
                          label="Feedback"
                        />
                        <FormControlLabel
                          value="Inquiry"
                          control={<Radio />}
                          label="Inquiry"
                        />
                      </RadioGroup>
                      {errors.type && <p className="error-text">{errors.type}</p>}
                    </div>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                      />
                    }
                    label="I accept the Terms & Conditions"
                  />
                </Grid>
              </CardContent>

              <Box
                sx={{
                  height: "85px",
                  padding: "15px 40px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  bgcolor: "#E4F1F5",
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!termsAccepted || isLoading}
                  style={{
                    backgroundColor: termsAccepted ? "#019DCE" : "grey",
                  }}
                  sx={{
                    width: "151px",
                    height: "55px",
                    borderRadius: "10px",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#017cad",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "#c0c0c0",
                      color: "#ffffff",
                    },
                  }}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Feedback;
