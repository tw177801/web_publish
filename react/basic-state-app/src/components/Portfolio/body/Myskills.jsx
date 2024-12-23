import React from 'react';
import './PortfolioBody.css';

export default function Myskills(skills) 

{

    return (

        <>
          <section id="skill" className="section max-container">
            
              <h2 className="title">{skills.t1}</h2>
              <p className="description">{skills.t2}</p>
              <p>{skills.c1}</p>

            <div className="skills">
              
              <article className="sklls__coding">
                <h3 className="skill__title">{skills.stitle}</h3>
                <ul>
                    <li className="bar" style={{'listStyleType':'none'}}>
                      <div className="bar__metadata"><span>{skills.sc1}</span><span>{skills.sc2}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"98%"}}></div></div>
                    </li>
                    <li className="bar">
                      <div className="bar__metadata"><span>{skills.sc3}</span><span>{skills.sc4}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"90%"}}></div></div>
                    </li>
                    <li className="bar">
                      <div className="bar__metadata"><span>{skills.sc5}</span><span>{skills.sc6}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"90%"}}></div></div>
                    </li>
                    <li className="bar">
                      <div className="bar__metadata"><span>{skills.sc7}</span><span>{skills.sc8}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"80%"}}></div></div>
                    </li>
                    <li className="bar">
                      <div className="bar__metadata"><span>{skills.sc9}</span><span>{skills.sc10}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"79%"}}></div></div>
                    </li>
                    <li className="bar">
                      <div className="bar__metadata"><span>{skills.sc11}</span><span>{skills.sc12}</span></div>
                      <div className="bar__bg"><div className="bar__value" style={{"width":"68%"}}></div></div>
                    </li>          
                </ul>
              </article>

              
                <article className="skills__tools">
                    <h3 className="skill__title">{skills.ptitle}</h3>
                    <ul className='li-skill'>
                        <li style={{'listStyleType':'none'}}>{skills.li1}</li>
                        <li style={{'listStyleType':'none'}}>{skills.li2}</li>
                        <li style={{'listStyleType':'none'}}>{skills.li3}</li>
                        <li style={{'listStyleType':'none'}}>{skills.li4}</li>
                        <li style={{'listStyleType':'none'}}>{skills.li5}</li>
                    </ul>
                </article>

                <article className="skills__etc">
                    <h3 className="skill__title">{skills.etitle}</h3>
                    <ul>
                      <li style={{'listStyleType':'none'}}>{skills.b1}</li>
                      <li style={{'listStyleType':'none'}}>{skills.b2}</li>
                      <li style={{'listStyleType':'none'}}>{skills.b3}</li>
                    </ul>
                </article>
              
              
            </div> 
          </section>
        </>
    );
}

