import Counter from './Counter2.jsx';
import { useState } from 'react';
import './Counter2.css';

export default function AppCounter2() {

    const [totalNumber, setTotalNumber] = useState(0);
    
    const handleClick = (number, type) => {

        if(number < 10 && type === '+' ) {
            setTotalNumber(totalNumber + 1);
        } else if(number > 0 && type === '-') {
            setTotalNumber(totalNumber - 1);
        }
    }

    return (
        <div className="counter-container">
            <Counter total = {totalNumber} click={handleClick} />
            <Counter total = {totalNumber} click={handleClick} />
            <Counter total = {totalNumber} click={handleClick} />
        </div>
    );
}