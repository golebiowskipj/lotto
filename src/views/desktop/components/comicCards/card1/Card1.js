import React, { Component } from 'react'
import styles from './Card1.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';

import bg from "./images/card1bg.jpg"
import cloud1 from "./images/card1cloud1.svg";
import cloud2 from "./images/card1cloud2.svg";
import cloud3 from "./images/card1cloud3.svg";
import cloud4 from "./images/card1cloud4.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card1 extends Component {
    state = {
        isVisible: false,
    }

    showActor1Cloud1 = (e) => {
        const cloud = e.target.querySelector('.js-cloud');

        if (cloud !== null) {
            cloud.addEventListener('transitionend', () => {
                document.querySelector('.js-actor2').style.transform = 'none';
            })
            cloud.style.opacity = 1;
        }
    }

    showActor2Cloud1 = (e) => {
        const cloud = e.target.querySelector('.js-cloud');

        if (cloud !== null) {
            cloud.addEventListener('transitionend', () => {
                document.querySelector('.js-actor3').style.transform = 'none';
            })
            cloud.style.opacity = 1;
        }
    }

    showActor1Cloud2 = (e) => {
        const cloud = e.target.querySelector('.js-cloud');

        if (cloud !== null) {
            cloud.addEventListener('transitionend', () => {
                document.querySelector('.js-cloud2').style.opacity = 1;
            });
            cloud.style.opacity = 1;
        }

    }

    onChange = (isVisible) => {
        this.setState({ isVisible: isVisible });
    }
    render() {
        return (
            <Sensor
                active={!this.state.isVisible}
                onChange={this.onChange}
                partialVisibility={true}
                offset={{ bottom: window.innerHeight / 2 }}
                resizeCheck={true}>
                <div style={{ height: 671 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: 671 - 6 }} src={bg} alt="tło karty" />
                        <div onTransitionEnd={this.showActor1Cloud1} style={{ transform: this.state.isVisible ? 'none' : 'translateX(500px)' }} className={`actor actor__kierownik slideFromSide ${styles.kierownik}`}>
                            <img src={kierownik} alt="kierownik" />
                            <div className={`js-cloud cloud ${styles.cloud_kierownik}`}>
                                <img src={cloud1} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Za chwilę wejdziemy do świata kul… kultowych gier LOTTO.</p>
                            </div>
                            <div className={`js-cloud2 cloud ${styles.cloud_kierownik2}`}>
                                <img src={cloud4} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Zarejestrujmy się i zakręćmy po kody promocyjne!</p>
                            </div>
                        </div>
                        <div onTransitionEnd={this.showActor2Cloud1} className={`js-actor2 actor actor__zartownis ${styles.zartownis}`}>
                            <img className={``} src={zartownis} alt="zartownis" />
                            <div className={`js-cloud cloud ${styles.cloud_zartownis}`}>
                                <img src={cloud2} alt="dymek zartownisia" />
                                <p className={`f-text--desktop text ${styles.text_zartownis}`}>I to mnie kręci!</p>
                            </div>
                        </div>
                        <div onTransitionEnd={this.showActor1Cloud2} className={`js-actor3 actor actor__marzycielka ${styles.marzycielka}`}>
                            <img className={``} src={marzycielka} alt="marzycielka" />

                            <div className={`js-cloud cloud fadeIn ${styles.cloud_marzycielka}`}>
                                <img src={cloud3} alt="dymek marzycielki" />
                                <p className={`f-text--desktop text ${styles.text_marzycielka}`}>A mnie rozmarza…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Sensor>
        )
    }
}


