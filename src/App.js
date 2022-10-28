import { Routes, Route} from "react-router-dom";
import React from "react";
import {useState} from "react";

import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Cart} from "./pages/Cart";


export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');


    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </div>
                </SearchContext.Provider>
            </div>
        </div>
    );
}

export default App;
