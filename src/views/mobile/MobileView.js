import React, { Component } from 'react'
import {HeaderM} from './components/header/HeaderM';
import {MainM} from './components/main/MainM';
import {FooterM} from './components/footer/FooterM'
import styles from './MobileView.module.scss';

export class MobileView extends Component {
    render() {
        return (
            <div className={styles.heightWrapper}>
                 <HeaderM />
                 <MainM />
                 <FooterM />
            </div>
        )
    }
}