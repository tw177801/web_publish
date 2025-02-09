import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Header/Home.jsx";
import Product from "../src/Components/Pages/Product.jsx";



export default function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

    </Router>
  );
}