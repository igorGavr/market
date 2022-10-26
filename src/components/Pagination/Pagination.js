import React from 'react';
import ReactPaginate from "react-paginate";

import css from './Pagination.module.css'

const Pagination = ({ onChangePage }) => {
    return (
        <>
            <ReactPaginate
                className={css.root}
                breakLabel="..."
                nextLabel=" >"
                previousLabel="< "
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export {Pagination};
