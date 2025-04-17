"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  OutlinedInput,
  Chip,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import axios from "axios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "@/components/Product/Footer";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [industries, setIndustries] = useState([]);
  const [price, setPrice] = useState("");
  const meetingImg = "/images/product/meeting.png";
  const video = "/images/product/video.png"
  
  const handleRemove = (type : string, value:any) => {
    if (type === "category") setCategory("");
    if (type === "price") setPrice("");
    if (type === "industry") {
      setIndustries((prev) => prev.filter((item) => item !== value));
    }
  };
  const getAllProducts = () => {
    axios
      .get("http://localhost:9000/api/product/get_products")
      .then((res) => {
        const updatedProducts = res.data.products.map((product : any) => {
          const isInCart = cartItems.some(
            (cartItem : any) => cartItem._id === product._id
          );
          return {
            ...product,
            isSelected: isInCart,
          };
        });
        setProducts(updatedProducts);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [cartItems]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensures the footer stays at the bottom
          backgroundColor: "#fff",
        }}
      >
        <Box
         sx={{
          width: "1440px",
          height: "540px",
          position: "relative", // <-- add this!
          backgroundImage: `linear-gradient(#000000C2, #000000C2), url(${meetingImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // better than "100% 100%" for scaling
          backgroundPosition: "center",
        }}
        >
          <Container
            sx={{
              width: 842,
              height: 235,
              position: "absolute",
              top: 152.5,
              left: 299,
              display: "flex",
              alignItems: "center",
              marginTop: "46px",
              gap: "30px",
              backgroundColor: "transparent", // add background if needed
            }}
          >
            <Grid spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "100%",
                    letterSpacing: 0,
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#fff",
                    mb: 2,
                  }}
                >
                  Experience the fastest way to build an AI proof of concept
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#e0e0e0",
                    mb: 3,
                    textAlign: "center",
                    fontFamily: "Roboto",
                  }}
                >
                  From feature selection & fast delivery, we simplify AI POC
                  creation for you.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  style={{backgroundColor : '#3b7be3'}}
                  sx={{
                    width: "178px",
                    height: "56px",
                    gap: "10px",
                    borderRadius: "8px",
                    paddingTop: "16px",
                    paddingRight: "26px",
                    paddingBottom: "16px",
                    paddingLeft: "26px",
                    fontWeight: "bold",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            width: "1200px",
            height: "333px",
            backgroundColor: "#fff",
            margin: "80px auto",
            padding: "32px",
            borderRadius: "12px",
          }}
        >
          <Grid container spacing={8}>
            {/* Left Text Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="caption"
                sx={{
                  color: "#1976d2",
                  fontWeight: 500,
                  marginBottom: 1,
                  display: "block",
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginBottom: 2, color: 'black'}}
              >
                We simplify the journey by giving you the tools to build a
                custom Proof of Concept without any technical barriers.
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Lorem ipsum dolor sit amet consectetur. Proin cursus amet
                ultricies nisl semper sagittis. Et vulputate proin morbi nunc
                ornare fames enim varius non. Et ac convallis habitant cras est.
                Tempus rhoncus eu risus mi. Mi et bibendum ultrices sagittis
                maecenas gravida tempus. Convallis vivamus mi bibendum proin
                gravida amet massa id. Praesent platea condimentum sollicitudin
                suspendisse vel posuere aliquam interdum leo. Et quam arcu
                volutpat sit ut sed. Sed sed maecenas morbi adipiscing quis diam
                diam nibh.
              </Typography>
            </Grid>

            {/* Right Video Column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: "300px",
                  backgroundImage: `url(${video})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            paddingBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: 0,
              textAlign: "center",
              textTransform: "capitalize",
              color: "#019DCE",
              whiteSpace: "nowrap",
              paragraphSpacing: "8px",
              verticalAlign: "middle",
            }}
          >
            Add Features To Your PoC
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              paragraphSpacing: "8px",
              textAlign: "center",
              color: "#7E7E7E",
              maxWidth: "800px",
            }}
          >
            Choose exactly what you need to bring your idea to life.
          </Typography>
        </Box>
        <Box
          sx={{
            // position: "absolute",
            width: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            padding: "6px 0",
            borderBottom: "1.5px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 44,
            }}
          >
            <Box sx={{ display: "flex", gap: "14px" }}>
              {/* Category (Single Select) */}
              <FormControl sx={{ width: 228 }}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{
                    height: 44,
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EAECF0",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Books">Books</MenuItem>
                  <MenuItem value="Furniture">Furniture</MenuItem>
                </Select>
              </FormControl>

              {/* Industry (Multi Select) */}
              <FormControl sx={{ width: 228 }}>
                <InputLabel id="industry-label">Industry</InputLabel>
                <Select
                  labelId="industry-label"
                  multiple
                  value={industries}
                  // onChange={handleIndustryChange}
                  input={<OutlinedInput label="Industry" />}
                  renderValue={(selected) => selected.join(", ")}
                  sx={{
                    height: 44,
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EAECF0",
                    },
                  }}
                >
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                </Select>
              </FormControl>

              {/* Price (Single Select) */}
              <FormControl sx={{ width: 228 }}>
                <InputLabel id="price-label">Price</InputLabel>
                <Select
                  labelId="price-label"
                  value={price}
                  label="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  sx={{
                    height: 44,
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EAECF0",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Sort section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography sx={{ color: "#72787F", fontSize: 14 }}>
                Sort by:
              </Typography>
              <Typography
                sx={{
                  color: "#26282B",
                  fontSize: 14,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Recommended
              </Typography>
              <ExpandMoreIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>

          {/* Pills below */}
          <Box
            sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: "6px" }}
          >
            {category && (
              <Chip
                label={category}
                onDelete={() => handleRemove("category","")}
                sx={{
                  height: 32,
                  borderRadius: "26px",
                  backgroundColor: "#f0f0f0",
                  color: " #019DCE",
                }}
              />
            )}
            {industries.map((industry) => (
              <Chip
                key={industry}
                label={industry}
                onDelete={() => handleRemove("industry", industry)}
                sx={{
                  height: 32,
                  borderRadius: "26px",
                  backgroundColor: "#f0f0f0",
                  color: " #019DCE",
                }}
              />
            ))}
            {price && (
              <Chip
                label={price}
                onDelete={() => handleRemove("price",'')}
                sx={{
                  height: 32,
                  borderRadius: "26px",
                  backgroundColor: "#f0f0f0",
                  color: " #019DCE",
                }}
              />
            )}
            {(category || industries.length > 0 || price) && (
              <Typography
                onClick={() => {
                  setCategory("");
                  setIndustries([]);
                  setPrice("");
                }}
                sx={{
                  color: "#7E7E7E",
                  textDecoration: "underline",
                  width: "53px",
                  height: "16px",
                  paddingLeft: "2px",
                  margin: "inherit",
                  whiteSpace: "nowrap", // Prevents text wrapping
                  display: "inline-block", // Ensures dimensions are respected
                  lineHeight: "16px", // Matches height
                  fontSize: "14px", // Standard font size
                  cursor: "pointer", // Shows it's clickable
                  "&:hover": {
                    opacity: 0.8, // Subtle hover effect
                  },
                }}
              >
                clean all
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1, // Makes sure this area takes available space
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          {products.map((data : any, index) => (
            <Card
              key={index}
              sx={{
                width: 380,
                height: 410,
                borderRadius: "8px",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image={`http://localhost:9000/${data.image}`}
                  alt={data.title}
                  sx={{
                    height: 200,        // or '200px'
                    width: 400,         // set your desired width
                    borderRadius: "4px"
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                    <MuiLink
                      component="button"
                      variant="body2"
                      // onClick={()=>handleClick(data)}
                      underline="always"
                      sx={{ marginLeft: "4px" }}
                    >
                      See more
                    </MuiLink>
                  </Typography>
                </CardContent>
              </Box>

              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  height: 43,
                  borderRadius: "8px",
                  padding: "12px 26px",
                  border: "1px solid",
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    opacity: 0.9,
                  },
                }}
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
