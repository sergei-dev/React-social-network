import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
        
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <h2 className={styles.title}>Users</h2>
            <div className={styles.pagination}>
                <ul className={styles.paginationList}>
                    {
                        pages.map(page => {
                            return <li onClick={(e) => props.setCurrentPage(page)} className={`${styles.paginationItem} ${props.currentPage === page ? styles.paginationItemActive : null}`}>{page}</li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.usersList}>
                {props.users.map(user => <UserItem key={user.id}
                    userId={user.id}
                    fullName={user.name}
                    photoPath={user.photoPath != null ? user.photoPath : userPhoto}
                    followed={user.followed}
                    status={user.status}
                    city={'user.location.city'}
                    country={'user.location.country'}
                    follow={props.follow}
                    unFollow={props.unFollow}
                    followingInProgress={props.followingInProgress}
                    toggleIsFollowingProgress={props.toggleIsFollowingProgress} />)}
            </div>
        </div>
    )
}

export default Users;