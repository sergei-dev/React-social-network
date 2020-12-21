import React from 'react';
import styles from './Pagination.module.css';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div className={styles.pagination}>
            <ul className={styles.paginationList}>
                {
                    pages.map(page => {
                        return <li onClick={(e) => props.setCurrentPage(page)} className={`${styles.paginationItem} ${props.currentPage === page ? styles.paginationItemActive : null}`}>{page}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination;