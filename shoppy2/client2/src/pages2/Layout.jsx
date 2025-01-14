import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components2/Header.jsx';
import Footer from '../components2/Footer.jsx';

export default function Layout() {
    return (
        <div>

            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
}

