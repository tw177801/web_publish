import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSubcategories from "./FilterSubcategories.jsx"; 

export default function FilterSidebar({ onFilterApply }) {

    const [isOpen, setIsOpen] = useState(false);
    const [sidebar, setSidebar] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]); // 선택된 필터 저장

    useEffect(() => {
        axios.get('/data/sidebar.json') 
            .then(res => setSidebar(res.data))
            .catch(error => console.error(error));
    }, []);

    // 필터 선택 시 실행되는 함수
    const handleFilterSelect = (filter) => {
        setSelectedFilters([...selectedFilters, filter]); // 선택된 필터 추가
        setIsOpen(false); // 사이드바 닫기
        onFilterApply(filter); // 상품 리스트 필터링 함수 실행
    };

    // 필터 초기화 함수
    const resetFilters = () => {
        setSelectedFilters([]); // 모든 필터 초기화
        setSelectedCategory(null); // 카테고리 초기화
    };

    return (
        <div className="relative">

            {/* 필터 버튼 */}
                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 p-2 rounded"
                >

                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 14"
                        fill="currentColor"
                        className="w-[18px] h-[14px]"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4312 3.69226C14.0366 3.69226 14.5273 3.20151 14.5273 2.59614C14.5273 1.99077 14.0366 1.50002 13.4312 1.50002C12.8259 1.50002 12.3351 1.99077 12.3351 2.59614C12.3351 3.20151 12.8259 3.69226 13.4312 3.69226ZM16.0273 2.59614C16.0273 4.02994 14.865 5.19226 13.4312 5.19226C11.9974 5.19226 10.8351 4.02994 10.8351 2.59614C10.8351 1.16234 11.9974 2.15822e-05 13.4312 2.17075e-05C14.865 2.18329e-05 16.0273 1.16234 16.0273 2.59614Z" />
                    </svg> */}
                    
                    <span>필터</span>

                </button>

            {/* 오버레이 */}
                {isOpen && (
                    <div 
                        className="z-40 fixed inset-0 bg-black bg-opacity-50 blur-lg "
                        onClick={() => setIsOpen(false)}
                    />
                )}

            {/* 사이드바 */}
            <div 
                className={`fixed top-0 left-0 w-[380px] h-full 
                            bg-white shadow-lg z-50 transform transition-transform 
                            duration-300 rounded-r-[28px]

                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className="p-4 flex justify-between items-center">

                    {/* 필터 타이틀 */}
                    <h2 className="text-lg font-semibold">필터</h2>

                    {/* 닫기 버튼 */}
                    <button onClick={() => setIsOpen(false)} 
                            className="text-[12px] underline text-[#8b8b8b]"
                    >
                        닫기
                    </button>

                </div>

                {/* 필터 카테고리 및 서브카테고리 */}
                <div className="p-4">

                    {selectedCategory === null ? (
                                        
                        // 필터 카테고리 목록
                            sidebar.filters?.map((filter, index) => (

                                <div className="">

                                    <button
                                        key={index}
                                        className="flex justify-between w-full h-[50px] text-left p-2 mb-2 bg-gray-100 rounded-[12px] cursor-pointer"
                                        onClick={() => setSelectedCategory(filter)}
                                    >

                                        {filter.category}

                                        {/* 화살표 */}
                                            <div>
                                                <img src="https://cdn-stamplib.casetify.com/cms/image/9df716f3ea25f4fcf4f0b5d5790bca57.svg" alt="" />
                                            </div>

                                    </button>


                                </div>

                            ))



                    ) : (

                        // 선택한 카테고리의 서브카테고리 및 옵션 목록
                        <div>

                            <FilterSubcategories 
                                selectedCategory={selectedCategory} 
                                onFilterSelect={handleFilterSelect} 
                                onBack={() => setSelectedCategory(null)} 
                            />
                               
                        </div>
                    )}

                </div>



                {/* 필터 하단 버튼 */}

                    <div className="flex">

                        {/* 모두 지우기 */}
                            <div className="p-4">
                                <button 
                                    className="w-[120px] h-[50px] p-2 text-[#000] rounded-[20px] border-black border-solid border-2 hover:border-gray"
                                    onClick={resetFilters}
                                >
                                    모두 지우기
                                </button>
                            </div>


                        {/* 결과 보기 */}
                            <div className="p-4">
                                <button 
                                    className="w-[190px] h-[50px] p-2 bg-black text-white rounded-[20px] hover:bg-opacity-70"
                                >
                                    결과 보기
                                </button>
                            </div>
                        
                    </div>


            </div>

        </div>
    );
}
