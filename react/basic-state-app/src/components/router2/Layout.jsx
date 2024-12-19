import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {


    return (
        <div>


            <Header>
                <Link to="">Home</Link>
            </Header>

            <Outlet/>

            {/* <Footer>
                <div style={{}}>Footer</div>
            </Footer> */}
        </div>
    );
}

