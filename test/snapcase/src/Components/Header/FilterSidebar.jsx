import React, { useState, useEffect } from "react";
import axios from "axios";

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
                    className="flex items-center gap-2 p-2 bg-gray-200 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 14"
                        fill="currentColor"
                        className="w-[18px] h-[14px]"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4312 3.69226C14.0366 3.69226 14.5273 3.20151 14.5273 2.59614C14.5273 1.99077 14.0366 1.50002 13.4312 1.50002C12.8259 1.50002 12.3351 1.99077 12.3351 2.59614C12.3351 3.20151 12.8259 3.69226 13.4312 3.69226ZM16.0273 2.59614C16.0273 4.02994 14.865 5.19226 13.4312 5.19226C11.9974 5.19226 10.8351 4.02994 10.8351 2.59614C10.8351 1.16234 11.9974 2.15822e-05 13.4312 2.17075e-05C14.865 2.18329e-05 16.0273 1.16234 16.0273 2.59614Z" />
                    </svg>
                    <span>필터</span>
                </button>

            {/* 오버레이 */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

            {/* 사이드바 */}
            <div 
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-semibold">필터</h2>
                    <button onClick={() => setIsOpen(false)} className="text-xl">
                        닫기
                    </button>
                </div>

                {/* 필터 카테고리 및 서브카테고리 */}
                <div className="p-4">
                    {selectedCategory === null ? (
                        // 카테고리 목록
                        sidebar.filters?.map((filter, index) => (
                            <button
                                key={index}
                                className="w-full text-left p-2 mb-2 bg-gray-100 rounded hover:bg-gray-200"
                                onClick={() => setSelectedCategory(filter)}
                            >
                                {filter.category}
                            </button>
                        ))
                    ) : (
                        // 선택한 카테고리의 서브카테고리 및 옵션 목록
                        <div>
                            {/* 뒤로 가기 버튼 */}
                                <button
                                    className="w-[20px] text-left p-2 mb-2 bg-gray-300 rounded hover:bg-gray-400"
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    ← 
                                </button>

                            {/* 서브카테고리 및 옵션 */}
                            {selectedCategory.subcategories?.map((sub, subIndex) => (
                                <div key={subIndex} className="mb-4">
                                    <h3 className="font-semibold">{sub.name}</h3>
                                    <ul className="mt-2 space-y-1">
                                        {sub.options?.map((option, optIndex) => (
                                            <li key={optIndex} className="ml-4 text-gray-700">
                                                {option.brand && <strong>{option.brand}</strong>}
                                                <ul>
                                                    {option.models?.map((model) => (
                                                        <li 
                                                            key={model.id} 
                                                            className="ml-6 cursor-pointer hover:text-blue-500"
                                                            onClick={() => handleFilterSelect(model.name)}
                                                        >
                                                            - {model.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>



                {/* 필터 하단 버튼 */}

                <div className="flex">

                    <div className="p-4 border-t">
                        <button 
                            className="w-full p-2 text-[#000] rounded"
                            onClick={resetFilters}
                        >
                            모두 지우기
                        </button>
                    </div>

                    <div className="p-4 border-t">
                        <button 
                            className="w-full p-2 bg-black text-white rounded-[3px]"
                        >
                            결과 보기
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}
