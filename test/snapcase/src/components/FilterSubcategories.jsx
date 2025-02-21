import React from "react";

export default function FilterSubcategories({ selectedCategory, onFilterSelect, onBack }) {







    return (

        <div>

            {/* 뒤로 가기 버튼 */}
            <button
                className="w-[20px] text-left p-2 mb-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={onBack}
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
                                            onClick={() => onFilterSelect(model.name)}
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

    );
}
