import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext.js';
import axios from 'axios';

export function useCart() { // custom Hook(커스텀 훅)
    const { cartList, setCartList, cartCount, setCartCount } = useContext(CartContext);

    // 함수 생성 - 비동기 로직 & useContext가 관리하는 변수는 await/async를 통해 순서 보장 

    /**
     * 장바구니 전체 리스트 조회  
     */
    const getCartList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", {"id":id});
        setCartList(result.data);
    }
    
    /**
     * 장바구니 새로운 아이템 저장 
     */

    const saveToCartList = async(formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData); 
        if(result.data.result_rows) {
            setCartCount(cartCount+1);
            getCartList();
        }
        return result.data.result_rows;
        
        // alert("장바구니")
        //DB 연동 --> cartList 가져와야함
        // axios.post("http://localhost:9000/cart/add");
    }
    
    /**
     * 장바구니 아이템 수량 업데이트   
     */

    const updateCartList = async(cid, type) => {
        const result = await axios.put("http://localhost:9000/cart/updateQty", 
                                        {"cid": cid, "type":type});
        result.data.result_rows && getCartList();
        return result.data.result_rows;
    }

    /**
     * 장바구니 전체 카운트 조회 
     */

    const getCount = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/count", {"id": id});
        setCartCount(result.data.count);
        return result.data.count;
    }


    /**
     * 장바구니 카운트 초기화 
     */

    const setCount = (value) => { setCartCount(value); }

    return {saveToCartList, updateCartList, getCartList, getCount, setCount};
    
}