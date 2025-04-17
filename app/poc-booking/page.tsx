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
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddFeatureModal from "@/components/modals/Add-Feature-modal";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { openAddFeatureModal } from "../redux/slices/addFeatureModalSlice";
// import AddFeatureModal from "../models/AddFeature-model";

const featuresList = [
  { name: "Google", price: 2 },
  { name: "Facebook Login", price: 0 },
  { name: "Chat", price: 2 },
];

const POCBookingForm = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [selectedFeatures, setSelectedFeatures] = useState([
    { name: "Facbook" },
  ]);
  const [newFeature, setNewFeature] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const arrow = "/images/product/arrow.svg";

  // const handleAddFeature = () => {
  //   if (
  //     newFeature &&
  //     !selectedFeatures.find((item) => item.name === newFeature)
  //   ) {
  //     const feature = featuresList.find((item) => item.name === newFeature);
  //     setSelectedFeatures([...selectedFeatures, feature]);
  //   }
  //   setNewFeature("");
  // };

  const handleDelete = (featureName: any) => {
    setSelectedFeatures(selectedFeatures.filter((f) => f.name !== featureName));
  };
  const handleRemoveFeature = (name: string) => {
    setSelectedFeatures((prev) =>
      prev.filter((feature) => feature.name !== name)
    );
  };

  // const totalCost = selectedFeatures.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <style>
        {`
            .input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.input-group label {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.custom-input {
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
}
          `}
      </style>
      <Box sx={{ minHeight: "100vh", py: 4, backgroundColor: "#fff" }}>
        <Box sx={{ ml: 4, mb: 2 }}>
          <img
            src={arrow}
            alt="Back"
            style={{ cursor: "pointer", margin: "0 130px" }}
            // onClick={() => navigate(-1)}
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

            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="input-group">
                    <label htmlFor="email">Full Name </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      required
                      placeholder="Enter your email"
                      className="custom-input"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="input-group">
                    <label htmlFor="email">Project Name (optional)</label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      required
                      placeholder="Project Name"
                      className="custom-input"
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" fontWeight={500}>
                    Selected Features
                  </Typography>
                 
                  <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                    {featuresList
                      .filter(
                        (f) =>
                          !selectedFeatures.find((item) => item.name === f.name)
                      )
                      .map((feature) => (
                        // <MenuItem key={feature.name} value={feature.name}>
                        <Chip
                          key={feature.name}
                          label={feature.name}
                          onDelete={() => handleDelete(feature.name)}
                          sx={{
                            height: "32px",
                            padding: "8px 10px",
                            borderRadius: "4px",
                            "& .MuiChip-label": {
                              padding: 0, // Remove default label padding
                            },
                            // Auto width based on content:
                            minWidth: "fit-content",
                            width: "auto",
                            maxWidth: "100%",
                            // Delete icon styling:
                            "& .MuiChip-deleteIcon": {
                              fontSize: "16px",
                              marginLeft: "4px",
                              color: "#019DCE",
                            },
                          }}
                        />
                        // </MenuItem>
                      ))}
                    <Button
                      variant="outlined"
                      sx={{ height: "32px" }}
                      // onClick={() => dispatch(openAddFeatureModal())}
                      onClick={() => setIsModalOpen(true)}
                    >
                      + Add
                    </Button>

                    <AddFeatureModal
                      open={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    />
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
                alignItems: "right",
                gap: "10px",
                bgcolor: "#E4F1F5",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                disabled={!termsAccepted}
                onClick={() => alert("Form Submitted!")}
                style={{ backgroundColor: termsAccepted ? "#019DCE" : "grey" }}
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
                Submit
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default POCBookingForm;
