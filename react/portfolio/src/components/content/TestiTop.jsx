import React from 'react';

export default function TestiTop(title, description) {
    return (
        <>
            <section id="testimonial" class="section max-container">
                <h2 class="title">{title}</h2>
                <p class="description">{description}</p>
            </section>  
        </>
    );
}

