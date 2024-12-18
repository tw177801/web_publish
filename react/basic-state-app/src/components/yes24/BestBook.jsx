import React from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({list}) {
    
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
            {list && list.map((book, i) => 

                <div className='total-content' 
                    style={{'display':'flex'}}>
                    {/* <div>전체카트수량 : {totalQty}</div> */}

                    <BestBookAvatar 
                            rank={i+1} 
                            img={book.img}        
                    />

                    <BestBookContent 
                            suggest = {book.suggest}
                            today = {book.today}
                            type = {book.type}
                            title= {book.title}
                            author = {book.author}
                            company = {book.company}
                            pubDate= {book.pubDate}
                            price= {book.price}
                            perSale= {book.perSale}
                            point= {book.point}
                    />

                    <BestBookButton />
                        {/* {list.map((item) => 
                        
                        <div style={{display: 'flex'}}>
                                <img src={item.img} width="100px"/>
                                <BestBookButton qtyChange={handleChangeQty}/>
                            </div>
                        
                        )} */}

                </div>
            )}
        </>
    );
    
}

