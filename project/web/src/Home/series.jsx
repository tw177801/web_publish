import React, {useState, useEffect} from 'react';

export default function Series() {

    const [list, setList] = useState([]);

        useEffect(()=> {
            fetch("/data/seires.json")
                .then(data => data.json())
                .then(jsonData => {
                    setList(jsonData);
                })
                .catch();
        }, [])


    return (
        <div className='slider-container'>
            <div className='content-title'>시리즈</div>
            <div className='content-container'>
                <ul>
                    {list && list.map((item, index)=>

                        <li key={index}>

                            <div className='content-seires'>
                                <div className="content-list-seires"></div>
                                <p>{item.title}</p>
                            </div>


                        </li>

                    )}

                </ul>
            </div>
            <div></div> 

        </div>
    );
}

