import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersApi } from '../../../api/api';
import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.userContent}>
                <div className={styles.userLeft}>
                    <NavLink to={"/profile/" + props.userId}>
                        <div className={styles.userAvatarWrap}>
                            <img src={props.photoPath} alt={props.fullName} className={styles.userAvatar} />
                        </div>
                    </NavLink>
                    {props.followed ?
                        <button className={`button ${props.followingInProgress.some(id => id === props.userId) ? 'disabled' : ''}`} onClick={() => {props.unFollow(props.userId); }}
                        >UnFollow</button>
                        :
                        <button className={`button ${props.followingInProgress.some(id => id === props.userId) ? 'disabled' : ''}`} onClick={() => { props.follow(props.userId);}}
                        >Follow</button>}
                </div>
                <div className={styles.userRight}>
                    <div className={styles.userInfo}>
                        <h3 className={styles.fullName}>{props.fullName}</h3>
                        <span className={styles.userStatus}>{props.status}</span>
                    </div>
                    <div className={styles.userLocation}>
                        <p className={styles.userCounty}>{props.country}</p>
                        <p className={styles.userCity}>{props.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;