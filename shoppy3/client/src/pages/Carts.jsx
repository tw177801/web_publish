import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Carts() {

    // localStorage에 담긴 cartItems의 배열 객체 출력 
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    // console.log('cartItems --->> ', cartItems[0].pid);
    // pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가 

    const pids = cartItems && cartItems.map(item => item.pid);  // []
    
    useEffect(()=>{
        if(pids.length > 0) {
            // axios를 이용하여 DB 연동
            axios   
                .post("http://localhost:9000/product/cartItems", {"pids": pids})
                .then(res =>{
                    // console.log(res.data)
                    //cartItems에 res.data의 정보 추가
                    const updateCartItems = cartItems.map((item, i)=> 
                                item.pid === res.data[i].pid
                                    &&  {
                                            ...item, 
                                            "pname":res.data[i].pname,
                                            "price":res.data[i].price,
                                            "description":res.data[i].description,
                                            "image":res.data[i].image
                                        }  
                    );
                    setCartItems(updateCartItems);
                    // [{pid, size, qty, pname, price, ...item}]
                })
                .catch(error => console.log(error));
        }
    }, []);

    console.log('cartItems-->> ', cartItems);
    

    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                {
                    cartItems && cartItems.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="error" style={{width:"100px"}} />
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

