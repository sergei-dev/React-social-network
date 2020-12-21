import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_row}>
                    <div className={styles.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/404px-Apple_logo_black.svg.png" className={styles.logo_img} />
                    </div>
                    <div className={styles.login}>
                        {
                            props.isAuth ? <div>{props.login} - <button onClick={logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;