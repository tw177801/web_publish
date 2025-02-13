import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { AuthProvider } from './auth/AuthContext.js';

export default function App() {


/**
 * - 브라우저 업데이트 충돌 발생
localstorage 새로 고침 -> 데이터 삭제 
-> 데이터 삭제되면 안 된다


- useState()로 관리되는 데이터가 저장 안 되거나 로직 문제 발생 


CONSTRAINT 제약명  FOREIGN KEY(카트에서 정한 컬럼명)
		    REFERENCE (참조하는 테이블과 컬럼명)
 */






  /** 장바구니 아이템 저장 : 배열 */

  const [cartList, setCartList] = useState(()=> {
    try {
      const initCartList = localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList) : [];
    } catch (error) {
      console.log('로컬스토리지 데이터 작업도중 에러 발생');
      console.log(error);      
    }
  });   
  
  
  // localstorage 별도의 기능 -> 콜백 함수 사용 
  /** 장바구니 상품 갯수 */

  const [cartCount, setCartCount] = useState(()=> {
    try {
      const initCartList = localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList).length : 0;
    } catch (error) {
      console.log('로컬스토리지 데이터 작업도중 에러 발생');
      console.log(error);      
    }
  });  





  /** cartCount 업데이트가 되면 -> LocalStorage에 cartList를 저장 */
  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartList));
  },[cartCount]);


  /** 장바구니 추가 **/
  const addCart = (cartItem) => {
  //   // 입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지 않으면 새로 추가
  //   const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) 
  //                           ? cartList.map(item => 
  //                             item.pid === cartItem.pid && item.size === cartItem.size ?
  //                               {...item, qty: item.qty+1}// item의 qty+1 
  //                             : item
  //                           ) : [...cartList, cartItem];

  //   setCartList(updateCartList);
  //   setCartCount(cartCount + 1);
  // }

  // console.log('cartCount ==> ', cartCount);
  // console.log('cartList ==> ', cartList); 
  

  const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid && 
                                             checkItem.size === cartItem.size);

    let updateCartList = [];
    // let count = 0;
      if(isCheck) {
        updateCartList = cartList.map(item =>
            item.pid === cartItem.pid && item.size === cartItem.size ?
            {...item, qty:item.qty+1}
          : item
        )
      } else {
        updateCartList = [...cartList, cartItem];
        setCartCount(cartCount+1);

      }
        const sortUpdateCartList = updateCartList.sort((a, b)=> a.pid - b.pid);
        setCartList(sortUpdateCartList);
  }


  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout cartCount={cartCount}/>} >
                    <Route index element={<Home />} />
                    <Route path='/all' element={<Products />} />
                    <Route path='/cart' element={<Carts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/products/:pid' element={<DetailProduct  addCart={addCart} />} />                  
                    <Route path='/products/new' element={<NewProduct />} />                  
                </Route>
            </Routes>            
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

