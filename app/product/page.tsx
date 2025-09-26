//-------------------------------------------old code created in material ui v5 ------------------------------------------------------
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Container,
//   Grid,
//   Box,
//   Typography,
//   Button,
//   Paper,
//   OutlinedInput,
//   Chip,
//   Card,
//   CardContent,
//   CardMedia,
//   CardActions,
//   CircularProgress,
// } from "@mui/material";
// import { Link as MuiLink } from "@mui/material";
// import axios from "axios";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Footer from "@/components/Product/Footer";
// import Tooltip from "@mui/material/Tooltip"; // Make sure it's imported at the top
// import { useProductContext } from "@/context/product/productContext";
// import { categoryOptions, industryOption } from "@/components/common";

// type Category = {
//   _id: string;
//   name: string;
// };

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState<string[]>([]);
//   const [industries, setIndustries] = useState<string[]>([]);
//   const [price, setPrice] = useState("");
//   const [loading, setLoading] = useState(true);
//    const [categoryData, setCategoryData] = useState<Category[]>([]);
//   const [tooltipOpenIndex, setTooltipOpenIndex] = useState<number | null>(null);
//   const [originalProducts, setOriginalProducts] = useState([]); // Store the original unfilter
//   const meetingImg = "/images/product/meeting.png";
//   const video = "/images/product/video.png";
//   const { cart, setCart } = useProductContext();

//   // ✅ Pagination states
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 10;

// // ✅ Go to specific page
// const goToPage = (page: number) => {
//   setCurrentPage(page);
// };

//   const isFirstRender = useRef(true); // Create a ref to track the first render
//   const featuresRef = useRef<HTMLDivElement>(null); // Create a ref for the target element
//   const handleRemove = (type: string, value: any) => {
//     if (type === "category") {
//       setCategory((prev) => prev.filter((item) => item !== value));
//     }
//     if (type === "price") setPrice("");
//     if (type === "industry") {
//       setIndustries((prev) => prev.filter((item) => item !== value));
//     }
//   };
//   const handleAddToCart = (product: any) => {
//     const updatedCartItems = [...cart, product];

//     // Update cart state
//     setCart(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

//     setOriginalProducts((prev: any) =>
//       prev.map((item: any) =>
//         item._id === product._id ? { ...item, isSelected: true } : item
//       )
//     );

//     // Update the products list to mark this product as selected
//     setProducts((prev: any) =>
//       prev.map((item: any) =>
//         item._id === product._id ? { ...item, isSelected: true } : item
//       )
//     );
//   };

//    const getCategory = async () => {
//       await axios
//         .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`)
//         .then((res) => {
//           if (res?.data) {
//             setCategoryData(res?.data?.data);
//           } else {
//             setCategoryData([]);
//           }
//         })
//         .catch((err) => console.error("Error :  ", err));
//     };

//   const getAllProducts = () => {
//     setLoading(true);
//     axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`)
//       .then((res) => {
//         const updatedProducts = res.data.products.map((product: any) => {
//           const isInCart = cart.some(
//             (cartItem: any) => cartItem._id === product._id
//           );
//           return {
//             ...product,
//             isSelected: isInCart,
//           };
//         });
//         setLoading(false);
//         setOriginalProducts(updatedProducts); // Save the original products
//         setProducts(updatedProducts);
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.log("Error : ", err);
//       });
//   };

//   const scrollToFeatures = () => {
//     if (featuresRef.current) {
//       const offset = -80; // 👈 Adjust this value as needed (negative = scroll higher)
//       const top =
//         featuresRef.current.getBoundingClientRect().top +
//         window.pageYOffset +
//         offset;

//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   };

//   const filterProductsByCategory = (category: string[]) => {
//     if (category.length === 0) return originalProducts; // If no category is selected, show all products
//     return originalProducts.filter((product: any) =>
//       category.some((cat) => product?.category === cat)
//     );
//   };
//   useEffect(() => {
//     if (isFirstRender.current) {
//       getAllProducts();
//       getCategory()
//       isFirstRender.current = false;
//     } else {
//       // Filter products by selected category when category changes
//       const filteredProducts = filterProductsByCategory(category);
//       setProducts(filteredProducts);
//     }
//   }, [category]); // This effect will now run when the category changes

//   const clearFilters = () => {
//     setCategory([]);
//     setIndustries([]);
//     setPrice("");
//     setProducts(originalProducts); // Reset to original products
//     setCurrentPage(1);
//   };

//   useEffect(() => {
//     if (isFirstRender.current) {
//       getAllProducts();
//       isFirstRender.current = false;
//     } else {
//       // Filter products by selected category when category changes
//       const filteredProducts = filterProductsByCategory(category);
//       setProducts(filteredProducts);
//       setCurrentPage(1);
//     }
//   }, [category]); // This effect will now run when the category changes

//   // ✅ Pagination calculations
// const totalPages = Math.ceil(products.length / itemsPerPage);
// const paginatedProducts = products.slice(
//   (currentPage - 1) * itemsPerPage,
//   currentPage * itemsPerPage
// );
//  const handleNextPage = () => {
//      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//    };
//    const handlePrevPage = () => {
//      if (currentPage > 1) setCurrentPage(currentPage - 1);
//    };
//     const disabledButtonStyles = {
//     "&.Mui-disabled": {
//       color: "white !important",          // force text color
//       WebkitTextFillColor: "white",       // ensures text shows in Chrome/Safari
//       border: "1px solid white",
//       backgroundColor: "transparent",
//     },
//   };


//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh", // Ensures the footer stays at the bottom
//           // backgroundColor: "#fff",
//           marginTop: 10,
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%", // Fixed width
//             height: { xs: "auto", md: "540px" },
//             position: "relative",
//             backgroundImage: `linear-gradient(#000000C2, #000000C2), url(${meetingImg})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             py: { xs: 6, md: 0 },
//             margin: "0 auto",
//           }}
//         >
//           <Container maxWidth="md">
//             <Grid container spacing={4} justifyContent="center">
//               <Grid item xs={12}>
//                 <Typography
//                   sx={{
//                     fontFamily: "Roboto",
//                     fontWeight: 700,
//                     fontSize: { xs: "28px", sm: "36px", md: "48px" },
//                     lineHeight: "120%",
//                     textAlign: "center",
//                     textTransform: "capitalize",
//                     color: "#fff",
//                     mb: 2,
//                   }}
//                 >
//                   Experience the fastest way to build an AI proof of concept
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#e0e0e0",
//                     mb: 3,
//                     textAlign: "center",
//                     fontFamily: "Roboto",
//                     fontSize: { xs: "16px", md: "18px" },
//                   }}
//                 >
//                   From feature selection & fast delivery, we simplify AI POC
//                   creation for you.
//                 </Typography>

//                 <Button
//                   variant="contained"
//                   color="primary"
//                   endIcon={<ArrowForwardIcon />}
//                   style={{ backgroundColor: "#3b7be3" }}
//                   sx={{
//                     width: "178px",
//                     height: "56px",
//                     borderRadius: "8px",
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     mx: "auto",
//                   }}
//                   onClick={scrollToFeatures} // Add the onClick handler
//                 >
//                   Get Started
//                 </Button>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         <Box
//           sx={{
//             width: "1200px",
//             height: "333px",
//             backgroundColor: "#fff",
//             margin: "80px auto",
//             padding: "32px",
//             borderRadius: "12px",
//           }}
//         >
//           <Grid container spacing={8}>
//             {/* Left Text Column */}
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   color: "#1976d2",
//                   fontWeight: 500,
//                   marginBottom: 1,
//                   display: "block",
//                 }}
//               >
//                 About Us
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{ fontWeight: 700, marginBottom: 2, color: "black" }}
//               >
//                 We simplify the journey by giving you the tools to build a
//                 custom Proof of Concept without any technical barriers.
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#555" }}>
//                 Lorem ipsum dolor sit amet consectetur. Proin cursus amet
//                 ultricies nisl semper sagittis. Et vulputate proin morbi nunc
//                 ornare fames enim varius non. Et ac convallis habitant cras est.
//                 Tempus rhoncus eu risus mi. Mi et bibendum ultrices sagittis
//                 maecenas gravida tempus. Convallis vivamus mi bibendum proin
//                 gravida amet massa id. Praesent platea condimentum sollicitudin
//                 suspendisse vel posuere aliquam interdum leo. Et quam arcu
//                 volutpat sit ut sed. Sed sed maecenas morbi adipiscing quis diam
//                 diam nibh.
//               </Typography>
//             </Grid>

//             {/* Right Video Column */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                   height: "100%",
//                   minHeight: "300px",
//                   backgroundImage: `url(${video})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                   },
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Box>

//         <Box
//           sx={{
//             paddingBottom: "50px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           {/* Heading */}
//           <Typography
//             ref={featuresRef} // Attach the ref to the target Box
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: 700,
//               fontSize: "36px",
//               lineHeight: "100%",
//               letterSpacing: 0,
//               textAlign: "center",
//               textTransform: "capitalize",
//               color: "#019DCE",
//               whiteSpace: "nowrap",
//               paragraphSpacing: "8px",
//               verticalAlign: "middle",
//             }}
//           >
//             Add Features To Your PoC
//           </Typography>

//           {/* Subheading */}
//           <Typography
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: 400,
//               fontSize: "20px",
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               paragraphSpacing: "8px",
//               textAlign: "center",
//               color: "#7E7E7E",
//               maxWidth: "800px",
//             }}
//           >
//             Choose exactly what you need to bring your idea to life.
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             // position: "absolute",
//             width: 1200,
//             margin: "0 auto",
//             display: "flex",
//             flexDirection: "column",
//             gap: "6px",
//             padding: "6px 0",
//             borderBottom: "1.5px solid",
//             borderColor: "divider",
//             backgroundColor: "background.paper",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               height: 44,
//             }}
//           >
//             <Box sx={{ display: "flex", gap: "14px" }}>
//               {/* Category (Single Select) */}

//               <FormControl sx={{ width: 228 }}>
//                 <InputLabel id="category-label">Category</InputLabel>
//                 <Select
//                   labelId="category-label"
//                   multiple
//                   value={category}
//                   label="Category"
//                   onChange={(e) => setCategory(e.target.value as string[])}
//                   sx={{
//                     height: 44,
//                     borderRadius: "4px",
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       border: "1px solid #EAECF0",
//                     },
//                   }}
//                 >
//                    {categoryData.map((option) => (
//               <MenuItem key={option._id} value={option._id}>
//                 {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
//               </MenuItem>
//             ))}
//                 </Select>
//               </FormControl>

//               {/* Industry (Multi Select) */}
//               {/* <FormControl sx={{ width: 228 }}>
//                 <InputLabel id="industry-label">Industry</InputLabel>
//                 <Select
//                   labelId="industry-label"
//                   multiple
//                   value={industries}
//                   onChange={(e) => setIndustries(e.target.value as string[])}
//                   input={<OutlinedInput label="Industry" />}
//                   renderValue={(selected) => selected.join(", ")}
//                   sx={{
//                     height: 44,
//                     borderRadius: "4px",
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       border: "1px solid #EAECF0",
//                     },
//                   }}
//                 >
//                    {industryOption.map((option) => (
//                     <MenuItem key={option} value={option}>
//                       {option.charAt(0).toUpperCase() + option.slice(1)}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl> */}

//               {/* Price (Single Select) */}
//               {/* <FormControl sx={{ width: 228 }}>
//                 <InputLabel id="price-label">Price</InputLabel>
//                 <Select
//                   labelId="price-label"
//                   value={price}
//                   label="Price"
//                   onChange={(e) => setPrice(e.target.value)}
//                   sx={{
//                     height: 44,
//                     borderRadius: "4px",
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       border: "1px solid #EAECF0",
//                     },
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value="Low">Low</MenuItem>
//                   <MenuItem value="Medium">Medium</MenuItem>
//                   <MenuItem value="High">High</MenuItem>
//                 </Select>
//               </FormControl> */}
//             </Box>

//             {/* Sort section */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: "8px"}}>
//               <Typography sx={{ color: "#72787F", fontSize: 14 }}>
//                 Sort by:
//               </Typography>
//               <Typography
//                 sx={{
//                   color: "#26282B",
//                   fontSize: 14,
//                   cursor: "pointer",
//                   "&:hover": { textDecoration: "underline" },
//                 }}
//               >
//                 Recommended
//               </Typography>
//               <ExpandMoreIcon sx={{ fontSize: 18 }} />
//             </Box>
//           </Box>

//           {/* Pills below */}
//           <Box
//             sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: "6px" }}
//           >


//             {category.map((category) => (
//               <Chip
//                 key={category}
//                 label={
//                   categoryData.find((cat) => cat._id === category)?.name
//                 }
//                 // label={category}
//                 onDelete={() => handleRemove("category", category)}
//                 sx={{
//                   height: 32,
//                   borderRadius: "26px",
//                   backgroundColor: "#f0f0f0",
//                   color: " #019DCE",
//                 }}
//               />
//             ))}
//             {industries.map((industry) => (
//               <Chip
//                 key={industry}
//                 label={industry}
//                 onDelete={() => handleRemove("industry", industry)}
//                 sx={{
//                   height: 32,
//                   borderRadius: "26px",
//                   backgroundColor: "#f0f0f0",
//                   color: " #019DCE",
//                 }}
//               />
//             ))}
//             {price && (
//               <Chip
//                 label={price}
//                 onDelete={() => handleRemove("price", "")}
//                 sx={{
//                   height: 32,
//                   borderRadius: "26px",
//                   backgroundColor: "#f0f0f0",
//                   color: " #019DCE",
//                 }}
//               />
//             )}
//             {(category?.length || industries.length > 0) && (
//               <Typography
//                 onClick={() => {
//                   clearFilters();
//                 }}
//                 sx={{
//                   color: "#7E7E7E",
//                   textDecoration: "underline",
//                   width: "53px",
//                   height: "16px",
//                   paddingLeft: "2px",
//                   margin: "inherit",
//                   whiteSpace: "nowrap", // Prevents text wrapping
//                   display: "inline-block", // Ensures dimensions are respected
//                   lineHeight: "16px", // Matches height
//                   fontSize: "14px", // Standard font size
//                   cursor: "pointer", // Shows it's clickable
//                   "&:hover": {
//                     opacity: 0.8, // Subtle hover effect
//                   },
//                 }}
//               >
//                 clean all
//               </Typography>
//             )}
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             flexWrap: "wrap",
//             width: 1200,
//             margin: "0 auto",
//             display: "flex",
//             flexDirection: "row",
//             gap: "30px",
//             paddingTop: "20px",
//             paddingBottom: "50px",
//             backgroundColor: "background.paper",
//             justifyContent: loading ? "center" : "flex-start", // Center when loading
//             alignItems: loading ? "center" : "flex-start", // Center vertically when loading
//             height: loading ? "400px" : "",
//           }}
//         >
//           {loading ? (
//             <>
//               <CircularProgress />
//             </>
//           ) : (
//             paginatedProducts.map((data: any, index) => (
//               <Card
//                 key={index}
//                 sx={{
//                   width: 380,
//                   height: 430,
//                   borderRadius: "8px",
//                   padding: "14px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Box key={index}>
//                   <CardMedia
//                     component="img"
//                     image={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
//                     alt={data.title}
//                     key={index}
//                     sx={{
//                       height: 200, // or '200px'
//                       width: 400, // set your desired width
//                       borderRadius: "4px",
//                     }}
//                   />
//                   <CardContent>
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="space-between"
//                     >
//                       <Typography
//                         gutterBottom
//                         variant="h6"
//                         component="div"
//                         sx={{ fontWeight: "bold" }}
//                       >
//                         {data.title}
//                       </Typography>

//                       <Chip
//                         label={data.isFree ? "paid" : "Free"}
//                         size="small"
//                         sx={{
//                           backgroundColor: data.isFree ? "#f44336" : "#4caf50",
//                           color: "#fff",
//                           fontWeight: "bold",
//                           borderRadius: "12px",
//                           px: 1.5,
//                         }}
//                       />
//                     </Box>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <Typography variant="body2" color="text.secondary">
//                         Category:
//                       </Typography>
//                       <Chip
//                         label={categoryData.find((cat) => cat._id === data?.category)?.name}
//                         size="small"
//                         sx={{
//                           backgroundColor: "#e0e0e0",
//                           color: "#333",
//                           fontWeight: 500,
//                           borderRadius: "8px",
//                           height: "24px",
//                         }}
//                       />
//                     </Box>
//                     {/* <Box display="flex" alignItems="center" gap={1} mt={1}>
//                       <Typography variant="body2" color="text.secondary">
//                         Industry :
//                       </Typography>
//                       <Chip
//                         label="IT"
//                         size="small"
//                         sx={{
//                           backgroundColor: "#e0e0e0",
//                           color: "#333",
//                           fontWeight: 500,
//                           borderRadius: "8px",
//                           height: "24px",
//                         }}
//                       />
//                     </Box> */}
//                     <Typography variant="body2" color="text.secondary">
//                       {data.description.slice(0, 80)}
//                       <Tooltip
//                         title={data.description}
//                         open={tooltipOpenIndex === index}
//                         onClose={() => setTooltipOpenIndex(null)}
//                         disableFocusListener
//                         disableHoverListener
//                         disableTouchListener
//                         placement="top"
//                         arrow
//                         componentsProps={{
//                           tooltip: {
//                             sx: {
//                               backgroundColor: "#333", // dark background
//                               color: "#fff", // white text
//                               fontSize: "13px",
//                               padding: "8px 12px",
//                               borderRadius: "6px",
//                               maxWidth: 220,
//                             },
//                           },
//                           arrow: {
//                             sx: {
//                               color: "#333", // match the background of the tooltip
//                             },
//                           },
//                         }}
//                       >
//                         <MuiLink
//                           component="button"
//                           variant="body2"
//                           underline="always"
//                           sx={{ marginLeft: "4px" }}
//                           onClick={() =>
//                             setTooltipOpenIndex((prev) =>
//                               prev === index ? null : index
//                             )
//                           }
//                         >
//                           See more
//                         </MuiLink>
//                       </Tooltip>
//                     </Typography>
//                   </CardContent>
//                 </Box>

//                 <Button
//                   variant="outlined"
//                   disabled={data.isSelected}
//                   onClick={() => handleAddToCart(data)}
//                   sx={{
//                     width: "100%",
//                     height: 43,
//                     borderRadius: "8px",
//                     padding: "12px 26px",
//                     border: "1px solid",
//                     borderColor: "primary.main",
//                     color: "primary.main",
//                     fontWeight: 600,
//                     textTransform: "none",
//                     "&:hover": {
//                       backgroundColor: "primary.light",
//                       opacity: 0.9,
//                     },
//                   }}
//                 >
//                   {data.isSelected ? "Added" : "Add to Cart"}
//                 </Button>
//               </Card>
//             ))


//           )}
//         </Box>
//          {/* Pagination */}
//         {/* {!loading && products.length > itemsPerPage && (
//           <Box sx={{ display: "flex", justifyContent: "center", gap: 1, marginBottom: 4 , marginTop:'10px' }}>
//             <Button variant="contained"
//              disabled={currentPage === 1} onClick={handlePrevPage}>
//               Previous
//             </Button>


//             {Array.from({ length: totalPages }, (_, i) => (
//               <Button
//                 key={i + 1}
//                 variant={currentPage === i + 1 ? "contained" : "outlined"}
//                 color={currentPage === i + 1 ? "primary" : "inherit"}
//                 onClick={() => goToPage(i + 1)}
//               >
//                 {i + 1}
//               </Button>
//             ))}

//             <Button variant="contained" disabled={currentPage === totalPages} onClick={handleNextPage}>
//               Next
//             </Button>
//           </Box>
//         )} */}


//         {!loading && products.length > itemsPerPage && (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 1,
//             marginBottom: 4,
//             marginTop: "10px",
//           }}
//         >
//           {/* Previous button */}
//           <Button
//             variant="contained"
//             disabled={currentPage === 1}
//             onClick={handlePrevPage}
//             sx={disabledButtonStyles}
//           >
//             Previous
//           </Button>

//           {/* Direct page buttons */}
//           {Array.from({ length: totalPages }, (_, i) => (
//             <Button
//               key={i + 1}
//               variant={currentPage === i + 1 ? "contained" : "outlined"}
//               color={currentPage === i + 1 ? "primary" : "inherit"}
//               onClick={() => goToPage(i + 1)}
//               sx={disabledButtonStyles}
//             >
//               {i + 1}
//             </Button>
//           ))}

//           {/* Next button */}
//           <Button
//             variant="contained"
//             disabled={currentPage === totalPages}
//             onClick={handleNextPage}
//             sx={disabledButtonStyles}
//           >
//             Next
//           </Button>
//         </Box>
//       )}





//       </Box>
//     </>
//   );
// };

// export default Products;

//---------------------------------new code created in material ui 4---------------------------------------------

//---------------------------------- only for reference but not responsive---------------------------------------------
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Container,
//   Grid,
//   Box,
//   Typography,
//   Button,
//   Chip,
//   Card,
//   CardContent,
//   CardMedia,
//   CircularProgress,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   Link,
//   Tooltip,
//   makeStyles,
// } from "@material-ui/core";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import axios from "axios";
// import { useProductContext } from "@/context/product/productContext";
// import { useRouter } from "next/navigation";


// type Category = {
//   _id: string;
//   name: string;
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#121212",
//     minHeight: "100vh",
//     marginTop: 80,
//   },
//   hero: {
//     width: "100%",
//     height: 540,
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     [theme.breakpoints.down("md")]: {
//       height: "auto",
//       padding: theme.spacing(6, 0),
//     },
//   },
//   heroTitle: {
//     fontFamily: "Roboto",
//     fontWeight: 700,
//     fontSize: 48,
//     lineHeight: "120%",
//     color: "#fff",
//     marginBottom: theme.spacing(2),
//     [theme.breakpoints.down("md")]: {
//       fontSize: 36,
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 28,
//     },
//   },
//   heroSubtitle: {
//     color: "#e0e0e0",
//     marginBottom: theme.spacing(3),
//     fontFamily: "Roboto",
//     fontSize: 18,
//     [theme.breakpoints.down("md")]: {
//       fontSize: 16,
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 14,
//     },
//   },
//   about: {
//     backgroundColor: "#1e1e1e",
//     margin: theme.spacing(10, "auto"),
//     padding: theme.spacing(4),
//     borderRadius: 12,
//     [theme.breakpoints.down("md")]: {
//       width: "90%",
//       margin: theme.spacing(5, "auto"),
//     },
//   },
//   featuresTitle: {
//     fontWeight: 700,
//     fontSize: 36,
//     textAlign: "center",
//     color: "#019DCE",
//     // marginBottom: theme.spacing(1),
//     [theme.breakpoints.down("md")]: {
//       fontSize: 28,
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 24,
//       whiteSpace: "normal",
//     },
//   },
//   featuresSubtitle: {
//     fontWeight: 400,
//     fontSize: 20,
//     textAlign: "center",
//     color: "#b0b0b0",
//     maxWidth: 800,
//     margin: "0 auto",
//     [theme.breakpoints.down("md")]: {
//       fontSize: 18,
//     },
//     [theme.breakpoints.down("sm")]: {
//       fontSize: 14,
//       padding: theme.spacing(0, 2),
//     },
//   },
//   filters: {
//     // backgroundColor: "#1e1e1e",
//     borderBottom: "1.5px solid #333",
//     padding: theme.spacing(1),
//     margin: "0 auto",
//     marginTop: theme.spacing(2),
//     width: "100%",
//     maxWidth: 1200,
//     [theme.breakpoints.down("md")]: {
//       width: "90%",
//     },
//   },
//   productsContainer: {
//     width: "100%",
//     maxWidth: 1200,
//     margin: "0 auto",
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 30,
//     paddingTop: 20,
//     paddingBottom: 50,
//     justifyContent: "center",
//   },
//   productCard: {
//     width: 380,
//     height: 430,
//     borderRadius: 8,
//     padding: 14,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     backgroundColor: "#1e1e1e",
//     [theme.breakpoints.down("sm")]: {
//       width: "100%",
//       maxWidth: 380,
//     },
//   },
//   pagination: {
//     display: "flex",
//     justifyContent: "center",
//     gap: 8,
//     marginBottom: 32,
//     flexWrap: "wrap",
//   },
// }));

// const Products = () => {
//   const classes = useStyles();
//   const [products, setProducts] = useState<any[]>([]);
//   const [category, setCategory] = useState<string[]>([]);
//   const [categoryData, setCategoryData] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [originalProducts, setOriginalProducts] = useState<any[]>([]);

//   const router = useRouter();


//   const itemsPerPage = 10;
//   const { cart, setCart } = useProductContext();
//   const featuresRef = useRef<HTMLDivElement>(null);

//   const meetingImg = "/images/product/meeting.png";
//   const video = "/images/product/video.png";

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const paginatedProducts = products.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );


//   // useEffect(() => {
//   //   axios
//   //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`)
//   //     .then((res) => setCategoryData(res.data.data || []));
//   //   axios
//   //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`)
//   //     .then((res) => {
//   //       setProducts(res.data.products || []);
//   //       setLoading(false);
//   //     });
//   // }, []);



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch categories
//   //       const categoryRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`);
//   //       setCategoryData(categoryRes.data.data || []);

//   //       // Fetch products
//   //       const productRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`);
//   //       const products = productRes.data.products || [];

//   //       setProducts(products);
//   //       setOriginalProducts(products); // Save original for filters
//   //     } catch (err) {
//   //       console.error("Error fetching data: ", err);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Fetch categories
//       const categoryRes = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`
//       );
//       setCategoryData(categoryRes.data.data || []);

//       // Fetch products
//       const productRes = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`
//       );
//       let fetchedProducts = productRes.data.products || [];

//       // ✅ LocalStorage se cart nikal lo
//       const savedCart =
//         JSON.parse(localStorage.getItem("cartItems") || "[]") || [];

//       // ✅ Cart me jo products hain unko isSelected = true mark karo
//       fetchedProducts = fetchedProducts.map((p: any) => ({
//         ...p,
//         isSelected: savedCart.some((c: any) => c._id === p._id),
//       }));

//       setProducts(fetchedProducts);
//       setOriginalProducts(fetchedProducts); // Save original for filters
//     } catch (err) {
//       console.error("Error fetching data: ", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);

//   const scrollToFeatures = () => {
//     if (featuresRef.current) {
//       featuresRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const handleAddToCart = (product: any) => {
//   const updatedCartItems = [...cart, product];
//   setCart(updatedCartItems);
//   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

//   // Update products state to mark as added
//   setProducts((prev) =>
//     prev.map((item) =>
//       item._id === product._id ? { ...item, isSelected: true } : item
//     )
//   );

//   setOriginalProducts((prev) =>
//     prev.map((item) =>
//       item._id === product._id ? { ...item, isSelected: true } : item
//     )
//   );

//   // router.push("/poc-booking"); // Remove this to keep old behavior
// };

//   // const handleAddToCart = (product: any) => {
//   //   const updatedCartItems = [...cart, product];

//   //   // Update cart context
//   //   setCart(updatedCartItems);
//   //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

//   //   // Mark product as selected in products state
//   //   setProducts((prev) =>
//   //     prev.map((item) =>
//   //       item._id === product._id ? { ...item, isSelected: true } : item
//   //     )
//   //   );

//   //   // Navigate to booking page
//   //   router.push("/poc-booking");
//   // };
//   const filterProductsByCategory = (selectedCategories: string[]) => {
//     if (selectedCategories.length === 0) return originalProducts; // show all if none selected
//     return originalProducts.filter((product: any) =>
//       selectedCategories.includes(product.category)
//     );
//   };

//   const handleRemove = (type: string, value: any) => {
//     if (type === "category") {
//       const updatedCategory = category.filter((item) => item !== value); // Use updated array
//       setCategory(updatedCategory);

//       // Update products list based on the updated categories
//       const filteredProducts = filterProductsByCategory(updatedCategory);
//       setProducts(filteredProducts);
//     }
//   };
//   const clearFilters = () => {
//     setCategory([]);
//     setProducts(originalProducts); // reset to all products
//     setCurrentPage(1);
//   };

//   return (
//     <Box className={classes.root}>
//       {/* Hero Section */}
//       <Box
//         className={classes.hero}
//       // style={{
//       //   backgroundImage: `linear-gradient(rgba(0,0,0,0.76), rgba(0,0,0,0.76)), url(${meetingImg})`,
//       // }}
//       >
//         <Container maxWidth="md">
//           <Typography className={classes.heroTitle} style={{ fontFamily: "var(--font-dmsans)" }}>
//             Experience The Fastest Way To Build  <br /> An AI Proof Of Concept
//           </Typography>
//           <Typography className={classes.heroSubtitle} style={{ fontFamily: "var(--font-dmsans)" }}>
//             From feature selection & fast delivery, we simplify AI POC creation
//             for you.
//           </Typography>
//           <Button
//             variant="contained"
//             endIcon={<ArrowForwardIcon />}
//             style={{
//               backgroundColor: "#3b7be3",
//               borderRadius: 8,
//               fontWeight: "bold",
//               textTransform: "none",
//               color: "#fff",
//               padding: "12px 24px",
//               fontFamily: "var(--font-dmsans)",
//             }}
//             onClick={scrollToFeatures}
//           >
//             Get Started
//           </Button>
//         </Container>
//       </Box>

//       {/* About Section */}
//       <Container className={classes.about} maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Typography style={{ color: "#019DCE", fontFamily: "var(--font-dmsans)", marginBottom: 8 }}>
//               About Us
//             </Typography>
//             <Typography
//               variant="h5"
//               style={{ color: "#fff", marginBottom: 16, fontWeight: 700, fontFamily: "var(--font-dmsans)" }}
//             >
//               We simplify the journey by giving you the tools to build a custom
//               Proof of Concept without any technical barriers.
//             </Typography>
//             <Typography style={{ color: "#b0b0b0", fontFamily: "var(--font-dmsans)" }}>
//               Lorem ipsum dolor sit amet consectetur. Proin cursus amet ultricies
//               nisl semper sagittis...
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box
//               style={{
//                 height: "100%",
//                 minHeight: 300,
//                 borderRadius: 8,
//                 objectFit: 'cover',
//                 backgroundImage: `url(${video})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Features */}
//       <Box textAlign="center" mb={4}>
//         <Typography ref={featuresRef} className={classes.featuresTitle} style={{ fontFamily: "var(--font-dmsans)", }}>
//           Add Features To Your PoC
//         </Typography>
//         <Typography className={classes.featuresSubtitle} style={{ fontFamily: "var(--font-dmsans)", }}>
//           Choose exactly what you need to bring your idea to life.
//         </Typography>
//       </Box>

//       {/* Filters */}
//       {/* <Box className={classes.filters}>
//         <Grid container alignItems="center" justify="space-between">
//           <Grid item xs={12} sm={6} md={4}>
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel style={{ color: "#b0b0b0", fontFamily: "var(--font-inter)", }}>Category</InputLabel>
//               <Select
//                 multiple
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value as string[])}
//                 style={{
//                   backgroundColor: "#1e1e1e",
//                   color: "#fff",
//                   fontFamily: "var(--font-inter)",
//                 }}
//               >
//                 {categoryData.map((option) => (
//                   <MenuItem key={option._id} value={option._id}>
//                     {option.name}
//                   </MenuItem>
//                 ))}
//               </Select>


//               <Box style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
//                 {category.map((catId) => (
//                   <Chip
//                     key={catId}
//                     label={categoryData.find((c) => c._id === catId)?.name || catId}
//                     onDelete={() => handleRemove("category", catId)}
//                     style={{
//                       height: 32,
//                       borderRadius: 26,
//                       backgroundColor: "#f0f0f0",
//                       color: "#019DCE",
//                     }}
//                   />
//                 ))}

//                 {category.length > 0 && (
//                   <Typography
//                     onClick={() => {
//                       setCategory([]);
//                       setProducts(originalProducts);
//                       setCurrentPage(1);
//                     }}
//                     style={{
//                       color: "#7E7E7E",
//                       textDecoration: "underline",
//                       cursor: "pointer",
//                       height: 32,
//                       display: "flex",
//                       alignItems: "center",
//                       marginLeft: 8,
//                       fontSize: 14,
//                     }}
//                   >
//                     Clear All
//                   </Typography>
//                 )}
//               </Box>


//             </FormControl>
//           </Grid>
//         </Grid>
//       </Box> */}
//       <Box className={classes.filters}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item xs={12} sm={6} md={4}>
//             <FormControl variant="outlined" fullWidth>
//               <InputLabel
//                 style={{
//                   color: "#b0b0b0",
//                   fontFamily: "var(--font-inter)",
//                 }}
//               >
//                 Category
//               </InputLabel>
//               <Select
//                 multiple
//                 value={category}
//                 onChange={(e) => {
//                   const value = e.target.value as string[];
//                   setCategory(value);
//                   // Update products based on selected categories
//                   const filtered = filterProductsByCategory(value);
//                   setProducts(filtered);
//                   setCurrentPage(1);
//                 }}
//                 style={{
//                   backgroundColor: "#1e1e1e",
//                   color: "#fff",
//                   fontFamily: "var(--font-inter)",
//                 }}
//               >
//                 {categoryData.map((option) => (
//                   <MenuItem key={option._id} value={option._id}>
//                     {option.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Pills + Clear All */}
//             <Box
//               style={{
//                 display: "flex",
//                 gap: "8px",
//                 flexWrap: "wrap",
//                 marginTop: "8px",
//               }}
//             >
//               {category.map((catId) => (
//                 <Chip
//                   key={catId}
//                   label={categoryData.find((c) => c._id === catId)?.name || catId}
//                   onDelete={() => handleRemove("category", catId)}
//                   style={{
//                     height: 32,
//                     borderRadius: 26,
//                     backgroundColor: "#f0f0f0",
//                     color: "#019DCE",
//                   }}
//                 />
//               ))}

//               {category.length > 0 && (
//                 <Typography
//                   onClick={() => clearFilters()}
//                   style={{
//                     color: "#7E7E7E",
//                     textDecoration: "underline",
//                     cursor: "pointer",
//                     height: 32,
//                     display: "flex",
//                     alignItems: "center",
//                     marginLeft: 8,
//                     fontSize: 14,
//                   }}
//                 >
//                   Clear All
//                 </Typography>
//               )}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>


//       {/* Products Grid */}
//       {/* <Box className={classes.productsContainer}>
//           {loading ? (
//             <CircularProgress style={{ color: "#019DCE" }} />
//           ) : (
//             paginatedProducts.map((data, i) => (
//               <Card key={i} className={classes.productCard}>
//                 <CardMedia
//                   component="img"
//                   image={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
//                   alt={data.title}
//                   style={{ height: 200, borderRadius: 4 }}
//                 />
//                 <CardContent>
//                   <Typography style={{ color: "#fff", fontWeight: 600 }}>
//                     {data.title}
//                   </Typography>

//                   <Typography style={{ color: "#b0b0b0", fontSize: 14 }}>
//                     {data.description.slice(0, 80)}...
//                   </Typography>
//                 </CardContent>
//                 <Button
//                   variant="outlined"
//                   style={{
//                     borderColor: "#019DCE",
//                     color: "#019DCE",
//                     textTransform: "none",

//                   }}
//                 >
//                   Add to Cart
//                 </Button>
//               </Card>
//             ))
//           )}
//         </Box> */}
//       <Box className={classes.productsContainer}>
//         {loading ? (
//           <CircularProgress style={{ color: "#019DCE" }} />
//         ) : (
//           paginatedProducts.map((data, i) => (
//             <Card key={i} className={classes.productCard}>
//               <CardMedia
//                 component="img"
//                 image={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
//                 alt={data.title}
//                 style={{ height: 200, borderRadius: 4 }}
//               />
//               <CardContent>
//                 <Box display="flex" alignItems="center" justifyContent="space-between">
//                   <Typography style={{ color: "#fff", fontWeight: 600 }}>
//                     {data.title}
//                   </Typography>

//                   {/* Price Type Chip */}
//                   <Chip
//                     label={data.priceType === "paid" ? "Paid" : "Free"}
//                     size="small"
//                     style={{
//                       backgroundColor: data.priceType === "paid" ? "#f44336" : "#4caf50",
//                       color: "#fff",
//                       fontWeight: "bold",
//                       borderRadius: 12,
//                       padding: "0 8px",
//                     }}
//                   />
//                 </Box>

//                 {/* Category Chip */}
//                 <Box display="flex" alignItems="center" marginTop={1}>
//                   <Typography style={{ color: "#b0b0b0", fontSize: 14, marginRight: 4 }}>
//                     Category:
//                   </Typography>
//                   <Chip
//                     label={categoryData.find((cat) => cat._id === data?.category)?.name || "N/A"}
//                     size="small"
//                     style={{
//                       backgroundColor: "#e0e0e0",
//                       color: "#333",
//                       fontWeight: 500,
//                       borderRadius: 8,
//                       height: 24,
//                     }}
//                   />
//                 </Box>

//                 <Typography style={{ color: "#b0b0b0", fontSize: 14, marginTop: 8 }}>
//                   {data.description.slice(0, 80)}...
//                 </Typography>
//               </CardContent>

//               <Button
//                 variant="outlined"
//                 disabled={data.isSelected}
//                 onClick={() => handleAddToCart(data)}
//                 style={{
//                   borderColor: "#019DCE",
//                   color: "#019DCE",
//                   textTransform: "none",
//                   margin: "0 16px 16px 16px",
//                 }}
//               >
//                 {data.isSelected ? "Added" : "Add to Cart"}
//               </Button>
//             </Card>
//           ))
//         )}
//       </Box>

//       {/* Pagination */}
//       {!loading && products.length > itemsPerPage && (
//         <Box className={classes.pagination}>
//           {/* Previous Button */}
//           <Button
//             variant="outlined"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             style={{
//               border: "1px solid #019DCE",
//               color: currentPage === 1 ? "#777" : "#019DCE",
//             }}
//           >
//             Previous
//           </Button>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, i) => (
//             <Button
//               key={i + 1}
//               variant={currentPage === i + 1 ? "contained" : "outlined"}
//               onClick={() => setCurrentPage(i + 1)}
//               style={{
//                 backgroundColor: currentPage === i + 1 ? "#019DCE" : "transparent",
//                 color: currentPage === i + 1 ? "#fff" : "#019DCE",
//                 border: "1px solid #019DCE",
//               }}
//             >
//               {i + 1}
//             </Button>
//           ))}

//           {/* Next Button */}
//           <Button
//             variant="outlined"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             style={{
//               border: "1px solid #019DCE",
//               color: currentPage === totalPages ? "#777" : "#019DCE",
//             }}
//           >
//             Next
//           </Button>
//         </Box>
//       )}

//     </Box>
//   );
// };

// export default Products;

// ---------------------------new final code --------------------------------------

//-----------------------------tailwind css------------------------------------------

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useProductContext } from "@/context/product/productContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// Types
interface Category {
  _id: string;
  name: string;
}

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [originalProducts, setOriginalProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFirstAddPopup, setShowFirstAddPopup] = useState(false);
  const [showTooltipIndex, setShowTooltipIndex] = useState<number | null>(null);
  //for pagination
  const [visibleCount, setVisibleCount] = useState(10);

  const { cart, setCart } = useProductContext();
  const router = useRouter();
  const featuresRef = useRef<HTMLDivElement>(null);

  const getCategory = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`)
      .then((res) => {
        if (res?.data) {
          setCategoryData(res?.data?.data);
        } else {
          setCategoryData([]);
        }
      })
      .catch((err) => console.error("Error :  ", err));
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Categories
        const catRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`
        );
        setCategoryData(catRes.data.data || []);

        // Products
        const prodRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`
        );
        let fetched = prodRes.data.products || [];

        fetched = fetched.map((p: any) => ({
          ...p,
          isSelected: cart.some((c: any) => c._id === p._id),
        }));

        setProducts(fetched);
        setOriginalProducts(fetched);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (product: any) => {
    const updated = [...cart, product];
    setCart(updated);

    setProducts((prev) =>
      prev.map((item) =>
        item._id === product._id ? { ...item, isSelected: true } : item
      )
    );
    setOriginalProducts((prev) =>
      prev.map((item) =>
        item._id === product._id ? { ...item, isSelected: true } : item
      )
    );

    if (cart.length === 0) {
      setShowFirstAddPopup(true);
      setTimeout(() => setShowFirstAddPopup(false), 5000);
    }
  };

  const filterProductsByCategory = (selected: string[]) => {
    if (selected.length === 0) return originalProducts;
    return originalProducts.filter((p: any) => selected.includes(p.category));
  };

  const handleRemove = (catId: string) => {
    const updated = category.filter((c) => c !== catId);
    setCategory(updated);
    setProducts(filterProductsByCategory(updated));
  };

  const clearFilters = () => {
    setCategory([]);
    setProducts(originalProducts);
  };

  return (
    <div className="bg-[#121212] min-h-screen mt-20 font-[var(--font-dmsans)]">
      {/* Hero */}
      <section className="w-full h-[540px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Experience The Fastest Way To Build <br /> An AI Proof Of Concept
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          From feature selection & fast delivery, we simplify AI POC creation for you.
        </p>
        <button
          className="bg-[#3b7be3] hover:bg-[#3268c2] text-white rounded-lg px-6 py-3 font-bold"
          onClick={scrollToFeatures}
        >
          Get Started
          <ArrowForwardIcon className="w-3 h-3" />
        </button>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto bg-[#1e1e1e] rounded-xl p-6 md:p-10 my-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-[#019DCE] mb-2">About Us</h3>
            <h2 className="text-white text-2xl font-bold mb-4">
              We simplify the journey by giving you the tools to build a custom Proof of Concept without any technical barriers.
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Proin cursus amet ultricies nisl semper sagittis...
            </p>
          </div>
          <div className="h-64 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url(/images/product/video.png)" }}></div>
        </div>
      </section>

      {/* Features */}
      <div ref={featuresRef} className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#019DCE] mb-2">Add Features To Your PoC</h2>
        <p className="text-gray-400 text-lg">Choose exactly what you need to bring your idea to life.</p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto border-b border-gray-700 pb-4 mb-6 px-4">
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (!value) return;
            const newSelection = category.includes(value)
              ? category.filter((c) => c !== value)
              : [...category, value];
            setCategory(newSelection);
            setProducts(filterProductsByCategory(newSelection));
          }}
          className="w-full md:w-1/3 bg-[#1e1e1e] text-white p-2 rounded"
        >
          <option value="">Select Category</option>
          {categoryData.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {category.map((catId) => (
            <span
              key={catId}
              className="flex items-center bg-gray-200 text-[#019DCE] px-3 py-1 rounded-full text-sm cursor-pointer"
              onClick={() => handleRemove(catId)}
            >
              {categoryData.find((c) => c._id === catId)?.name || catId} ×
            </span>
          ))}
          {category.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-400 underline"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
        {loading ? (
          <div className="col-span-full flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#019DCE]"></div>
          </div>
        ) : (
          visibleProducts.map((data, index) => (
            <div key={data._id} className="bg-[#1e1e1e] rounded-xl p-4 flex flex-col justify-between">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
                alt={data.title}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{data.title}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${data.priceType === "paid"
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                    }`}>
                    {data.priceType === "paid" ? "Paid" : "Free"}
                  </span>
                </div>
                <div className="flex items-center mb-2 text-sm">
                  <span className="text-gray-400 mr-1">Category :</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                    {categoryData.find((c) => c._id === data.category)?.name || "N/A"}
                  </span>
                </div>
                <p className="text-gray-400 text-sm flex-1">
                  {data.description.slice(0, 80)}
                  {data.description.length > 80 && (
                    <button
                      onClick={() =>
                        setShowTooltipIndex(showTooltipIndex === index ? null : index)
                      }
                      className="ml-1 text-blue-400 underline text-xs"
                    >
                      See more
                    </button>
                  )}
                </p>

                {showTooltipIndex === index && (
                  <div className="absolute bg-white text-black text-xs p-2 rounded shadow-lg max-w-[220px] z-10">
                    {data.description}
                  </div>
                )}
              </div>

              <button
                disabled={data.isSelected}
                onClick={() => handleAddToCart(data)}
                className={`mt-4 px-4 py-2 rounded border font-semibold ${data.isSelected
                  ? "border-gray-500 text-gray-500 cursor-not-allowed"
                  : "border-[#019DCE] text-[#019DCE] hover:bg-[#019DCE] hover:text-white"
                  }`}
              >
                {data.isSelected ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))
        )}
      </div>

      {!loading && visibleCount < products.length && (
        <div className="flex justify-center mb-12">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#019DCE] text-white rounded hover:bg-[#017ba8] font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    


      {showFirstAddPopup && (
        <div className="fixed top-20 right-5 bg-[#22c55e] text-white p-4 rounded shadow-lg z-50 animate-fade-in flex items-center justify-between min-w-[280px] border border-gray-700">
          <span className="mr-4 text-sm md:text-base">
            Product added! Check your cart from the header.
          </span>

          <button
            onClick={() => setShowFirstAddPopup(false)}
            className="text-white text-xl md:text-2xl font-bold hover:text-gray-400"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

