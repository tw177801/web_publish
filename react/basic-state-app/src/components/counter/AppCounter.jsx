import Counter from './Counter.jsx';

import './Counter.css';

export default function AppCounter() {
    return (
        <div className="counter-container">
            <Counter />
            <Counter />
        </div>
    );
}