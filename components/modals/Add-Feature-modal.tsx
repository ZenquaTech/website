"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


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
  const [priceType, setPriceType] = useState<"" | "free" | "paid">("");
  // const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleted, setIsDeleted] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");
  const [totalProducts, setTotalProducts] = useState<number>(0);




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

  const getTotalProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get_products`);
      console.log("API response:", res);
      if (res?.data?.products) {
        setTotalProducts(res.data.products.length); // or res.data.total if API gives total count
      }
    } catch (err) {
      console.error("Error fetching total products:", err);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      alert("Please select an image for the product.");
      return;
    }
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("priceType", priceType); // NEW
    //  formdata.append("isDeleted", isDeleted.toString());
    formdata.append("isDeleted", (isDeleted === "true").toString());


    if (rating !== "") {
      formdata.append("rating", String(Number(rating)));
    }

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
    getTotalProducts();
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
    maxHeight: "80vh",
    overflowY: "auto" as const,
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

          {/* Rating Dropdown */}
          <select
            value={rating === "" ? "" : String(rating)}
            onChange={(e) => setRating(e.target.value === "" ? "" : Number(e.target.value))}
            required
            style={inputStyled}
          >
            <option value="" disabled>
              Select Rating
            </option>
            {totalProducts > 0 &&
              Array.from({ length: totalProducts }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
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
