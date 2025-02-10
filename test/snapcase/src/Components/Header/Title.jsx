import React from 'react';
import {Link} from 'react-router-dom';

export default function Title() {
    return (
        <>
            <div className=''>
                <div className=''>
                    <nav>
                        <ul className='flex space-x-4 mx-7'>
                            <li>
                                <Link to='/allproduct'><span className='text-[#000]'>전 상품</span></Link>
                            </li>
                            <li>
                                <Link to='/model'><span className='text-[#000]'>기종</span></Link>
                            </li>
                            <li>
                                <Link to='/allmodel'><span className='text-[#000]'>모든 상품</span></Link>
                            </li>
                            <li>
                                <Link to='/iphoneall'><span className='text-[#000]'>아이폰</span></Link>
                            </li>                                
                        </ul>
                    </nav>
                </div>         
            </div>
        </>
    );
}

