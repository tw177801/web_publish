import PackageContent from "./PackageContent";
import {useState, useEffect} from 'react';

export default function Package() {

    const [ plist, getList ] = useState([]);

    useEffect(()=>{

        fetch("/data/cgv_content.json")
            .then(data => data.json())
            .then(jsonData => getList(jsonData.packageList))
            .catch(error => console.log(error));

    }, []);
    

    return (     
        <div className="content-event-special"> 
            <section className="package-content-list">
                {plist && plist.map(object => 
                    <PackageContent
                            title={object.title}
                            list={object.list}
                    />
                )}
            </section>
        </div>
    );
}