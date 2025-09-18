"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { categoryOptions } from "../common";

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    _id: string;
    title?: string;
    description?: string;
    image?: string;
    category?: string;
    priceType?: "free" | "paid";
    isDeleted?: boolean;
    rating?: number;

  };
  onUpdated: () => void; // Callback to refresh list

}
type Category = {
  _id: string;
  name: string;
};

const EditProductModal: React.FC<EditProductModalProps> = ({
  open,
  onClose,
  product,
  onUpdated,
}) => {
  const [title, setTitle] = useState<string>(product?.title || "");
  const [description, setDescription] = useState<string>(
    product?.description || ""
  );
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>(product?.category || "");
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [priceType, setPriceType] = useState<"" | "free" | "paid">("");
  // const [isDeleted, setIsDeleted] = useState<boolean>(product?.isDeleted || false);
  const [isDeleted, setIsDeleted] = useState<string>("");

  const [rating, setRating] = useState<string>("");
  const [totalProducts, setTotalProducts] = useState<number>(0);


  useEffect(() => {
    setTitle(product?.title || "");
    setDescription(product?.description || "");
    setCategory(product?.category || "");
    setPriceType(product?.priceType || "");
    // setIsDeleted(product?.isDeleted || false);
    setIsDeleted(product?.isDeleted !== undefined ? String(product.isDeleted) : "");
    setRating(product?.rating ? String(product.rating) : "");
    getCategory();
    getTotalProducts();
  }, [product]);

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
  const getTotalProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`);
      if (res?.data?.products) {
        setTotalProducts(res.data.products.length);
      } else {
        setTotalProducts(0);
      }
    } catch (err) {
      console.error("Error fetching total products:", err);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("product_id", product._id);
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("category", category);
      formdata.append("priceType", priceType);
      // formdata.append("isDeleted", isDeleted.toString());
      formdata.append("isDeleted", (isDeleted === "true").toString());

      // if (rating !== "") {
      //   formdata.append("rating", rating);
      // }
      if (rating !== "") {
        formdata.append("rating", String(Number(rating)));
      }



      if (image) {
        formdata.append("image", image);
      }

      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/update_product`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.result === true) {
        onClose();
        onUpdated()

      } else {
        console.error("Update failed:", res.data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const modalStyle = {
    display: open ? "block" : "none",
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    margin: "100px auto",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto" as const,
    position: "relative" as "relative",
  };

  const inputStyled = {
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #9BA9B4",
    fontSize: "16px",
    color: "#000000",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </Button>

        <form onSubmit={handleSubmit}>
          <h3 style={{ color: "#000000", marginBottom: "20px" }}>
            Edit Product
          </h3>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyled}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            style={{ ...inputStyled, height: "100px" }}
          />
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={inputStyled}
          />

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{ ...inputStyled }}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categoryData.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
              </option>
            ))}
          </select>

          {/* Price Type */}
          <select
            value={priceType}
            onChange={(e) => setPriceType(e.target.value as "" | "free" | "paid")}
            required
            style={inputStyled}
          >
            <option value="" disabled>
              Select Price Type
            </option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          {/* Status Dropdown */}
          {/* <select
            value={isDeleted ? "true" : "false"}
            onChange={(e) => setIsDeleted(e.target.value === "true")}
            required
            style={inputStyled}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select> */}

          <select
            value={isDeleted}
            onChange={(e) => setIsDeleted(e.target.value)}
            required
            style={inputStyled}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="false">Active</option>
            <option value="true">InActive</option>
          </select>

          {/* rating Dropdown */}

          {/* <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={inputStyled}
          >
            <option value="" disabled>
              Select Rating
            </option>

            {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={String(num)}>
                {num}
              </option>
            ))}
          </select> */}

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={inputStyled}
          >
            <option value="" disabled>
              Select Rating
            </option>
            {totalProducts > 0 &&
              Array.from({ length: totalProducts }, (_, i) => i + 1).map((num) => (
                <option key={num} value={String(num)}>
                  {num}
                </option>
              ))}
          </select>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={onClose}
              style={{
                backgroundColor: "#f0f0f0",
                color: "#000",
                width: "48%",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#3f51b5",
                color: "#fff",
                width: "48%",
              }}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
