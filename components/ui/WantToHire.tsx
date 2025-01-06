import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Define styles with makeStyles
const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    borderLeft: "2px solid rgb(32, 144, 164)",
    marginTop: theme.spacing(4),
  },
  heading: {
    color: "#D9E3EA",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  headingHighlight: {
    color: "#019dce",
    flexWrap: "wrap",
    margin: theme.spacing(1),
  },
  description: {
    color: "#9BA9B4",
    marginLeft: theme.spacing(2),
    fontSize: "16px",
  },
  button: {
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
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#019dce",
      color: "#D9E3EA",
    },
  },
}));

function WantToHire({ headingText, buttonText }: any) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography className={classes.heading}>
            Want To Hire An Offshore
            <span className={classes.headingHighlight}>{headingText}</span>
          </Typography>

          <Typography variant="body1" className={classes.description}>
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
          <Button variant="contained" className={classes.button}>
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(WantToHire);
