import React from 'react'
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a className={`f-text-button--desktop ${styles.footer__button}`} href="https://gry.lotto.pl/pl/registration.html">Rejestruję się i GRAM</a>
        </footer>
    )
}
