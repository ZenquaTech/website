"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { industryOption } from "../common";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}
type Category = {
  _id: string;
  name: string;
};

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [industries, setIndustries] = useState<string>("");
  const [category, setCategory] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("category",category );
    formdata.append("industry", industries);
    if (image) {
      formdata.append("image", image);
    }

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/add_product`,
        formdata
      )
      .then((res) => {
        if (res.data.result === "true") {
          onClose?.(); // Close the modal after successful product addition
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);
  // Inline styles
  const modalStyle = {
    display: open ? "block" : "none",
    position: "fixed" as "fixed",
    top: "0",
    left: "0",
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
    position: "relative" as "relative", // Position relative for absolute close button
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

  const buttonStyle = {
    padding: "10px",
    color: "black",
    boxShadow: "0px 0px 8px #fff",
    marginTop: "15px",
    cursor: "pointer" as "pointer",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        {/* Close Button (X) */}
        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px",
          }}
          onClick={onClose} // Close the modal on clicking the X button
        >
          <CloseIcon />
        </Button>

        <form onSubmit={handleSubmit}>
          <h3 style={{ color: "#000000", marginBottom: "20px" }}>
            Add Product
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

          {/* Buttons: Cancel and Add Product */}
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
              style={{
                ...buttonStyle,
                backgroundColor: "#f0f0f0",

                width: "48%",
              }}
              onClick={onClose} // Close the modal on cancel
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                ...buttonStyle,
                color: "white",
                backgroundColor: "#3f51b5",
                width: "48%",
              }}
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
