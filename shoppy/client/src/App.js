import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Products from './pages/Products.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx'; // {}없으면 함수 디폴트 생성
import employees from './pages/Employees.jsx';// {}없으면 함수 디폴트 생성


export default function App() {


  const [cartList, setCartList] = useState([]);   /** 장바구니 리스트: 배열 */
  const [cartCount, setCartCount] = useState(0);    /** 장바구니 상품 갯수 */



  const addCart = (cartItem) => {
    // console.log('cartItem.js---->', cartItem);
    setCartList([...cartList, cartItem]);
    setCartCount(cartCount+1);
  }

  console.log('cartCount ==>', cartCount);
  console.log('cartList ==>', cartList);
  

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout cartCount={cartCount}/>} >
                <Route index element={<Home />} />
                <Route path='/all' element={<Products />} />
                <Route path='/Cart' element={<Cart cartList={cartList}/>} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/products/:pid' element={<DetailProduct addCart={addCart} />} />
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}


