import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import styles from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.link}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink} className={styles.link}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.activeLink} className={styles.link}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.activeLink} className={styles.link}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.activeLink} className={styles.link}>Settings</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.activeLink} className={styles.link}>Find users</NavLink>
                </li>
            </ul>
            <Friends friends={props.state.sidebarPage}/>
        </nav>
    )
}

export default Navbar;