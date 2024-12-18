import React, { useState } from 'react';
import './BestBook.css';

export default function BestBookButton({qtyChange}) {
    
    
    const [qty, setQty] = useState(1);
    
    const handleClick = (type) => {
        if( type === '-') {
            (qty > 1) ? setQty(qty-1) : alert('최소 주문은 1개 이상입니다.');
        } else if(type === '+') {
            setQty(qty + 1);
        }
    }
    
    
    return (
        <ul className='container-button'>

           <li>
                <input type="checkbox" />
                <button type="button" 
                        onClick={()=>{handleClick('-')}}>-</button>
                <span>{qty}</span>
                <button type="button" 
                        onClick={()=>{handleClick('+')}}
                        >+</button>
            </li> 
            <li>
                <button type="button" 
                        className="btn-cart"
                        >카트에 넣기</button>
            </li>
            <li>
                <button type="button">바로 구매</button>
            </li>
            <li>
                <button type="button">리스트에 넣기</button>
            </li>
        
        </ul>
    );
}

