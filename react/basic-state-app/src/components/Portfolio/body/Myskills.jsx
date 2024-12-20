import React from 'react';
import './PortfolioBody.css';

export default function Myskills(skills) 



{

    return (

        <>
        <div className='max-container'>


            <section id="skill" className="section">
            <h2 className="title">{skills.t1}</h2>
            <p className="description">{skills.t2}</p>
            <p>{skills.c1}</p>

        </section>


        </div>
        </>
    );
}

