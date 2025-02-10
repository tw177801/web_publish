import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title.jsx';

export default function Series() {

    return (

        <>
            <div className=''>
                {/* media series item */}
                <div className='flex space-x-4 mx-7'>

                    <div className='bg-[#1a8550] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className=''><img src="/image/series1.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>바운드 시리즈</p></Link>
                    </div>

                    <div className='bg-[#234a89] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className=''><img src="/image/series2.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>임팩트 시리즈</p></Link>
                    </div>
                    
                    <div className='bg-[#a2220c] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className=''><img src="/image/series3.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>링 시리즈</p></Link>
                    </div>
                    
                    <div className='bg-[#6a5c06] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className='bg-[#fff] rounded-[13px]'><img src="/image/series4.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>미러 시리즈</p></Link>                    
                    </div>
                    
                    <div className='bg-[#520214] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className='bg-[#fff] rounded-[13px]'><img src="/image/series5.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>Essentials by CASETiFY™</p></Link>
                    </div>
                    
                    <div className='bg-[#1a8550] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>
                        <div className=''><img src="/image/series6.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                        <Link to=''><p className='text-[#e8e6e3] font-extrabold'>BioVeg &amp; 페블 레더 시리즈</p></Link>    
                    </div>

                </div>

                {/* media button series item */}
                <div className=''>
                    <div>

                    </div>

                    <div>
                        
                    </div>
                </div> 

            </div>


            <Title />

        </>
    );
}

