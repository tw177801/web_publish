import {useState} from 'react';


export default function Counter() {

    const [number, setNumber] = useState(0); 
    // const [totalNumber, setTotalNumber] = useState(0); 


    function increment() {

        //삼항 연산자
        // (number < 10) ? setNumber(number+1) : setNumber(number) ;



        // if(number < 10) {
        //     setNumber(number+1);
        //     setTotalNumber(totalNumber + number);
        // }





        // if(number < 11) {
        //     setNumber(number+1);
        // } else {
        //     setNumber(10);
        // }
        
    }
    
    function dcrement() {

        (number > 0) ? setNumber(number-1) : setNumber(0) ;
        // setNumber(number-1);


    }

    return (
        <div className="container">
            <div>
                <span className="number">{number} / </span>
                <span className="total-number">{totalNumber}</span>
            </div>
            <button type="button"
                    className="button"
                    onClick={increment}>
                        증가(+)</button>
            
            <button type="button"
                    className="button"
                    onClick={dcrement}>
                        감소(-)</button>
        </div>
    );
}

// 변수는 증감식 표현 사용 안 됨