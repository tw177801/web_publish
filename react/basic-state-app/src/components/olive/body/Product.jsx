import React from 'react';


export default function Product(props) {
    return (
        <div className='product-container'>

            <div>
                <img src={props.img} />
            </div>
                
            <p className='title'>{props.title}</p>
            <div className='description'>
                {props.description}
            </div>
        
            <div className="price">
                <span className='p1'>{props.price}원</span>
                <span className='p2'>{props.sprice}원</span>
            </div>
            <div className="tags">
                {props.isSale && <span className='t1'>세일</span>}
                {props.isCoupon && <span className='t2'>쿠폰</span>}
                {props.isToday && <span className='t3'>오늘드림</span>}
            </div>

        </div>
    );
}

