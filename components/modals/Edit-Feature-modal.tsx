"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { categoryOptions, industryOption } from "../common";

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    _id: string;
    title?: string;
    description?: string;
    image?: string;
    category?: string;
    industry?: string;
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
  const [industries, setIndustries] = useState<string>(product?.industry || "");
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    setTitle(product?.title || "");
    setDescription(product?.description || "");
    setCategory(product?.category || "");
    setIndustries(product?.industry || "");
    getCategory();
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
      formdata.append("industry", industries);
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

          {/* Industry Dropdown */}
          <select
            value={industries}
            onChange={(e) => setIndustries(e.target.value)}
            required
            style={{ ...inputStyled }}
          >
            <option value="" disabled>
              Select Industry Type
            </option>
            {industryOption.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
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
