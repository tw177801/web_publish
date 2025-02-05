import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {


    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to='/'>전 상품</Link>
                        <Link to='/'>기종</Link>
                        <Link to='/'>모든 기종</Link>
                        <Link to='/'>아이폰</Link>
                        <Link to='/'>아이폰 15 Pro Max</Link>

                    </li>
                </ul>

            </div>        
        </div>
    );
}

