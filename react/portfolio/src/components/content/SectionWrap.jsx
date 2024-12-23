import React from 'react';
import Majors from './Majors.jsx'

export default function SectionWrap({id, title, description, children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
            {/* {id === 'skill' && <p className="description">{description}</p>} */}
            {id === 'skill' ? <p>{description}</p>
                : <p className="description">{descripton}</p>}
            {children}
        </section>
    );
}

