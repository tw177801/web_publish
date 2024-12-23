import React from 'react';

export default function CodingBar({title, percent}) {
    return (
        <>
            <div className="bar__metadata"><span>{title}</span><span>{percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width":`${percent}%`}}></div></div>
        </>
    );
}

