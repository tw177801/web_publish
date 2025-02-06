// import logo from './logo.svg';
// import './App.css';
import './project.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Series from "./Components/Home/Series.jsx";



export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
            <Routes>
                
              <Route path='/' element={<Series/>} />

            </Routes>            
        </BrowserRouter>

    </div>
  );
}

