"use client";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import AddProductModal from "@/components/modals/Add-Feature-modal";
import EditProductModal from "@/components/modals/Edit-Feature-modal";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Product/Sidebar";

type Product = {
  _id: string;
  title?: string;
  image?: string;
  description?: string;
  category?: string;
  industry?: string;
};

const columns = [
  { id: "number", label: "S.No.", minWidth: 40 },
  { id: "image", label: "Product Image", minWidth: 80 },
  { id: "title", label: "Title", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 150 },
  {
    id: "action",
    label: "Actions",
    minWidth: 170,
    align: "center",
  },
];

export default function AdminDashboard() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const router = useRouter();

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset to page 0
  };

  const getProducts = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/product/get_all_products`)
      .then((res) => {
        if (res?.data && res?.data?.products) {
          setProducts(res?.data.products);
          setTotalProducts(res?.data.products.length);
        } else {
          setProducts([]);
          setTotalProducts(0);
        }
      })
      .catch((err) => console.error("Error :  ", err));
  };

  const onDeleteHandler = (product_id: string) => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete the product?"
    );

    if (!deleteConfirmation) return;

    const data = {
      product_id: product_id,
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/soft_delete_product`,
        data
      )
      .then((res) => {
        if (res.data.result === true) {
          getProducts();
        }
      })
      .catch((error) => console.error("Error :  ", error));
  };

  useEffect(() => {
    getProducts();
  }, [page, rowsPerPage]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }
    setIsLogedIn(true);
  }, []);
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
        {/* Sidebar or left block */}
        <Sidebar />

        {/* Main Content Area */}
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#313330",
            padding: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            {/* Uncomment if you want a title */}

            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#D9E3EA", fontWeight: "bold" }}
            >
              Product List
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
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
                Add Product
              </Button>
            </Box>
          </Box>

          <TableContainer sx={{ maxHeight: 550 }}>
            <Table stickyHeader aria-label="sticky table">
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
                {Array.isArray(products) &&
                  products
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                      >
                        <TableCell sx={{ color: "#9BA9B4" }}>
                          {index + 1 + page * rowsPerPage}
                        </TableCell>
                        <TableCell>
                          <Avatar
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.image}`}
                            alt=""
                          />
                        </TableCell>
                        <TableCell sx={{ color: "#9BA9B4" }}>
                          {row.title}
                        </TableCell>
                        <TableCell sx={{ color: "#9BA9B4" }}>
                          {row.description}
                        </TableCell>
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
                              sx={{
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
                              sx={{
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

          {totalProducts > rowsPerPage && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={totalProducts}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ color: "#9BA9B4" }}
            />
          )}
        </Paper>
      </Box>
      {open && <AddProductModal open={open} onClose={() => setOpen(false)} />}

      {editOpen && <EditProductModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        product={selectedProduct!}
        onUpdated={getProducts}
      />
      }
    </>
  );
}
