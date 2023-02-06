"use client";

import { Inter } from "@next/font/google";
import SearchBar from "@/components/SearchBar";
import {  useState } from "react";
import ProductList from "@/components/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <SearchBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}
