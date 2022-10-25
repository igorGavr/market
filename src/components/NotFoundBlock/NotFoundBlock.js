import React from 'react';

import css from './NotFoundBlock.module.css'

const NotFoundBlock = () => {
    return (
        <div className={css.root}>
            <h1>Nothing found</h1>
            <span>😕</span>
            <p className={css.description}>Unfortunately, this page is not available in our online store</p>
        </div>
    );
};

export {NotFoundBlock};
