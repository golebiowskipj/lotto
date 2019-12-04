import React from 'react'
import styles from './HeaderM.module.scss';

import logo from '../../images/logo-mobile.svg';

export const HeaderM = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo lotto" />
        </header>
    )
}
