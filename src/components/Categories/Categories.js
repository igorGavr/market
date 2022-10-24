import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div>
            <div className="categories">
                <ul>
                    {categories.map((value, i) =>
                            <li key={i} onClick={() => onClickCategory(i)}
                                className={activeIndex === i ? 'active' : ''}>{value}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export {Categories};
