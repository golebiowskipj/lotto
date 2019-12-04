import React from 'react'
import { comicCardsm } from '../../../../services/comicCardsFactory/ComicCardsFactory';
import styles from './MainM.module.scss';
import {Card1} from '../comicCards/card1/Card1';
import {Card2} from '../comicCards/card2/Card2';
import {Card3} from '../comicCards/card3/Card3';
import {Card4} from '../comicCards/card4/Card4';
import {Card5} from '../comicCards/card5/Card5';
import {Card6} from '../comicCards/card6/Card6';

export const MainM = () => {
    return (
        <main className={styles.mobileGrid}>
            <div className={styles.screen}>
                <Card1 data={comicCardsm[0]} />

            </div>
            <div>b</div>
        </main>
    )
}
