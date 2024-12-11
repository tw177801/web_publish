import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import MenuList from './header/MenuList.jsx';

import './Olive.css';
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
    return (
        <>
            <Header>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" 
                    alt="" 
                    />
                <MenuList />
            </Header>
        
            <Body>

                <ProductList />


            </Body>




        </>
    );
}

