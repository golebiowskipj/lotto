import React from 'react'
import styles from './Main.module.scss';
import { comicCards } from '../../../../services/comicCardsFactory/ComicCardsFactory';
import {Card1} from '../comicCards/card1/Card1';
import {Card2} from '../comicCards/card2/Card2';
import {Card3} from '../comicCards/card3/Card3';
import {Card4} from '../comicCards/card4/Card4';
import {Card5} from '../comicCards/card5/Card5';
import {Card6} from '../comicCards/card6/Card6';

export const Main = () => {
    return (
        <main className={styles.mainGrid}>
            <div className={styles.gradient__toRight}></div>
            <section className={styles.track}>
                <Card1 data={comicCards[0]} />
                <Card2 data={comicCards[1]} />
                <Card3 data={comicCards[2]} />
                <Card4 data={comicCards[3]} />
                <Card5 data={comicCards[4]} />
                <Card6 data={comicCards[5]} />
            </section>
            <div className={styles.gradient__toLeft}></div>
        </main>
    )
}


