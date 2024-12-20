import React from 'react';
import './PortfolioBody.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//About me





export default function Body({title, content, title2, content2, job, h1, h2}) {
    

    
    return (
        <>

        <div className='tbody'>
        
            <span className='p1'>{title}</span>
            <p className='p2'>{content}</p>

            {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
            <span className='tp1'>{title2}</span>
            <p className='tp2'>{content2}</p>
            
            <div className='tbottom'>
                <img src={job} />
                <p>{h1}</p>
                <p>{h2}</p>
            </div>


        </div>
        </>
    );
}

