import React, {useState, useEffect} from 'react';
import Aboutme from './Aboutme.jsx';
import Myskills from './Myskills.jsx';
import Mywork from './Mywork.jsx';
import Testimonial from './Testimonial.jsx';

export default function Content() {

    const [content, setContent] = useState([]);
    const [skills, setSkills] = useState([]);
    const [work, setWork] = useState([]);
    const [testimonial, setTestimonial] = useState([]);

        useEffect(() => {
            fetch("/data/content.json")
            .then(data => data.json())
            .then(jsonData => {
                setContent(jsonData.about);
                setSkills(jsonData.skills);
                setWork(jsonData.work);
                setTestimonial(jsonData.testimonial);
                // setContent(jsonData.body-content);
            })
            .catch();
        }, []);



    return (

        <>
            <div>   
                <ul>
                    {content && content.map(about =>
                        <li style={{'list-style-type': 'none'}}>
                            <Aboutme 
                                title={about.title} 
                                content={about.content}
                                title2={about.title2} 
                                content2={about.content2}
                                title3={about.title3} 
                                content3={about.content3}
                                title4={about.title4} 
                                content4={about.content4}
                                job={about.job}
                                h1={about.h1}
                                h2={about.h2}
                                job2={about.job2}
                                h3={about.h3}
                                h4={about.h2}
                            />
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <ul>
                    {skills && skills.map(skills =>
                        <li style={{'list-style-type': 'none'}}>
                            <Myskills 
                                t1={skills.t1}
                                t2={skills.t2}
                                c1={skills.c1}
                                stitle={skills.stitle}
                                sc1={skills.sc1}
                                sc2={skills.sc2}
                                sc3={skills.sc3}
                                sc4={skills.sc4}
                                sc5={skills.sc5}
                                sc6={skills.sc6}
                                sc7={skills.sc7}
                                sc8={skills.sc8}
                                sc9={skills.sc9}
                                sc10={skills.sc10}
                                sc11={skills.sc11}
                                sc12={skills.sc12}
                                ptitle={skills.ptitle}
                                li1={skills.li1}
                                li2={skills.li2}
                                li3={skills.li3}
                                li4={skills.li4}
                                li5={skills.li5}
                                etitle={skills.etitle}
                                b1={skills.b1}
                                b2={skills.b2}
                                b3={skills.b3}
                            />
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <ul>
                    {work && work.map(work =>
                        <li style={{'list-style-type': 'none'}}>
                            <Mywork 
                                title={work.title}
                                description={work.description}
                                category={work.category}
                                ct1={work.ct1}
                                ct2={work.ct2}
                                ct3={work.ct3}
                                pcontent={work.pcontent}
                                pimg={work.pimg}
                                mtitle={work.mtitle}
                                pimg2={work.pimg2}
                                mtitle2={work.mtitle2}
                                pimg3={work.pimg3}
                                mtitle3={work.mtitle3}
                                pimg4={work.pimg4}
                                mtitle4={work.mtitle4}
                                pimg5={work.pimg5}
                                mtitle5={work.mtitle5}
                                pimg6={work.pimg6}
                                mtitle6={work.mtitle6}
                                pimg7={work.pimg7}
                                mtitle7={work.mtitle7}
                                pimg8={work.pimg8}
                                mtitle8={work.mtitle8}        
                            /> 
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <ul>
                    {testimonial && testimonial.map(testimonial =>
                        <li style={{'list-style-type': 'none'}}>
                            <Testimonial 
                                title={testimonial.title}
                                description={testimonial.description}
                                pcnt={testimonial.pcnt}
                                img={testimonial.img}
                                name={testimonial.name}
                                img2={testimonial.img2}
                                name2={testimonial.name2}
                                img3={testimonial.img3}
                                name3={testimonial.name3}             
                            /> 
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

