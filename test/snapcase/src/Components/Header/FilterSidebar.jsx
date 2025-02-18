import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FilterSidebar({ onFilterChange = () => {} }) {

    const [selectedFilters, setSelectedFilters] = useState({});
    const [filterData, setFilterData] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // 필터 데이터 로드
    useEffect(() => {
        axios.post('/data/sidebar.json') 
            .then((response) => {
                setFilterData(response.data);
            })
            .catch((error) => {
                console.error('필터 데이터를 불러오는 중 오류 발생:', error);
            });
    }, []);

    // 필터 변경 핸들러
    const handleFilterChange = (category, option) => {
        setSelectedFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (!updatedFilters[category]) {
                updatedFilters[category] = [];
            }

            if (updatedFilters[category].includes(option)) {
                updatedFilters[category] = updatedFilters[category].filter((item) => item !== option);
            } else {
                updatedFilters[category].push(option);
            }

            return updatedFilters;
        });
    };

    
    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    return (
        <div>
            {/* 필터 버튼 */}
            <div 
                className='flex cursor-pointer gap-[10px] p-[10px] border-2 border-solid border-[#000] rounded-[100px] items-center'
                onClick={() => setIsSidebarOpen(true)}
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 14"
                        fill="currentColor"
                        className="w-[18px] h-[14px]"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4312 3.69226C14.0366 3.69226 14.5273 3.20151 14.5273 2.59614C14.5273 1.99077 14.0366 1.50002 13.4312 1.50002C12.8259 1.50002 12.3351 1.99077 12.3351 2.59614C12.3351 3.20151 12.8259 3.69226 13.4312 3.69226ZM16.0273 2.59614C16.0273 4.02994 14.865 5.19226 13.4312 5.19226C11.9974 5.19226 10.8351 4.02994 10.8351 2.59614C10.8351 1.16234 11.9974 2.15822e-05 13.4312 2.17075e-05C14.865 2.18329e-05 16.0273 1.16234 16.0273 2.59614Z" />
                    </svg>
                </div>
                <span>필터</span>
            </div>
            
            {/* 필터 사이드바 및 배경 */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-100 flex">
                    {/* 사이드바 */}
                    <div className="w-64 p-4 border-r border-gray-300 bg-white shadow-lg">
                        <button className="mb-4 text-red-500" onClick={() => setIsSidebarOpen(false)}>닫기</button>
                        <h2 className="text-lg font-semibold mb-2">필터</h2>
                        {filterData?.filters?.map((filter) => (
                            <div key={filter.category} className="mb-4">
                                <h3 className="font-medium">{filter.category}</h3>
                                {filter.options.map((option) => (
                                    <label key={option} className="block text-sm">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={selectedFilters[filter.category]?.includes(option) || false}
                                            onChange={() => handleFilterChange(filter.category, option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    {/* 배경 클릭 시 닫힘 */}
                    <div className="flex-1" onClick={() => setIsSidebarOpen(false)}></div>
                </div>
            )}
        </div>
    );
}
