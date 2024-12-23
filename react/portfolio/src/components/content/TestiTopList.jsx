import React from 'react';
import TestiTop from './TestiTop.jsx';

export default function TestiTopList() {

    const Testi = [

        {
            "title" : "Testimonial",
            "description" : "See what they say about me"

        }

    ];


    return (
        <ul>
            {Testi && Testi.map((test)=>
            
                <li>
                    <TestiTop
                        title={test.title}
                        description={test.description}
                    />
                </li>
            
            )}

        </ul>
    );
}

