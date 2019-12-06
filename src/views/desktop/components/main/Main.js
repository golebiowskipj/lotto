import React from 'react'
import styles from './Main.module.scss';
import { Card1 } from '../comicCards/card1/Card1';
import { Card2 } from '../comicCards/card2/Card2';
import { Card3 } from '../comicCards/card3/Card3';
import { Card4 } from '../comicCards/card4/Card4';
import { Card5 } from '../comicCards/card5/Card5';
import { Card6 } from '../comicCards/card6/Card6';

export const Main = () => {
    return (
        <main className={styles.mainGrid}>
            <div className={styles.gradient__toRight}></div>
            <section className={styles.track}>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Card6 />
            </section>
            <div className={styles.gradient__toLeft}></div>
        </main>
    )
}


