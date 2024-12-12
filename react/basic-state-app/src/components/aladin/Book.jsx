import React from 'react';

export default function Book({img, title}) {
    return (
        <div style={{}}>
            <img src={img}  />
            <div>{title}</div>
        </div>
    );
}

