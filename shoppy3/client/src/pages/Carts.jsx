import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from "../context/CartContext.js";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart.js";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const {getCartList} = useCart();
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

    // console.log('cartList--------->> ', cartList);
    

    // 수량 업데이트
    const handleQtyIncrease = () => {
        if(   ) {
            
        } 

    };

    // 수량 감소 
    const handleQtyDecrease = () => {


    }

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
                    
                    <button onClick={handleQtyDecrease}>
                    -
                    </button>
                    
                    <input type="text" value={item.qty} readOnly />

                    <button onClick={handleQtyIncrease}>
                    +
                    </button>

                </div>
                <button
                    className="cart-remove"
                >
                    🗑
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
