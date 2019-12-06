import React, { Component } from 'react'
import styles from './Card2.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import {showCloud} from '../../../../../services/animationService/AnimationService';

import bg from "./images/card2bg.jpg"
import cloud1 from "./images/card2cloud1.svg";
import cloud2 from "./images/card2cloud2.svg";
import cloud3 from "./images/card2cloud3.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card2 extends Component {
    state = {
        isVisible: false,
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
                offset={{bottom: window.innerHeight/2}}
                resizeCheck={true}>

                <div style={{ height: 671 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>

                        <img className={`card__background`} style={{ height: 671 - 6 }} src={bg} alt="tło karty" />

                        <div onTransitionEnd={(e) => showCloud(e, '.js-card2-actor2')} style={{ transform: this.state.isVisible ? 'none' : 'translateX(500px)' }} className={`actor actor__kierownik ${styles.kierownik}`}>
                            <img src={kierownik} alt="kierownik" />
                            <div className={`js-cloud cloud ${styles.cloud_kierownik}`}>
                                <img src={cloud1} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Teraz zaangażujcie obie półkule mózgowe. Ustalcie hasło i sześciocyfrowy kod PIN.</p>
                            </div>
                        </div>

                        <div onTransitionEnd={(e) => showCloud(e, '.js-card2-actor3')} className={`js-card2-actor2 actor actor__marzycielka ${styles.marzycielka}`}>
                            <img className={``} src={marzycielka} alt="marzycielka" />
                            <div className={`js-cloud cloud ${styles.cloud_marzycielka}`}>
                                <img src={cloud2} alt="dymek marzycielki" />
                                <p className={`f-text--desktop text ${styles.text_marzycielka}`}>PIN będzie potrzebny w kontakcie z Obsługą Klienta. Zapiszę go w bezpiecznym miejscu. Może znów dodzwonię się do tego miłego pana…</p>
                            </div>
                        </div>

                        <div onTransitionEnd={(e) => showCloud(e, '')} className={`js-card2-actor3 actor actor__zartownis ${styles.zartownis}`}>
                            <img className={``} src={zartownis} alt="zartownis" />
                            <div className={`js-cloud cloud ${styles.cloud_zartownis}`}>
                                <img src={cloud3} alt="dymek zartownisia" />
                                <p className={`f-text--desktop text ${styles.text_zartownis}`}>He, he, albo do tej PIN-up girl…</p>
                            </div>
                        </div>

                    </div>

                </div>
            </Sensor>
        )
    }
}


