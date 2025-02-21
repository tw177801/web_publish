import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/Components/Header/Home.jsx';
import Title from '../src/Components/Header/Title.jsx';
import AllProduct from './pages/AllProduct.jsx';
import IphoneAll from './pages/IphoneAll.jsx';
import IphoneType from './pages/IphoneType.jsx';
import Model from './pages/Model.jsx';
import ModelAll from './pages/ModelAll.jsx';
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

