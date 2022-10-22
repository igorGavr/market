import './App.css';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaBlock title="Mexican" price="200"/>
                            <PizzaBlock title="Hawa" price="230"/>
                            <PizzaBlock title="Cheesy" price="250"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
