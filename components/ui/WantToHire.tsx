import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/navigation";

// Define styles with makeStyles

function WantToHire({ headingText, buttonText }: any) {
  const router = useRouter();
  const scrollToBottom = () => {
    router.push("/contact-us");
  };

  return (
    <Box
      style={{
        flexGrow: 1,
        borderLeft: "2px solid rgb(32, 144, 164)",
        marginTop: 32,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            style={{
              color: "#D9E3EA",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: 8,
              marginLeft: 16,
            }}
          >
            Want To Hire An Offshore
            <span style={{ color: "#019dce", flexWrap: "wrap", margin: 8 }}>
              {headingText}
            </span>
          </Typography>

          <Typography
            variant="body1"
            style={{
              color: "#9BA9B4",
              marginLeft: 16, // Assuming theme.spacing(2) is 16px
              fontSize: "16px",
            }}
          >
            We are proud to offer you a no-cost, no-risk opportunity to build
            your dream business. Our experienced professionals are here to help
            you get your idea off the ground. With our support, you’ll be ready
            to take the next step in no time. Try us out for the first 7 days at
            no cost and no commitment. Give us a try today!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            onClick={scrollToBottom}
            style={{
              alignItems: "center",
              fontSize: "15px",
              textAlign: "center",
              flexWrap: "wrap",
              backgroundColor: "#019dce",
              color: "#D9E3EA",
              fontWeight: "bold",
              borderRadius: "10px",
              width: "80%",
              textTransform: "none",
              marginTop: 16, // Assuming theme.spacing(2) is 16px
              padding: 8, // Assuming theme.spacing(1) is 8px
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WantToHire;
