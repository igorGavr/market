import { Routes, Route} from "react-router-dom";
import React from "react";
import {useState} from "react";

import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Cart} from "./pages/Cart";
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement } from "./redux/slices/filterSlice";

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
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
