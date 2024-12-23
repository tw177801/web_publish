import React from 'react';
import Majors from './Majors.jsx'

export default function SectionWrap({id, title, descripton, children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
            <p className="description">{descripton}</p>
            {children}
            <Majors />
            <ul className="majors">
                <li className="major">
                    <i className="fa-brands fa-html5 major__icon"></i>
                    <p className="major__title">Front-end</p>
                    <p>HTML, CSS, JavaScript, TypeScript, React, WebAPIs</p>
                </li>
                <li className="major">
                    <i className="fa-solid fa-mobile major__icon"></i>
                    <p className="major__title">Mobile</p>
                    <p>Android Studio, React Native, iOS, Swift, Java, Kotlin</p>
                </li>
                <li className="major">
                    <i className="fa-solid fa-server major__icon"></i>
                    <p className="major__title">Back-end</p>
                    <p>Java, JavaScript, Go, Kotlin, Spring, Spring Boot</p>
                </li>
            </ul>
            <ul className="jobs">
                <li className="job">
                <img src="images/jobs/google.png" alt="google"/>
                <div>
                    <p className="job__name">Google as Junior Software Engineer</p>
                    <p className="job__period">2019 Oct - Until now</p>
                </div>
                </li>
                <li className="job">
                <img src="images/jobs/samsung.png" alt="samsung"/>
                <div>
                    <p className="job__name">Samsung as Junior Software Engineer</p>
                    <p className="job__period">2010 Oct - 2019 Oct</p>
                </div>
                </li>
            </ul>
        </section>
    );
}

