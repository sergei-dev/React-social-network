import React from 'react';
import styles from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={styles.friendItem}>
            <div className={styles.avatarWrap}>
                <img src="https://www.ivi.ru/titr/uploads/2017/01/19/610760fe6d047dfe965f22f77256c9fa.jpg/1400x0" className={styles.avatar} alt="" />
            </div>
            <p className={styles.name}>{props.name}</p>
        </div>
    )
}

export default FriendItem;