import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products = [], layoutType }) {
    return (
        <div className={`grid gap-4 ${layoutType === 2 ? 'grid-cols-2' : 
                                    layoutType === 4 ? 'grid-cols-4' : 'grid-cols-6'}`}>
            {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <div className='relative w-full p-6 border rounded-lg shadow-md overflow-hidden'>

                        {/* 배경 효과 */}
                        <div className='
                            absolute 
                            bg-[linear-gradient(315deg,_#EEE_0%,_rgba(238,238,238,0)_50%)] 
                            w-full 
                            h-full
                            top-0
                            left-0
                            z-0'>
                        </div>

                        {/* 상품 이미지 */}
                        <div className='w-full max-w-sm mx-auto relative z-10'>
                            <img src={product.image} 
                                alt={product.title} 
                                className='w-full h-auto object-cover align-middle'/>
                        </div>

                        {/* 상품 정보 */}
                        <div className='mt-6 relative z-10 flex flex-col items-center'>

                            <div className='mt-[12px] gap-[10px] leading-[1.2] flex flex-col text-[#777] text-center'>
                                <p className='text-[#000] font-semibold'>{product.title}</p>
                                <p>{product.model}</p>
                                <p>{product.series}</p>
                            </div>

                            {/* 상품 가격 */}
                            <div className='bg-[#000] text-[#fff] rounded-full flex text-[16px] px-4 py-2 mt-4'>
                                <p className='text-center'>₩{product.price.toLocaleString()}</p>
                            </div>

                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
}
