import React from 'react';
import {BrowerRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout.jsx';



export default function AppRouter2() {



    return (
        <div>
            
            <BrowerRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}> {/**Layout 관련 컴포넌트 */}
                        <Route index element= {<Home/>} />
                    </Route>
                </Routes>
            </BrowerRouter>


        </div>
    );
}

function Home() {
    
    
    return (

        <h1>Home!!!</h1>

    );
}
