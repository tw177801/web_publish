import React, { useState } from 'react';

//장바구니일 경우만

export default function Menu({name, count}) {
        
    return (

            (name === '장바구니') ? <button type="button">{name}({count})</button>
                : (<button type="button">{name}</button>)
            
            // <button type="button"> {name}
            //     {name === '장바구니' ? <span>({count})</span>}

    );
}