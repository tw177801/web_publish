// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Layout from './pages2/Layout.jsx';
import Carts from './pages2/Carts.jsx';
import Home from './pages2/Home.jsx';
import Login from './pages2/Login.jsx';
import Products from './pages2/Products.jsx';
import Signup from './pages2/Signup.jsx';

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
              
                <Route index element={<Home />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Carts' element={<Carts />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />

              </Route>
            </Routes>
        
        </BrowserRouter>

    </div>
  );
}

