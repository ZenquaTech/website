"use client";
import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";

const AddFeatureModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const isOpen = true;
  useEffect(() => {
    console.log("Modal Opened:", isOpen);
  }, [isOpen]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      // onClose={() => dispatch(closeAddFeatureModal())}
    >
      <Box
        sx={{
          width: 600,
          maxWidth: "90%",
          bgcolor: "#fff",
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
          mx: "auto",
          my: "20vh",
        }}
      >
        dsdsd
      </Box>
    </Modal>
  );
};

export default AddFeatureModal;
