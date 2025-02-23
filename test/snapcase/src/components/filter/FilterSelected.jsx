import React from "react";

export default function FilterSelected({ filters, onRemove }) {
    return (
        <div className="p-2">
            {filters.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {filters.map((filter, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full 
                                                     ${filter === "모든 기종" ? "bg-black text-white" : "bg-gray-200"}`}>
                            {filter} 
                            <button onClick={() => onRemove(filter)} className="ml-2 text-red-500">×</button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
