"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { categoryOptions } from "../common";
import { Dispatch, SetStateAction } from "react";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  getCategory: () => void;
}

const AddCategoryModal: React.FC<AddProductModalProps> = ({
  open,
  onClose,
  getCategory
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/add_category`, {
        name,
      })
      .then((res) => {
        if (res.data.result === true) {
          onClose?.(); // Close the modal after successful product addition
          setName("");
          getCategory?.();
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err: any) => {
        setError(err?.response?.data?.message);
      });
  };

  useEffect(()=>{
    setError("")
  },[open])
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
        <Button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px",
          }}
          onClick={() => {
            onClose()
            setName("");
          }} // Close the modal on clicking the X button
        >
          <CloseIcon />
        </Button>

        <form onSubmit={handleSubmit}>
          <h3 style={{ color: "#000000", marginBottom: "20px" }}>
            Add Category
          </h3>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            required
            style={inputStyled}
          />
          {error && (
            <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {error}
            </p>
          )}

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
              onClick={()=>{onClose(),  setName("");}} // Close the modal on cancel
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
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
