import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import  Product  from "../../Types/ProductType"
import ProductsService from "@/Services/Product-services";
import ProductCard from "@/ProductCard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsService.getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Head>
        <title>Product_List</title>
      </Head>
      <div className="container mt-5">
        <div className="row">
          {products.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
