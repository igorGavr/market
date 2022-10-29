import React, {useRef} from 'react';
import {useContext} from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import qs from 'qs';
import {Categories} from "../components/Categories/Categories";
import {Sort, sortList} from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {setCategoryId, setCurrentPage, setFilters} from "../redux/slices/filterSlice";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const isSearch = useRef(false);
    // const isMounted = useRef(false);
    const {categoryId, sort, currentPage} = useSelector((state) => state.filter);

    const {searchValue} = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }
    const fetchPizzas = () => {
        setIsLoading(true);
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://6356a1759243cf412f89c342.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sort.sortProperty,
            categoryId,
            currentPage,
        })
        navigate(`?${queryString}`);
        // потрібно пофіксити адресну стрічку щоб при першому запиті не було Квері параметрів
        // if (isMounted.current){
        //     const queryString = qs.stringify({
        //         sortProperty: sort.sortProperty,
        //         categoryId,
        //         currentPage,
        //     })
        //     navigate(`?${queryString}`);
        // }
        // isMounted.current = true;
    }, [categoryId, sort.sortProperty, currentPage])
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            );
            // isSearch.current = true;
        }
    }, [])

    useEffect(() => {
        fetchPizzas();
        // не можу зрозуміти чому не вдається зробити так
        // щоб при запуску Апки відбувався лише один запит
        // if (!isSearch.current){
        //     fetchPizzas();
        // }
        // isSearch.current = false;
    }, [categoryId, sort.sortProperty, searchValue, currentPage])







    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export {Home};
