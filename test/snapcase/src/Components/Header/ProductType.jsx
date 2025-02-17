import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Classify from '../Header/Classify.jsx';
import ProductList from '../Header/ProductList.jsx';

export default function ProductType() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layoutType, setLayoutType] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [icons, setIcons] = useState([]);
    const [selectedLayout, setSelectedLayout] = useState(4); 

    useEffect(() => {
        axios.get('/data/products.json')
            .then(res => {
                setProducts(res.data);
                applyFilter(res.data, 4, null);
            })
            .catch(error => console.error('상품 데이터를 불러오는 중 오류 발생:', error));

        // 아이콘 JSON 불러오기
        axios.get('/data/icons.json')
            .then(res => setIcons(res.data.layoutIcons))
            .catch(error => console.error('아이콘 데이터를 불러오는 중 오류 발생:', error));
    }, []);

    const applyFilter = (data, type, category) => {
        let filtered = data;
        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }
        setFilteredProducts(filtered);
    };

    const handleLayoutChange = (type) => {
        setLayoutType(type);
        setSelectedLayout(type); // 선택된 레이아웃 업데이트
        applyFilter(products, type, selectedCategory);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        applyFilter(products, layoutType, category);
    };


    


    return (
        <>
            {/* 분홍색 타이틀 + 분류 컴포넌트 */}
            <div className=''>

                {/* 분홍색 타이틀만 */}
                    <div className='flex bg-[#fecad6] 
                                    rounded-[16px] justify-between 
                                    w-full md:min-h-[84px]
                                    items-center p-[12px_16px]
                                    mb-2 min-h-[66px]
                                    h-full
                                                    
                    '>
                        
                        {/* 타이틀 분류 */} 
                            <div className=''>

                                <span className='text-[16px] font-extrabold 
                                                 leading-[1.2] flex 
                                                 items-center gap-2
                                                 md:text-[32px]
                                                
                                '>
                                    전 상품
                                </span>
                            </div>


                        {/* 필터, 이미지 리스트 */}

                            
                            <div className='flex gap-[10px]'>

                                {/* 상품 필터 */}
                                    <div className='flex cursor-pointer gap-[10px] p-[10px] border-2 border-solid border-[#000] rounded-[100px] items-center'>

                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 18 14"
                                                fill="currentColor"
                                                className="w-[18px] h-[14px]"
                                                >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M13.4312 3.69226C14.0366 3.69226 14.5273 3.20151 14.5273 2.59614C14.5273 1.99077 14.0366 1.50002 13.4312 1.50002C12.8259 1.50002 12.3351 1.99077 12.3351 2.59614C12.3351 3.20151 12.8259 3.69226 13.4312 3.69226ZM16.0273 2.59614C16.0273 4.02994 14.865 5.19226 13.4312 5.19226C11.9974 5.19226 10.8351 4.02994 10.8351 2.59614C10.8351 1.16234 11.9974 2.15822e-05 13.4312 2.17075e-05C14.865 2.18329e-05 16.0273 1.16234 16.0273 2.59614Z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M14.2095 3.72546C14.6802 3.47239 15.0002 2.97528 15.0002 2.40344C15.0002 2.15946 14.9419 1.92909 14.8386 1.72546H16.9997C17.552 1.72546 17.9997 2.17318 17.9997 2.72546C17.9997 3.27775 17.552 3.72546 16.9997 3.72546H14.2095ZM12.7909 3.72546H1C0.447717 3.72546 0 3.27775 0 2.72546C0 2.17318 0.447717 1.72546 1 1.72546H12.1618C12.0584 1.92909 12.0002 2.15946 12.0002 2.40344C12.0002 2.97528 12.3202 3.47239 12.7909 3.72546Z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.56878 11.5957C3.96341 11.5957 3.47266 11.105 3.47266 10.4996C3.47266 9.89421 3.96341 9.40346 4.56878 9.40346C5.17415 9.40346 5.66489 9.89421 5.66489 10.4996C5.66489 11.105 5.17415 11.5957 4.56878 11.5957ZM1.97266 10.4996C1.97266 11.9334 3.13498 13.0957 4.56878 13.0957C6.00257 13.0957 7.16489 11.9334 7.16489 10.4996C7.16489 9.06579 6.00257 7.90346 4.56878 7.90346C3.13498 7.90346 1.97266 9.06579 1.97266 10.4996Z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.79049 11.6289C3.3198 11.3758 2.99981 10.8787 2.99981 10.3069C2.99981 10.0629 3.05806 9.83253 3.16141 9.62891H1.0003C0.448015 9.62891 0.000299454 10.0766 0.000299454 10.6289C0.000299454 11.1812 0.448015 11.6289 1.0003 11.6289H3.79049ZM5.20913 11.6289H17C17.5523 11.6289 18 11.1812 18 10.6289C18 10.0766 17.5523 9.62891 17 9.62891H5.83821C5.94156 9.83253 5.99981 10.0629 5.99981 10.3069C5.99981 10.8787 5.67982 11.3758 5.20913 11.6289Z"
                                                />
                                            </svg>

                                        </div>

                                        <span>필터</span>
                                    </div>

                                {/* 상품 이미지 리스트 */}  
                                    <div>
                                        <div className='flex gap-[8px] p-[10px] border-2 border-solid border-[#000] rounded-[100px] items-center'>
                                            {icons.map((icon) => (
                                                <div
                                                    key={icon.type}
                                                    className={`cursor-pointer p-2 rounded-[34px] ${
                                                        selectedLayout === icon.type ? 'bg-[#000] text-[#fecad6]' : ''
                                                    }`}
                                                    onClick={() => handleLayoutChange(icon.type)}
                                                >
                                                    <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
                                                </div>
                                            ))}
                                        </div>   
                                    </div>
                            </div>  {/* 마지막 필터, 이미지 리스트 */}
                    </div> {/* 분홍색 타이틀만 */}

                        {/* 분류 컴포넌트 */}
                        <Classify onCategoryChange={handleCategoryChange} />

                        {/* 필터링된 상품 리스트 렌더링 */}
                        <div>
                            <ProductList products={filteredProducts} layoutType={layoutType} />

                        </div>
            </div>
        </>
    );
}

