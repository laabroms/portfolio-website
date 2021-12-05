import React, { useContext } from 'react';
import Navbar from '../../components/navbar/Navbar';
import styles from './home.module.css';

const HomeScreen = () => {

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.containerCenter}>
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;