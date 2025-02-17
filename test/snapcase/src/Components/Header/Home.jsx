import React from "react";
import Series from "../Header/Series.jsx";
import ProductType from "../Header/ProductType.jsx";
import ProductList from "../Header/ProductList.jsx";

export default function Home() {
  return (

    <>
    
      <div className="text-left p-6">
        <h1 className="text-3xl font-bold">시리즈</h1>      
      </div>



      <Series />

      <ProductType />

      <ProductList />

    </>
  );
}