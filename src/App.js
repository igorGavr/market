import {Routes, Route} from "react-router-dom";

import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Cart} from "./pages/Cart";
import {useState} from "react";


function App() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="App">
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                        <Routes>
                            <Route path="/" element={<Home searchValue={searchValue}/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
