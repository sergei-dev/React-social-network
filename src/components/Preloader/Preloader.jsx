import React from 'react';
import preloader from '../../assets/images/loading.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__imgWrap}>
                <img src={preloader} alt="preloader" />
            </div>
        </div>
    )
}

export default Preloader;