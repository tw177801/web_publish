import React, {useState, useEffect} from 'react';
import Body from './Body.jsx';

export default function Content() {

    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch("/data/content.json")
        .then(data => data.json())
        .then(jsonData => {
            setContent(jsonData.about);
           
            
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

                            <Body 
                                title={about.title} 
                                content={about.content}
                                
                                title2={about.title2}
                                content2={about.content2}

                                job={about.job}
                                h1={about.h1}
                                h2={about.h2}
                            />

                            
                        </li>
                    )}
                </ul>

            </div>



        </>
    );
}

