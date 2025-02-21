import React from "react";

import ProductType from "./ProductType.jsx";
import ProductList from "./ProductList.jsx";

export default function Home() {
  return (

    <>
    
      <div className="text-left p-6">
        <h1 className="text-3xl font-bold">시리즈</h1>      
      </div>



      

      <ProductType />

      <ProductList />

    </>
  );
}