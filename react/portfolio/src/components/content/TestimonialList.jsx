import React from 'react';
import Testimonial from './Testimonial.jsx';

export default function TestimonialList() {

    const List = [

        {
            "img" : "images/testimonials/people1.webp",
            "alt" : "people1",
            "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name" : "James Kim",
            "company" : "Google"
        },
        {
            "img" : "images/testimonials/people2.webp",
            "alt" : "people2",
            "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name" : "Smith Park",
            "company" : "Samsung"
        },
        {
            "img" : "images/testimonials/people3.webp",
            "alt" : "people3",
            "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name" : "Anna Jin",
            "company" : "Samsung"
        }

    ]

    return (
        <ul className='testimonials'>
            {List && List.map((monial) => 
                <li className='testimonial'>
                    <Testimonial 

                        img={monial.img}
                        alt={monial.alt}
                        description={monial.description}
                        name={monial.name}
                        company={monial.company}
                    
                    />

                </li>     
            )}
        </ul>
    );
}

