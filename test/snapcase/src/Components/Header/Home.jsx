import React from "react";
import Series from "../Header/Series.jsx";
import ProductType from "../Header/ProductType.jsx";

export default function Home() {
  return (

    <>
    
      <div className="text-left p-6">
        <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          Hello, Tailwind CSS!
        </button>
        <h1 className="text-3xl font-bold">시리즈!!!!</h1>      
      </div>

      <Series />

      <ProductType />

    </>
  );
}