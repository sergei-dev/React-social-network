import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.activeName} className={styles.name}>
                <div className={styles.avatarWrap}>
                    <img src="https://www.ivi.ru/titr/uploads/2017/01/19/610760fe6d047dfe965f22f77256c9fa.jpg/1400x0" className={styles.avatar} alt="" />
                </div>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;