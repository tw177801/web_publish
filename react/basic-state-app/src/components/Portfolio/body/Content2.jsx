import React, {useState, useEffect} from 'react';
import Body2 from './Body2.jsx';

export default function Content() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/data/content.json")
        .then(data => data.json())
        .then(jsonData => {
            setSkills(jsonData.skills);
           
            
            // setContent(jsonData.body-content);
        })
        .catch();
    }, []);



    return (
        <>
            <div>
            
                <ul>
                {skills && skills.map(skills =>
                    <li style={{'list-style-type': 'none'}}>
                        <Body2 
                            t1={skills.t1}
                            t2={skills.t2}
                            c1={skills.c1}
                            stitle={skills.stitle}
                            sc1={skills.sc1}
                            sc2={skills.sc2} 
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



        </>
    );
}

