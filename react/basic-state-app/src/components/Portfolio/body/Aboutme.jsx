import React from 'react';
import './PortfolioBody.css';




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
                    <li class="major">
                        <i class="fa-solid fa-mobile major__icon"></i>
                        <p class="major__title">{about.title3}</p>
                        <p>{about.content3}</p>
                    </li>
                    <li class="major">
                        <i class="fa-solid fa-server major__icon"></i>
                        <p class="major__title">{about.title4}</p>
                        <p>{about.content4}</p>
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
                    <li class="job">
                        <img src={about.job2} alt="samsung"/>
                            <div>
                                <p class="job__name">{about.h3}</p>
                                <p class="job__period">{about.h4}</p>
                            </div>
                    </li>
                </ul>

            </section>
        
        </>
    );
}

