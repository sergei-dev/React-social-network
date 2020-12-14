import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import styles from './Friends.module.css';

const Friends = (props) => {

    const friendsItems = props.friends.friendsData.map(friend => <FriendItem key={friend.id} name={friend.name} />)

    return (
        <div className={styles.friends}>
            <h3 className={styles.title}>Friends</h3>
            <div className={styles.list}>
                {friendsItems}
            </div>
        </div>
    )
}

export default Friends;