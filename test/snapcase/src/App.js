import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/Components/Header/Home.jsx';
import Title from '../src/Components/Header/Title.jsx';
import AllProduct from '../src/Components/Pages/AllProduct.jsx';
import IphoneAll from '../src/Components/Pages/IphoneAll.jsx';
import IphoneType from '../src/Components/Pages/IphoneType.jsx';
import Model from '../src/Components/Pages/Model.jsx';
import ModelAll from './Components/Pages/ModelAll.jsx';
import ProductList from './Components/Header/ProductList.jsx';



export default function App() {


  return (
    <div className="">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/title" element={<Title/>}/>
          <Route path="/allproduct" element={<AllProduct/>}/>
          <Route path="/iphoneall" element={<IphoneAll/>}/>
          <Route path="/iphonetype" element={<IphoneType/>}/>
          <Route path="/model" element={<Model/>}/>
          <Route path="/modelall" element={<ModelAll/>}/>
          <Route path="/productList" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

