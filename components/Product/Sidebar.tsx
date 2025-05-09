"use client";

import {
  Box,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
           sx={{
             height: "100vh",
             width: "250px",
             backgroundColor: "darkgray",
             padding: 3,
             boxShadow: 3,
             display: "flex",
             flexDirection: "column",
             gap: 2,
           }}
         >
           <Typography variant="h6" sx={{ color: "#000" ,fontWeight: "bold", mb: 2 }}>
             Menu
           </Typography>
   
           <Typography
             onClick={() => router.push("/admin")}
             sx={{
               color: "#000",
               fontWeight: "bold",
               borderRadius: "8px",
               py: 1.5,
               cursor: "pointer",
               "&:hover": {
                 textDecoration: "underline",
               },
             }}
           >
             Product List
           </Typography>
   
           <Typography
             onClick={() => router.push("/feedbackEnquiry")}
             sx={{
               color: "#000",
               fontWeight: "bold",
               borderRadius: "8px",
               py: 1.5,
               cursor: "pointer",
               "&:hover": {
                 textDecoration: "underline",
               },
             }}
           >
             Feedback List
           </Typography>
           <Typography
             onClick={() => router.push("/category")}
             sx={{
               color: "#000",
               fontWeight: "bold",
               borderRadius: "8px",
               py: 1.5,
               cursor: "pointer",
               "&:hover": {
                 textDecoration: "underline",
               },
             }}
           >
              Category
           </Typography>
         </Box>
  );
};

export default Sidebar;
