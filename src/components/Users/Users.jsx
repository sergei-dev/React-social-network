import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import Pagination from '../Pagination/Pagination';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {

    return (
        <div>
            <h2 className={styles.title}>Users</h2>
            <Pagination totalCount={props.totalCount} pageSize={props.pageSize} 
                setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}/>
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