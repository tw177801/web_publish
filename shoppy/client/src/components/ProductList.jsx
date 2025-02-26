import React, { useState, useEffect } from 'react';
import ProductAvatar from './ProductAvatar.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom'; 

export default function ProductList() {

    const [list, setList] = useState ([]); // list 변경시 실시간 업데이트
    
    useEffect(()=>{

        axios.get('/data/products.json')
            .then((res)=> setList(res.data))
            .catch((error)=> console.log(error));

        // fetch('data/products.json')
        //     .then((data)=>data.json())
        //     .then((jsonData) => {
        //         setList(jsonData);  // jsonData를 전역변수화
        //     })
        //     .catch();
    }, []);
    
    // 출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}]]

    const rows = [];
    for(let i=0; i < list.length; i+=3) { // [{0}, {1}, {2}]
        rows.push(list.slice(i,i+3)); // [{0}, {1}, {2}]
    }

    
    return (
        <div>

            {
                rows.map((rowArray, index)=> 

                <div key={index} className='product-list'>
                    {rowArray.map((product) => 
                        
                        <Link key={product.pid} to={`/products/${product.pid}`}>
                            <ProductAvatar img={product.image} />
                        </Link>
                    )}
                </div>
                )
            }

        </div>
    );
}

