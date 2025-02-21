import React from "react";

export default function FilterSubcategories({ selectedCategory, onFilterSelect, onBack }) {







    return (

        <div>

            {/* 뒤로 가기 버튼 */}
            <button
                className="text-left p-2 mb-2 cursor-pointer"
                onClick={onBack}
            >
                <img src="https://cdn-stamplib.casetify.com/cms/image/99672a20d2432000d0b3871c7d43887c.svg" alt="" />
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
