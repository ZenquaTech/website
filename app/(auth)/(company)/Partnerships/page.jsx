"use client";
import { Button, Box, Typography, Grid, styled } from "@material-ui/core";
import Image from "next/image";
import ModeStandbyTwoToneIcon from "@mui/icons-material/ModeStandbyTwoTone";


export default function Partnerships() {
  const data = [
    {
      title: 'Channel Partners',
      paragraphs: [
        "Our channel partnership program enables you to benefit from a wide range of your technology services and depth of our expertise. We enable our partners around the world to allow smooth incorporation of our software development services into their own product and service offerings.",
        
      ],
      paragraphsone: [
        "We provide direct access to our partners to ZenQua’s services and expertise industry, business strategy, technology need and service levels. With our channel partner programs you can increase the pace of your business development and ROI with yoincreased service offerings."
      ]
      
    },
 
  ];

  return (
    <MainWrapper>
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12}>
          <Box className="box-1">
             <Typography className="typo-1">Explore Our Partnerships</Typography>
            <Typography className="typo-2">
              We Don't Just Form Partnerships, We Build Alliances
            </Typography>
            <Typography className="typo-3">
              As we transition into a new era of the information technology
              market, characterized by a surge of new tech startups that disrupt
              long-standing technologies, partnerships have become increasingly
              essential. ZenQua recognize the importance of partnerships and
              welcome any potential partner whose values are in-line with our
              own and whose goals align with ours.
            </Typography>
            <Box style={{ marginTop: "5rem" }}>
              <Button className="typo-4">Talk to Expert</Button>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography className="typo-5">Channel Partnership</Typography>
            </Box> 
           
          </Box>
        </Grid>
      </Grid>

      {/* //first container */}

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
        {data.map((item, index) => (
          <Box key={index}>
            <Typography className="channel">{item.title}</Typography>

            {item.paragraphs.map((paragraph, idx) => (
              <Typography key={idx} className={`typo-${idx + 6}`}>
                {paragraph}</Typography>
                ))}

          {item.paragraphsone.map((paragraphsone, idx) => (
           <Typography key={idx} className={`typo-${idx + 6}`}>
              {paragraphsone}</Typography>
          ))}

          </Box>
        ))}
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/../images/webpFile/channel_partners-1.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>

      {/* //second container */}

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/../images/webpFile/channel_partner_joint_venture-1.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Typography className="typo-8">Joint Venture</Typography>
          <Box>
            <Typography className="typo-9">
              We assist you with the technology and business support along with
              the training and development to get ahead of our competition.
              Through long-term relations, we can always remain mutually
              beneficial both financially and stable business practices.
            </Typography>
          </Box>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "16px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Joint development costs
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Priority availability of Resources
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Ticket based Maintenance and Tech
                support
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Payment Flexibility
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Co-marketing and unlimited
                customization
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box
            style={{
              display: "contents",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#fff",
                margin: "3rem",
              }}
            >
              Offshore Partnership
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* //Third container */}

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
            <Typography className="typo-10">Offshore Partners</Typography>
          <Box>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",

                margin: "2rem",
              }}
            >
              We help you boost your competitiveness by offering our wide range
              of services and solutions. Our expert developers provide
              outsourcing services that lower project development costs and
              deliver high-quality services by expanding as our offshore
              partner. With our data-driven solutions, lower operation costs and
              our approach you can expect quick turn-around-time of your work.
              We are out of the box thinkers and our methodologies allow us to
              get you unmatched services and benefits. And most importantly we
              offer you time to tend to your business needs leaving your worries
              for development work on us.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/../images/webpFile/offshore_partners.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>

      {/* //fourth container */}

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/../images/webpFile/offshore_joint_venture.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              Joint Venture
            </Typography>
  
            <Typography
              style={{
                margin: "2rem",
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",
              }}
            >
              We assist you with the technology and business support along with
              the training and development to get ahead of our competition.
              Through long-term relations, we can always remain mutually
              beneficial both financially and stable business practices.
            </Typography>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "16px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Joint development costs
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Priority availability of Resources
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Ticket based Maintenance and Tech
                support
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Payment Flexibility
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Co-marketing and unlimited
                customization
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box
            style={{
              display: "contents",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#fff",
                margin: "3rem",
              }}
            >
              Technology Partnership
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* //fifth container */}
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              Technology Partners
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",

                margin: "2rem",
              }}
            >
              You should look for a professional technology partner that can
              handle all service requests, automated software, application
              migration, QA and testing, web and app development, cloud and
              database integration services etc. ZenQua comes with a bag full of
              great experience and smooth deployments of many projects to offer
              high-quality deliverables to your customers. As our technology
              partner, you just need to help us with careful technical
              description and we will take care of the rest. From preparing a
              plan, cost estimate, finding and allocating developers, providing
              unique tools and solutions, testing and deployment.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{

              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/../images/webpFile/offshore_partners.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
      </Grid>

      {/* //sixth container */}
      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12} sm={6} md={6}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/../images/webpFile/agent_partners.webp"
              alt="Channel Partners"
              width={400}
              height={200}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              Agent Partners
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                margin: "2rem",
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",
              }}
            >
              If you’re an IT entrepreneur, Consultant or a sales professional,
              we offer you to become our Agent Partners. With this setting, you
              are in charge of finding business opportunities and generate
              leads. Our sales and marketing team will work tirelessly with you
              to plan, prepare and propel business proposals that deliver
              required services on-time and within budget.
            </Typography>
          </Box>
          <Box
            style={{
              margin: "2rem",
              fontWeight: 600,
              fontSize: "16px",
              color: "rgba(255,255,255,.75)",
            }}
          >
            <ul>
              <li>
                <ModeStandbyTwoToneIcon /> Unlimited Iterations for Development
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Training and Technical Support
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Sales and Marketing Support
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Growth and Profitable work models
              </li>
              <li>
                <ModeStandbyTwoToneIcon /> Backup and Recovery assistance
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Grid container className="max-w-[95%] mx-auto px-4 sm:px-6 mb-8">
        <Grid item xs={12}>
          <Box>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#fff",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              We’re Open For Partnerships
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                margin: "2rem",
              }}
            >
              We are open to forming an alliance with all like-minded
              individuals, agencies and companies. Our approach towards business
              is for openness and sharing, even profits. We like to collaborate
              and build on shared vision and values to grow quickly and generate
              more profits.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem", marginBottom: "4rem" }}>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              PARTNER YOU CAN RELY ON
            </Typography>
            <Typography
              style={{
                marginTop: "2rem",
                margin: "3rem",
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",
              }}
            >
              You can count on us that we have your best interest in our minds
              and whenever you need our assistance. To cut to the chase, we want
              to mutually share profits and losses. We venture into new fields
              to mine resources and share an experience with one another.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box style={{ marginTop: "4rem", marginBottom: "4rem" }}>
            <Typography
              style={{
                color: "rgba(255,255,255,.75)",
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              WE’LL BACK YOU UP
            </Typography>
            <Typography
              style={{
                marginTop: "2rem",
                margin: "3rem",
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                textAlign: "justify",
              }}
            >
              You will always have direct access to our sales and technology
              resources. Our partnership programs provide necessary resources
              and tools to succeed. We ensure that we support you in every way
              from providing marketing collaterals, to SOP and best practices
              for development and latest technologies and services.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* //seventh container */}

      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", fontSize: "18px", backgroundColor: "#019dce", textAlign: "center", marginBottom: "2rem" }}>
        <Grid container className="max-w-[95%] mx-auto py-6">
          <Grid item sm={8} md={8}>
            <Typography style={{ fontSize: "28px", color: "#fff", fontWeight: '600' }}>Partnerships Are Great. Let's Get Work Together</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
              <Button style={{ backgroundColor: "#fff", fontSize: "15px", color: "#019dce", borderRadius: "5px", textTransform: 'none', padding: '8px 10px', fontWeight: '600' }}>
                Partner With Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainWrapper>
  );
}

const MainWrapper = styled(Box)({
  "& .typo-1": {
    color: "white",
    marginTop: "7rem",
    justifyContent: "space-around",
    fontWeight: "bold",
    fontSize: "15px",
    marginLeft: "1rem",
  },

  "& .typo-2": {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "3rem",
    fontFamily: "sans-serif",
    color: "#fff",
    textAlign: "center",
  },

  "& .typo-3": {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "18px",
    margin: "3%",
    textAlign: "justify",
    color: "rgba(255,255,255,.75)",
  },
  "& .typo-4": {
    backgroundColor: "#019dce",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "9px",
    width: "150px",
    margin: "auto",
    color: "white",
    fontWeight: "bold",
    height: "50px",
    textTransform:'none'
  },
  "& .typo-5": {
    fontWeight: "bold",
    fontSize: "45px",
    margin: "3rem",
    color: "#fff",
  },

  "& .channel": {
    fontWeight: "bold",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },

  "& .typo-6": {
    margin: "2rem",
    color: "rgba(255,255,255,.75)",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
    flexWrap: "wrap",
  },

  "& .typo-8": {
    fontWeight: "bold",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },

  "& .typo-9": {
    margin: "2rem",
    color: "rgba(255,255,255,.75)",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
  },

  "& .typo-10": {
    fontWeight: "bold",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },

  "& .box_container": {
    display: "flex",
    justifyContent: "space-around",
  },

  "& .box-1": {
    "@media (max-width:600px)": {
      display: "none",
    },
  },
});
