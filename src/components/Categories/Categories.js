import React, {useState} from 'react';

const Categories = ({ value, onClickCategory }) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div>
            <div className="categories">
                <ul>
                    {categories.map((categoryName, i) =>
                            <li key={i} onClick={() => onClickCategory(i)}
                                className={value === i ? 'active' : ''}>{categoryName}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export {Categories};
