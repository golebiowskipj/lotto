import React from 'react'
import styles from './Header.module.scss';
import logo from '../../images/logo-desktop.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo lotto" />
        </header>
    )
}
