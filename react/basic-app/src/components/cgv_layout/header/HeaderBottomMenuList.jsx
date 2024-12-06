import HeaderBottomMenu from './HeaderBottomMenu.jsx';
import { useState, useEffect } from 'react';
import { fetchJSON } from '../js/commons.js';

//item => item.name

export default function HeaderBottomMenuList() {
    

    const [ names, setNames] = useState([]);

        useEffect(()=> {
            
            fetchJSON("/data/cgv_header.json")
                .then(result => setNames(result.bottomMenuList))
                .catch(error => console.log(error));
            
            //   fetch("/data/cgv_header.json")
            //     .then(data => data.json())
            //     .then(jsonData => setNames(jsonData.bottomMenuList))
            //     .catch(error => console.log(error));

        }, []);
        
    // const names = [
    //     { "name": "영화" },   
    //     { "name": "극장" },
    //     { "name": "예매" },
    //     { "name": "스토어" },
    //     { "name": "이벤트" },
    //     { "name": "혜택" },
    // ];

    return (
        <ul class="flex-container">
            {names && names.map(item => 
                <li>
                    <HeaderBottomMenu name={item.name} />
                </li>           
            )}
        </ul>
    );
}