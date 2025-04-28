"use client";
import React, { useEffect, useRef, useState } from "react";
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
  CircularProgress,
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
import Tooltip from "@mui/material/Tooltip"; // Make sure it's imported at the top
import { useProductContext } from "@/context/product/productContext";
import { categoryOptions, industryOption } from "@/components/common";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [tooltipOpenIndex, setTooltipOpenIndex] = useState<number | null>(null);
  const [originalProducts, setOriginalProducts] = useState([]); // Store the original unfilter
  const meetingImg = "/images/product/meeting.png";
  const video = "/images/product/video.png";
  const { cart, setCart } = useProductContext();
  const isFirstRender = useRef(true); // Create a ref to track the first render
  const featuresRef = useRef<HTMLDivElement>(null); // Create a ref for the target element
  const handleRemove = (type: string, value: any) => {
    if (type === "category") {
      setCategory((prev) => prev.filter((item) => item !== value));
    }
    if (type === "price") setPrice("");
    if (type === "industry") {
      setIndustries((prev) => prev.filter((item) => item !== value));
    }
  };
  const handleAddToCart = (product: any) => {
    const updatedCartItems = [...cart, product];

    // Update cart state
    setCart(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setOriginalProducts((prev: any) =>
      prev.map((item: any) =>
        item._id === product._id ? { ...item, isSelected: true } : item
      )
    );

    // Update the products list to mark this product as selected
    setProducts((prev: any) =>
      prev.map((item: any) =>
        item._id === product._id ? { ...item, isSelected: true } : item
      )
    );
  };

  const getAllProducts = () => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`)
      .then((res) => {
        const updatedProducts = res.data.products.map((product: any) => {
          const isInCart = cart.some(
            (cartItem: any) => cartItem._id === product._id
          );
          return {
            ...product,
            isSelected: isInCart,
          };
        });
        setLoading(false);
        setOriginalProducts(updatedProducts); // Save the original products
        setProducts(updatedProducts);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error : ", err);
      });
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      const offset = -80; // 👈 Adjust this value as needed (negative = scroll higher)
      const top =
        featuresRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const filterProductsByCategory = (category: string[]) => {
    if (category.length === 0) return originalProducts; // If no category is selected, show all products
    return originalProducts.filter((product: any) =>
      category.some((cat) => product?.category === cat)
    );
  };
  useEffect(() => {
    if (isFirstRender.current) {
      getAllProducts();
      isFirstRender.current = false;
    } else {
      // Filter products by selected category when category changes
      const filteredProducts = filterProductsByCategory(category);
      setProducts(filteredProducts);
    }
  }, [category]); // This effect will now run when the category changes

  const clearFilters = () => {
    setCategory([]);
    setIndustries([]);
    setPrice("");
    setProducts(originalProducts); // Reset to original products
  };

  useEffect(() => {
    if (isFirstRender.current) {
      getAllProducts();
      isFirstRender.current = false;
    } else {
      // Filter products by selected category when category changes
      console.log(category, "category");
      const filteredProducts = filterProductsByCategory(category);
      console.log(filteredProducts, "filteredProducts");
      setProducts(filteredProducts);
    }
  }, [category]); // This effect will now run when the category changes

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensures the footer stays at the bottom
          backgroundColor: "#fff",
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            width: "100%", // Fixed width
            height: { xs: "auto", md: "540px" },
            position: "relative",
            backgroundImage: `linear-gradient(#000000C2, #000000C2), url(${meetingImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 6, md: 0 },
            margin: "0 auto",
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: { xs: "28px", sm: "36px", md: "48px" },
                    lineHeight: "120%",
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
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  From feature selection & fast delivery, we simplify AI POC
                  creation for you.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  style={{ backgroundColor: "#3b7be3" }}
                  sx={{
                    width: "178px",
                    height: "56px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                  }}
                  onClick={scrollToFeatures} // Add the onClick handler
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
                sx={{ fontWeight: 700, marginBottom: 2, color: "black" }}
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
            ref={featuresRef} // Attach the ref to the target Box
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
                  multiple
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value as string[])}
                  sx={{
                    height: 44,
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #EAECF0",
                    },
                  }}
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Industry (Multi Select) */}
              {/* <FormControl sx={{ width: 228 }}>
                <InputLabel id="industry-label">Industry</InputLabel>
                <Select
                  labelId="industry-label"
                  multiple
                  value={industries}
                  onChange={(e) => setIndustries(e.target.value as string[])}
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
                   {industryOption.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}

              {/* Price (Single Select) */}
              {/* <FormControl sx={{ width: 228 }}>
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
              </FormControl> */}
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
            {category.map((category) => (
              <Chip
                key={category}
                label={category}
                onDelete={() => handleRemove("category", category)}
                sx={{
                  height: 32,
                  borderRadius: "26px",
                  backgroundColor: "#f0f0f0",
                  color: " #019DCE",
                }}
              />
            ))}
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
                onDelete={() => handleRemove("price", "")}
                sx={{
                  height: 32,
                  borderRadius: "26px",
                  backgroundColor: "#f0f0f0",
                  color: " #019DCE",
                }}
              />
            )}
            {(category?.length || industries.length > 0) && (
              <Typography
                onClick={() => {
                  clearFilters();
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
            flexWrap: "wrap",
            width: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            paddingTop: "20px",
            paddingBottom: "50px",
            backgroundColor: "background.paper",
            justifyContent: loading ? "center" : "flex-start", // Center when loading
            alignItems: loading ? "center" : "flex-start", // Center vertically when loading
            height: loading ? "400px" : "",
          }}
        >
          {loading ? (
            <>
              <CircularProgress />
            </>
          ) : (
            products.map((data: any, index) => (
              <Card
                key={index}
                sx={{
                  width: 380,
                  height: 430,
                  borderRadius: "8px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box key={index}>
                  <CardMedia
                    component="img"
                    image={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
                    alt={data.title}
                    key={index}
                    sx={{
                      height: 200, // or '200px'
                      width: 400, // set your desired width
                      borderRadius: "4px",
                    }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {data.title}
                      </Typography>

                      <Chip
                        label={data.isFree ? "paid" : "Free"}
                        size="small"
                        sx={{
                          backgroundColor: data.isFree ? "#f44336" : "#4caf50",
                          color: "#fff",
                          fontWeight: "bold",
                          borderRadius: "12px",
                          px: 1.5,
                        }}
                      />
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="body2" color="text.secondary">
                        Category:
                      </Typography>
                      <Chip
                        label={data?.category}
                        size="small"
                        sx={{
                          backgroundColor: "#e0e0e0",
                          color: "#333",
                          fontWeight: 500,
                          borderRadius: "8px",
                          height: "24px",
                        }}
                      />
                    </Box>
                    {/* <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <Typography variant="body2" color="text.secondary">
                        Industry :
                      </Typography>
                      <Chip
                        label="IT"
                        size="small"
                        sx={{
                          backgroundColor: "#e0e0e0",
                          color: "#333",
                          fontWeight: 500,
                          borderRadius: "8px",
                          height: "24px",
                        }}
                      />
                    </Box> */}
                    <Typography variant="body2" color="text.secondary">
                      {data.description.slice(0, 80)}
                      <Tooltip
                        title={data.description}
                        open={tooltipOpenIndex === index}
                        onClose={() => setTooltipOpenIndex(null)}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="top"
                        arrow
                        componentsProps={{
                          tooltip: {
                            sx: {
                              backgroundColor: "#333", // dark background
                              color: "#fff", // white text
                              fontSize: "13px",
                              padding: "8px 12px",
                              borderRadius: "6px",
                              maxWidth: 220,
                            },
                          },
                          arrow: {
                            sx: {
                              color: "#333", // match the background of the tooltip
                            },
                          },
                        }}
                      >
                        <MuiLink
                          component="button"
                          variant="body2"
                          underline="always"
                          sx={{ marginLeft: "4px" }}
                          onClick={() =>
                            setTooltipOpenIndex((prev) =>
                              prev === index ? null : index
                            )
                          }
                        >
                          See more
                        </MuiLink>
                      </Tooltip>
                    </Typography>
                  </CardContent>
                </Box>

                <Button
                  variant="outlined"
                  disabled={data.isSelected}
                  onClick={() => handleAddToCart(data)}
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
                  {data.isSelected ? "Added" : "Add to Cart"}
                </Button>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;
