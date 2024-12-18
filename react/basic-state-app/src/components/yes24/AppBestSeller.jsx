import React, {useState, useEffect} from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';

export default function AppBestSeller() {

    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState('total');

    useEffect(()=> {
        fetch("/data/yes24.json")
            .then(data => data.json())
            .then(jsonData => {

                setMenuList(jsonData.menuList)

                if(category === 'total') {
                    
                    setBookList(jsonData.bookList);

                } else {
                    //category 값에 따라 필터링 처리 후 setBookList에 추가
                    // 방법론쪽으로 로직 검사

                    const filterBooks = 
                        jsonData.bookList.filter((book) => book.category === category);
                    
                    setBookList(filterBooks);
                    
                    
                        //[{book}, {book}]


                }

            })
                
            .catch(error => console.log(error));
    }, [category]);

    //useEffect 재호출 -> dependency 인터뷰 질문 용어 이해

    //AppBestSeller <-- MenuList <-- Menu, 경로 이해
    const handleMenuClickReq2 = (category) => {
        // console.log(`AppBestSeller ---> ${category}`);
        setCategory(category);
    };


    console.log(`category --> ${category}`);
    

    return (
        <div className='container'>
            <MenuList list ={menuList} click = {handleMenuClickReq2} />
            <BestBook list ={bookList} />
        </div>
    );
}

/**
 * 에러 나는 경우
 * 1. 철자 빠짐
 * 2. /, . 이 뒤바뀌거나 빠짐
 * 
 * 
 */
