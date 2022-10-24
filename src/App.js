import './App.css';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";

import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://6356a1759243cf412f89c342.mockapi.io/pizzas')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
            });
    }, [])
    console.log(items)
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            {/*<Categories/>*/}
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {
                                items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
