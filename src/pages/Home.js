import React from 'react';
import {useContext} from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { categoryId, sort } = useSelector((state) => state.filter);

    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    useEffect(() => {
        setIsLoading(true);
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId>0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(`https://6356a1759243cf412f89c342.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    );
};

export {Home};
