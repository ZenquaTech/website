"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/poc-booking-css.css";
import emailjs from "@emailjs/browser";
import { useProductContext } from "@/context/product/productContext";
import { useRouter } from 'next/navigation';
 import Footer from "@/components/ui/footer";

const POCBookingForm = () => {
 
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { cart } = useProductContext();

  const arrow = "/images/product/arrow.svg";
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push('/thank-you');
    setIsLoading(true);
    const templateParams = {
      title: "Confirmation Email",
      fullName: fullName,
      email: email,
      projectName: projectName,
      message: message,
      selectedFeatures: cart.map((product) => product.title),
    };

    emailjs
      .send(
        "service_14pyn8e",
        "template_zzxciyv",
        templateParams,
        "iV2LpGhkJHKT6wGLR"
      )
      .then((response) => {
        setEmail("");
        setFullName("");
        setMessage("");
        setProjectName("");
        setTermsAccepted(false);
        router.push('/thank-you');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh", py: 4, backgroundColor: "#fff" }}>
        <Box sx={{ ml: 4, mb: 2 }}>
          <img
            src={arrow}
            alt="Back"
            style={{ cursor: "pointer", margin: "0 130px" }}
            onClick={() => router.push('/product')} 
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
                Submit Request
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
              Fill details below to book development of your build POC.
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
                        required
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="custom-input"
                      />
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
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="custom-input"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input-group">
                      <label htmlFor="projectName">
                        Project Name (optional)
                      </label>
                      <input
                        type="text"
                        value={projectName}
                        id="projectName"
                        name="projectName"
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Project Name"
                        className="custom-input"
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2" fontWeight={500}>
                      Selected Features
                    </Typography>

                    <Box
                      sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}
                    >
                      {cart.map((feature) => (
                        <Chip
                          key={feature.title}
                          label={feature.title}
                          sx={{
                            height: "32px",
                            padding: "8px 10px",
                            borderRadius: "4px",
                            "& .MuiChip-label": {
                              padding: 0,
                            },
                            minWidth: "fit-content",
                            width: "auto",
                            maxWidth: "100%",
                            "& .MuiChip-deleteIcon": {
                              fontSize: "16px",
                              marginLeft: "4px",
                              color: "#019DCE",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
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

export default POCBookingForm;
