import React, {useState} from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import MenuList from './header/MenuList.jsx';


import './Olive.css';
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
    // const [id, setId] = useState('');
    const [cartList, setCartList] = useState([]);
    
    // 배열에 id 저장 ---> 배열의 길이 ---> cartCount
    // 객체 형태. 스프레드처럼 풀어야 함

    const handleCartApp = (id) => {

        // alert(`AppOlive --> ${id}`);
        // setId(id);
        setCartList([...cartList, id]); //최종 코드
        // cartList.push(id);
        // list.push(id);

    }

    console.log(`cartList --> ${cartList}`);

    return (
        <>
            <Header className="header-content">
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" 
                    className='header-logo' />
                {/* <MenuList id={id} /> */}
                <MenuList count={cartList.length} />
            </Header>
        

            <Body>

                <ProductList cart = {handleCartApp} />

                
            </Body>



        </>
    );
}

// cartList, setCartList 스프레드 이해