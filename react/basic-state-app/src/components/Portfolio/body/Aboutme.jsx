import React from 'react';
import './PortfolioBody.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//About me





export default function Aboutme(about) {
    

    
    

    return (
        <>

            <section id="about" class="section max-container">

                <h2 class="title">{about.title}</h2>
                <p class="description">{about.content}</p>

                <ul class="majors">
                    <li class="major">
                        <i class="fa-brands fa-html5 major__icon"></i>
                        <p class="major__title">{about.title2}</p>
                        <p>{about.content2}</p>
                    </li>
                </ul>

                <ul class="jobs">
                    <li class="job">
                        <img src={about.job} alt="google"/>
                            <div>
                                <p class="job__name">{about.h1}</p>
                                <p class="job__period">{about.h2}</p>
                            </div>
                    </li>
                </ul>

            </section>
        
        </>
    );
}
