import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <img src="https://www.ivi.ru/titr/uploads/2017/01/19/610760fe6d047dfe965f22f77256c9fa.jpg/1400x0" className={styles.img} />
                </div>
                <div className={styles.wrap}>
                    <p className={styles.text}>{props.text}</p>
                </div>
            </div>
            <div className={styles.likeInfo}>
                <span className={styles.like}>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;