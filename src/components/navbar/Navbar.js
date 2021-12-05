import React from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/images/icon.png';
import ThemeButton from '../themeButton/themeButton';

const Navbar = () => {
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img src={logo} className={styles.logo} alt={'logo'} />
                <div>
                <div className={styles.navItem}>
                    SHOP
                </div>
                <ThemeButton />
                </div>
            </div>
        </div>
        <div style={{height: '60px', width: '100%'}}></div>
        </>
    );
};

export default Navbar;