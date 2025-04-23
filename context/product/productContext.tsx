// app/contexts/ProductContext.tsx or src/contexts/ProductContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define product and cart item types (customize as needed)
type Product = {
  id: number;
  title: string;
  price: number;
  // Add more fields as needed
};

type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

// Create context
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
