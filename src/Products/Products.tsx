import React, { useState } from "react";
import { products as staticProducts } from "./consts";
import "./Products.css";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState(staticProducts);
  return (
    <>
      <h1 className="heading">Products</h1>
      <div className="productsList">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
