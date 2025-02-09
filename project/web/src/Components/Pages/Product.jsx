import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {


    return (
        <div>
            <div>
                <nav className="bg-gray-800 p-4 flex justify-between text-white">
                    <ul>
                        <li>
                            <Link to='/allproduct'>전 상품</Link>
                            <Link to='/model'>기종</Link>
                            <Link to='/allmodel'>모든 기종</Link>
                            <Link to='/iphoneall'>아이폰</Link>
                            <Link to='/iphonetype'>아이폰 15 Pro Max</Link>
                        </li>
                    </ul>

                </nav>
            </div>        
        </div>
    );
}

