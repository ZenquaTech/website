"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Product/Sidebar";
import { Button } from "reactstrap";

type FeedbackItem = {
  _id: string;
  fullName: string;
  email: string;
  type: string; // e.g. "Feedback" or "Inquiry"
  message: string;
  createdAt: string;
};

const columns = [
  { id: "fullName", label: "Full Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 180 },
  { id: "type", label: "Type", minWidth: 100 },
  { id: "message", label: "Message", minWidth: 200 },
  { id: "createdAt", label: "Date", minWidth: 160 },
  { id: "delete", label: "", minWidth: 140 },
];

export default function FeedbackList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsLogedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLogedIn) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/getfeedbackenquiry`
        )
        .then((res) => {
          const data = res?.data?.data || [];
          setFeedbackList(data);
          setTotalItems(data.length);
        })
        .catch((err) => console.error("Error fetching feedback:", err));
    }
  }, [isLogedIn]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event?.target?.value);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!isLogedIn) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c1c1c",
        }}
      >
        <CircularProgress size={60} thickness={4} sx={{ color: "#9BA9B4" }} />
      </Box>
    );
  }

  const handleDelete = (id: any) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/deletefeedbackenquiry/${id}`
      )
      .then((res) => {
        console.log(res?.data?.data,'ress')
         setFeedbackList(prevList => prevList.filter(item => item._id !== id))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Filter feedback list based on selected option
  const filteredFeedbackList =
    selectedOption === "All"
      ? feedbackList
      : feedbackList.filter((item) => item.type === selectedOption);

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#313330",
          padding: 2,
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            variant="h5"
            sx={{ color: "#D9E3EA", fontWeight: "bold", mb: 2 }}
          >
            Feedback & Inquiries
          </Typography>

          {/* Dropdown to Select Feedback or Enquiry */}
          <FormControl sx={{ width: "130px" }}>
            <Select
              value={selectedOption}
              label="Select Type"
              onChange={handleSelectChange}
              sx={{
                backgroundColor: "#f5f5f5",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Feedback">Feedback</MenuItem>
              <MenuItem value="Inquiry">Inquiry</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="feedback table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "#313330",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFeedbackList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover key={row._id}>
                    <TableCell sx={{ color: "#fff" }}>{row.fullName}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.email}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.type}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.message}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {new Date(row.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      <Button
                        onClick={() => handleDelete(row?._id)} // Pass a function reference
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "4px",
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {totalItems > rowsPerPage && (
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={totalItems}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ color: "#9BA9B4" }}
          />
        )}
      </Paper>
    </Box>
  );
}
