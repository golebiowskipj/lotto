import React, { Component } from 'react'
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import styles from './DesktopView.module.scss';

export class DesktopView extends Component {
    render() {
        return (
            <div className={styles.scrollWrapper}>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
