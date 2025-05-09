"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Product/Sidebar";
import { Button } from "reactstrap";
import AddCategoryModal from "@/components/modals/add-category-modal";
import EditCategoryModal from "@/components/modals/edit-category";

type Category = {
  _id: string;
  name: string;
};

const columns = [
  { id: "Sno", label: "SNO", minWidth: 250 },
  { id: "name", label: "Name", minWidth: 280 },
  {
    id: "action",
    label: "",
    minWidth: 150,
    align: "center",
  },
];

export default function Category() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const hasFetched = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsLogedIn(true);
    }
  }, []);

  const getCategory = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/getCategory`)
      .then((res) => {
        if (res?.data) {
          setCategory(res?.data?.data);
          setTotalItems(res?.data?.data?.length);
        } else {
          setCategory([]);
          setTotalItems(0);
        }
      })
      .catch((err) => console.error("Error :  ", err))
      .finally(() => (hasFetched.current = false));
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true; // Mark as fetched
      getCategory(); // Call API only once
    }
  }, [page, rowsPerPage]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSelectChange = (event: any) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDeleteHandler = (category_id: string) => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete the category?"
    );
  
    if (!deleteConfirmation) return;
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/deleteCategory/${category_id}`
      )
      .then((res) => {
        if (res.data.result === true) {
          alert("Category deleted successfully.");
          getCategory(); // Refresh the category list
        }
      })
      .catch((error) => {
        
        // Check for specific backend error message
        const message =
          error.response?.data?.message || "Something went wrong while deleting.";
        alert(message);
      });
  };
  

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setOpenEdit(true);
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

  return (
    <>
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
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={"0 30px 0px 0px"}
          >
            <Typography
              variant="h5"
              sx={{ color: "#D9E3EA", fontWeight: "bold", mb: 2 }}
            >
              Category
            </Typography>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              style={{
                fontSize: "15px",
                backgroundColor: "#019dce",
                color: "#D9E3EA",
                padding: "8px 16px",
                fontWeight: "bold",
                borderRadius: "10px",
                width: "160px",
                textTransform: "none",
              }}
            >
              Add Category
            </Button>

            {/* Dropdown to Select Feedback or Enquiry */}
          </Box>

          <TableContainer sx={{ maxHeight: 600 }}>
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
                {category
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover key={row._id}>
                      <TableCell sx={{ color: "#fff" }}>{index + 1}</TableCell>
                      <TableCell sx={{ color: "#fff" }}>{row.name}</TableCell>
                      <TableCell align="right">
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="flex-end"
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleEdit(row)}
                            style={{
                              fontSize: "15px",
                              backgroundColor: "#019dce",
                              color: "#D9E3EA",
                              padding: "4px 8px",
                              fontWeight: "bold",
                              borderRadius: "10px",
                              width: "70px",
                              textTransform: "none",
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={() => onDeleteHandler(row._id)}
                            style={{
                              fontSize: "15px",
                              backgroundColor: "#e63905",
                              color: "#D9E3EA",
                              padding: "4px 8px",
                              fontWeight: "bold",
                              borderRadius: "10px",
                              width: "70px",
                              textTransform: "none",
                            }}
                          >
                            Delete
                          </Button>
                        </Stack>
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
      <AddCategoryModal
        open={open}
        onClose={() => setOpen(false)}
        getCategory={getCategory}
      />
      <EditCategoryModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        category={selectedCategory!}
        onUpdated={getCategory}
      />
    </>
  );
}
