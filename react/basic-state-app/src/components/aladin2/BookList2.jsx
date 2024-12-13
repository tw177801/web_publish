import React, { useState, useEffect } from 'react';
import Book2 from '../aladin2/Book2.jsx';


export default function BookList2() {

    const [books, setBooks] = useState([]);
    const [type, setType] = useState('total');


        useEffect(()=> {

            console.log(`selectCategory --> ${selectCategory}`);
            
            fetch("/data/aladin2.json")
                .then(data => data.json())
                .then(jsonData => {
                    if(type === 'total') {
                        setBooks(jsonData.books);
                        
                    } else {
                        const filterBooks 
                            = jsonData.books.filter( book => book.type === type );
                    }
                })
                .catch(error => console.log(error));

        }, [type]);


    const handleTypeClick = (event) => {
        setType(event.target.value);
    }



    return (

        <>
            <div>
                [{type}]
                <input type="radio" name="type" value="total" onClick={handleTypeClick} /> 전체 도서
                <input type="radio" name="type" value="domestic" onClick={handleTypeClick} /> 국내 도서
                <input type="radio" name="type" value="overseas" onClick={handleTypeClick} /> 국외 도서
                
                <select onChange={handleChangeCategory}>

                    <option value="선택">선택</option>
                    {category && category.map((item)=>
                        <option value={item.name}>{item.name}</option>
                    )}

                </select>

            </div>

            <ul sylte={{'display':'grid', 'grid-template-columns': 'repeat(4, 1fr)'}}>

                {books && books.map(book =>
                    <li style={{'list-style-type': 'none'}}>
                        <book img={book.img} title={book.title} />
                    </li>
                )}

            </ul>

        </>
    );
}

