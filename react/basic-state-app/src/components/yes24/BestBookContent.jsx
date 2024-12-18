import React from 'react';

export default function BestBookContent(props) {



    return (
        <div className='container-content'>

            <div className='contaner-content-tags'>


                {props.suggest && 
                    <button type='button'><span>강력추천</span></button>}
                {props.today &&
                    <button type='button'><span>오늘의책</span></button>}
                
                
            </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
            </div>
            <div>
                <span>{props.author} 저 |</span>
                <span>{props.company} |</span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}</span>
                <span>({props.perSale}% 할인)</span>
                <span>p {props.point}원</span>
            </div>
          



        </div>
    );
}

