import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';
import './OliveBody.css';

export default function ProductList() {

    const [productList, setProductList] = useState([]);
    
        useEffect(() => {
            fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData))
            .catch();

        }, []);

        console.log(`productList --> ${productList}`);
        

    return (
        <ul className='product-list-container'>
            {productList && productList.map(item => 
                
                <li>
                    <Product 
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

