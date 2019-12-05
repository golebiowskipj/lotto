import React, { Component } from 'react'
import { comicCardsm } from '../../../../services/comicCardsFactory/ComicCardsFactory';
import styles from './MainM.module.scss';
import { Card1 } from '../comicCards/card1/Card1';
import { Card2 } from '../comicCards/card2/Card2';
import { Card3 } from '../comicCards/card3/Card3';
import { Card4 } from '../comicCards/card4/Card4';
import { Card5 } from '../comicCards/card5/Card5';
import { Card6 } from '../comicCards/card6/Card6';

export class MainM extends Component {
    state = {
        x0: 0,
        stage: 1,
    }

    touchStart = (e) => {
        this.setState({ x0: e.touches[0].screenX })
    }
    touchEnd = (e) => {
        const x0 = this.state.x0;
        const x1 = e.changedTouches[0].screenX;

        x0 > x1 ? this.nextStage() : this.prevStage();
    }

    nextStage = () => {
        if(this.state.stage < comicCardsm.length) this.setState({ stage: this.state.stage + 1 })        
    }

    prevStage = () => {
        if(this.state.stage > 1) this.setState({ stage: this.state.stage - 1 })
      
    }

    prevStageBtn = () => {
        this.setState({stage: 1})
    }

    displayStage = (stage) => {
        switch (stage) {
            case 1:
                return <Card1 data={comicCardsm[0]} />
            case 2:
                return <Card2 data={comicCardsm[1]} />
            case 3:
                return <Card3 data={comicCardsm[2]} />
            case 4:
                return <Card4 data={comicCardsm[3]} />
            case 5:
                return <Card5 data={comicCardsm[4]} />
            case 6:
                return <Card6 data={comicCardsm[5]} />
        }
    }

    render() {
        return (
            <main className={styles.mobileGrid}>
                {this.state.stage < 6
                    ?
                    <>
                        <div className={styles.screen} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                            {
                                this.displayStage(this.state.stage)
                            }
                        </div>
                        <div className={styles.nextButton}><button onClick={this.nextStage} type="button"></button></div>
                    </>
                    :
                    <>
                        <div className={styles.nextButton}><button onClick={this.prevStageBtn} type="button"></button></div>
                        <div className={styles.screen} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                            {
                                this.displayStage(this.state.stage)
                            }
                        </div>
                    </>
                }
            </main>
        )

    }
}
