import React from 'react';
import './PortfolioBody.css';

export default function Mywork(work) {



    return (
        <div>
            <section id="work" className="section max-container">    
                <h2 className="title">{work.title}</h2>
                <p className="description">{work.description}</p>

                <ul className="categories">
                    <li style={{'listStyleType':'none'}}><button className="category category--selected">{work.category}<span className="category__count">8</span></button></li>
                    <li style={{'listStyleType':'none'}}><button className="category">{work.ct1}<span className="category__count">4</span></button></li>
                    <li style={{'listStyleType':'none'}}><button className="category">{work.ct2}<span className="category__count">2</span></button></li>
                    <li style={{'listStyleType':'none'}}><button className="category">{work.ct3}<span className="category__count">2</span></button></li>
                </ul>

                <ul className="projects">
                    <li className="project" style={{'listStyleType':'none'}}>
                    <img className="project__img" src={work.pimg} alt="project1"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li >

                    <li className="project" style={{'listStyleType':'none'}}>
                    <img className="project__img" src={work.pimg2} alt="project2"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle2}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>

                    <li className="project">
                    <img className="project__img" src={work.pimg3} alt="project3"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle3}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                    <li className="project">
                    <img className="project__img" src={work.pimg4} alt="project4"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle4}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                    <li className="project">
                    <img className="project__img" src={work.pimg5} alt="project5"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle5}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                    <li className="project">
                    <img className="project__img" src={work.pimg6} alt="project6"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle6}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                    <li className="project">
                    <img className="project__img" src={work.pimg7} alt="project7"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle7}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                    <li className="project">
                    <img className="project__img" src={work.pimg8} alt="project8"/>
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{work.mtitle8}</h3>
                        <p>{work.pcontent}</p>
                    </div>
                    </li>
                </ul>    
            </section>
        </div>
    );
}

