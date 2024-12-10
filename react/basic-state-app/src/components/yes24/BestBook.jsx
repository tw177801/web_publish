import React from 'react';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook() {
    
    const list = [
        {"img": "https://image.yes24.com/goods/117958120/XL"},
        {"img": "https://image.yes24.com/goods/108422348/L"},
        {"img": "https://image.yes24.com/goods/133213071/L"}
    ];

    return (
        <>
            <div>전체카트수량 : {totalQty}</div>
                {list.map((item) => 
                
                    <div style={{display: 'flex'}}>
                        <img src={item.img} width="100px"/>
                        <BestBookButton />
                    </div>
                
                )}
        </>
    );
}

