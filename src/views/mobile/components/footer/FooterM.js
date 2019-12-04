import React from 'react'
import styles from './FooterM.module.scss';

export const FooterM = () => {
    return (
        <footer className={styles.footer}>
            <a className={`f-text-button--mobile ${styles.footer__button}`} href="https://lotto.pl">Rejestruję się i GRAM</a>
        </footer>
    )
}
