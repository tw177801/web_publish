import React from 'react';
import './PortfolioBody.css';


//About me

export default function Body({title, content, title2, content2}) {
    return (
        <>
        <div className='tbody'>
        
            <span className='p1'>{title}</span>
            <p className='p2'>{content}</p>

            <span>{title2}</span>
            <p>{content2}</p>
            

            


        </div>
        </>
    );
}

