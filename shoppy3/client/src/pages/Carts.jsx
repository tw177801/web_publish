import React from 'react';
import axios from 'axios';

export default function Carts() {

    // localStorage에 담긴 cartItems의 배열 객체 출력 
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // console.log('cartItems --->> ', cartItems[0].pid);
    // pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가 

    const pids = cartItems && cartItems.map(item => item.pid);  // []
    console.log('pids ===>', pids);
    
    // axios를 이용하여 DB 연동
    axios   
        .post("http://localhost:9000/product/cartItems", {"pids": pids})
        .then(res =>
            console.log(res.data)
        )
        .catch(error => console.log(error));

    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <table border="1">
                <tr>
                    <th>PID</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
                {/* {
                    cartList.map((cartItem) => 
                        <tr>
                            <td>{cartItem.pid}</td>
                            <td>{cartItem.size}</td>
                            <td>{cartItem.qty}</td>
                            <td>{cartItem.price}</td>
                        </tr>
                    )
                } */}
            </table>
        </div>
    );
}

