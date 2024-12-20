import React from 'react';

export default function Testimonial(testimonial) {


    return (
        <div>
            <section id="testimonial" class="section max-container">
                <h2 class="title">{testimonial.title}</h2>
                <p class="description">{testimonial.description}</p>
                <ul class="testimonials">
                    <li class="testimonial">
                        <img class="testimonial__img" src={testimonial.img} alt="people1"/>
                        <div class="testimonial__bubble">
                            <p>{testimonial.pcnt}</p>
                            <p><a href="#" class="testimonial__bubble__name">{testimonial.name}</a> / Google</p>
                        </div>
                    </li>
                    <li class="testimonial">
                        <img class="testimonial__img" src={testimonial.img2} alt="people2"/>
                        <div class="testimonial__bubble">
                            <p>{testimonial.pcnt}</p>
                            <p><a href="#" class="testimonial__bubble__name">{testimonial.name2}</a> / Samsung</p>
                        </div>
                    </li>
                    <li class="testimonial">
                        <img class="testimonial__img" src={testimonial.img3} alt="people3"/>
                        <div class="testimonial__bubble">
                            <p>{testimonial.pcnt}</p>
                            <p><a href="#" class="testimonial__bubble__name">{testimonial.name3}</a> / Samsung</p>
                        </div>
                    </li>
                </ul>
            </section>        
        </div>
    );
}

