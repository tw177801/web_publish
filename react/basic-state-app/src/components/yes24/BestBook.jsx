import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook() {
    
    // const [totalQty, setTotalQty] = useState(0);

    // const list = [
    //     {"img": "https://image.yes24.com/goods/117958120/XL"},
    //     {"img": "https://image.yes24.com/goods/108422348/L"},
    //     {"img": "https://image.yes24.com/goods/133213071/L"}
    // ];

    // const handleChangeQty = (qty) => {
    //     setTotalQty(totalQty+qty);
    // }




    return (
        <>
        <div style={{'display':'flex'}}>
            {/* <div>전체카트수량 : {totalQty}</div> */}

            <BestBookAvatar 
                rank="1" 
                img="https://image.yes24.com/goods/13137546/L"        
            />

            <BestBookContent 
                suggest = {true}
                today = {true}
                type = "도서"
                title= "소년이 온다"
                author = "한강"
                company = "창비"
                pubDate= "2014년 05월"
                price="13,500원"
                perSale="10"
                point="750"
            />

            <BestBookButton />
                {/* {list.map((item) => 
                
                <div style={{display: 'flex'}}>
                        <img src={item.img} width="100px"/>
                        <BestBookButton qtyChange={handleChangeQty}/>
                    </div>
                
                )} */}
                
        </div>
        </>
    );
    
}

