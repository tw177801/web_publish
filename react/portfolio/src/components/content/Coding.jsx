import React from 'react';
import CodingBar from './CodingBar';

export default function Coding() {

    const codeList = [
        {
            "title" : "HTML",
            "percent" : "98",
        },
        {
            "title" : "CSS",
            "percent" : "90",
        },
        {
            "title" : "JavaScript",
            "percent" : "90",
        },
        {
            "title" : "TypeScript",
            "percent" : "80",
        },
        {
            "title" : "React",
            "percent" : "79",
        },
        {
            "title" : "NodeJS",
            "percent" : "68",
        }
    ];



    return (

        <article className="sklls__coding">
          <h3 className="skill__title">Coding Skills</h3>
          <ul>
            {codeList && codeList.map((code) =>
            
                <li className="bar">
                    <CodingBar 
                        title={code.title}
                        percent={code.percent}
                    
                    />
                </li>          
            
            )}
          </ul>
        </article>

    );
}

