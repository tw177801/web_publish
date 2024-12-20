import React from 'react';
import './PortfolioBody.css';

export default function Body2({
    
    t1, t2, c1, stitle, 
    sc1, sc2,
    ptitle,
    li1,
    li2,
    li3,
    li4,
    li5,
    etitle,
    b1,
    b2,
    b3



}) 



{

    return (

        <>
        <div className='max-container'>


            <section id="skill" className="section">
            <h2 className="title">{t1}</h2>
            <p className="description">{t2}</p>
            <p>{c1}</p>

            <div className="skills">
            <article className="sklls__coding">
            <h3 className="skill__title">{stitle}</h3>
                <ul>

                    <li className="bar" style={{'list-style-type': 'none'}}>
                    <div className="bar__metadata"><span>{sc1}</span><span>{sc2}</span></div>
                    <div className="bar__bg"><div className="bar__value" style={{"width":'98%'}}></div></div>
                    </li>
                
                
                </ul>
            </article>
            <article className="skills__tools">
            <h3 className="skill__title">{ptitle}</h3>
            <ul>
                <li style={{'list-style-type': 'none'}}>{li1}</li>
                <li style={{'list-style-type': 'none'}}>{li2}</li>
                <li style={{'list-style-type': 'none'}}>{li3}</li>
                <li style={{'list-style-type': 'none'}}>{li4}</li>
                <li style={{'list-style-type': 'none'}}>{li5}</li>
            </ul>
            </article>
            <article className="skills__etc">
            <h3 className="skill__title">{etitle}</h3>
            <ul>
                <li style={{'list-style-type': 'none'}}>{b1}</li>
                <li style={{'list-style-type': 'none'}}>{b2}</li>
                <li style={{'list-style-type': 'none'}}>{b3}</li>
            </ul>
            </article>
        </div> 
        </section>


        </div>
        </>
    );
}

