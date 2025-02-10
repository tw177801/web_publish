import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/Components/Header/Home.jsx';

export default function App() {


  return (
    <div className="">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/products" element={<BookmarkPage/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

