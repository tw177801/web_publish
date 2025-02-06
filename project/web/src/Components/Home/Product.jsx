import React from 'react';
import { Link } from 'react-router-dom';
import AllProduct from './AllProduct.jsx';

export default function Product() {


    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to='/allproduct'>전 상품</Link>
                        <Link to='/model'>기종</Link>
                        <Link to='/allmodel'>모든 기종</Link>
                        <Link to='/iphoneall'>아이폰</Link>
                        <Link to='/iphonetype'>아이폰 15 Pro Max</Link>
                    </li>
                </ul>
            </div>        
        </div>
    );
}

