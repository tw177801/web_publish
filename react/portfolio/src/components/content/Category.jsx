import React from 'react';

export default function Category({name, count, style, click}) {
    return (
        <button 
            className={style}
            onClick ={()=>{click(name)}}
            // onMouseOver ={()=>{click(name)}}
            // onClick={() => {click(name)}}
        
        
        >{name}<span class="category__count">{count}</span></button>
    );
}

