import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';
import './OliveBody.css';

export default function ProductList({cart}) {

    const [productList, setProductList] = useState([]);
    
        useEffect(() => {
            fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData))
            .catch();

        }, []);

    const totalCart = (id) => {
        // alert(`productList - ${id} ::: 카트 클릭!!`);
        
        cart(id);   //AppOlive의 handleCartApp 함수 호출 
    
    }

    return (
        <ul className='product-list-container'>
            { productList && productList.map(item => 
                
                <li>
                    <Product 
                        totalCart = {totalCart}
                        id = {item.id}
                        img = {item.img}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        sprice={item.sprice}
                        isSale={item.isSale}
                        isCoupon={item.isCoupon}
                        isToday={item.isToday}
                    
                    />
                </li>
            )}

        </ul>
    );
}

