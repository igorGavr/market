import {Routes, Route} from "react-router-dom";

import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Cart} from "./pages/Cart";


function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
