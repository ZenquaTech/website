"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { categoryOptions, industryOption } from "../common";

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  category: {
    _id: string;
    name?: string;
  };
  onUpdated: () => void; // Callback to refresh list
}

const EditCategoryModal: React.FC<EditProductModalProps> = ({
  open,
  onClose,
  category,
  onUpdated,
}) => {
  const [name, setName] = useState<string>(category?.name || "");

  useEffect(() => {
    setName(category?.name || "");
  }, [category]);
 

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Ensure category is defined before trying to access its _id
    if (!category?._id) {
      console.error("Category ID is missing");
      return;  // Exit the function if category or _id is undefined
    }
  
    try {
      // Prepare the data to be sent, including both id and name
      const updatedData = { name };
  
      // Send the data as a JSON object in the body of the PUT request
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/update_category/${category._id}`,  // Correct URL
        updatedData  // Send the data (name) directly in the body
      );
  
      if (res.data.result === true) {
        onClose();  // Close the modal after a successful update
        onUpdated()
      } else {
        console.error("Update failed:", res.data.message);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  
  
  
  
  const modalStyle = {
    display: open ? 'block' : 'none',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    margin: '100px auto',
    maxWidth: '600px',
    width: '100%',
    position: 'relative' as 'relative',
  };

  const inputStyled = {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #9BA9B4',
    fontSize: '16px',
    color: '#000000',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <Button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px',
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </Button>

        <form onSubmit={handleSubmit}>
          <h3 style={{ color: "#000000", marginBottom: '20px' }}>Edit Product</h3>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyled}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <Button
              type="button"
              variant="contained"
              onClick={onClose}
              style={{
                backgroundColor: '#f0f0f0',
                color: '#000',
                width: '48%',
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '48%',
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

export default EditCategoryModal;
