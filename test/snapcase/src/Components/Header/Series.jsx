import React from 'react';
import Title from './Title.jsx';

export default function Series() {

    


    return (

        <>
            <div className='slider-container'>
                <div className='content-title'>시리즈</div>

                <div className='content-container'>

                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series1'><p>바운스 시리즈</p></div>
                    </div>

                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series2'><p>임팩트 시리즈</p></div>
                    </div>
                    
                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series3'><p>링 시리즈</p></div>
                    </div>
                    
                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series4'><p>미러 시리즈</p></div>
                    </div>
                    
                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series5'><p>Essentials by CASETiFY™</p></div>
                    </div>
                    
                    <div className='item-contaner'>
                        <div className='item-banner'></div>
                        <div className='item-series6'><p>BioVeg &amp; 페블 레더 시리즈</p></div>
                    </div>

                </div>
                <div></div> 

            </div>


            <Title />

        </>
    );
}

