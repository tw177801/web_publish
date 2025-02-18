import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from "../context/CartContext.js";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart.js";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const {getCartList, updateCartList, deleteCartItem} = useCart();
    const hasCheckedLogin = useRef(false);

    useEffect(()=>{

        if(hasCheckedLogin.current) return; // true: 로그인 상태 --> 블록 return
            hasCheckedLogin.current = true;                    

        if(isLoggedIn) {
            getCartList();
            //테이블의 로그인 아이디의 카트 리스트 가져오기
            
        } else {        
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
            select ? navigate('/login') : navigate('/');
            setCartList([]);
        }
    } , [isLoggedIn]);    



    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {
            cartList && cartList.map(item => 
            <>
                <div className="cart-item" >
                <img src={item.image} alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-title">{item.size}</p> 
                        <p className="cart-item-price">
                            {item.price}원
                        </p>
                    </div>
               
                    <div className="cart-quantity">
                        <button onClick={() => {
                            item.qty>1 && updateCartList(item.cid, "decrease")
                        }}>
                        -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button onClick={() => {updateCartList(item.cid, "increase")}}>
                        +
                        </button>
                    </div>
                <button className="cart-remove" onClick={()=>{deleteCartItem(item.cid)}}>
                    <RiDeleteBin6Line />
                </button>
              

                </div> 
            </>
            )
        }  
                <div className="cart-actions">                       
                    <button>주문하기</button>
                </div> 
                        
        </div>
    );
}
