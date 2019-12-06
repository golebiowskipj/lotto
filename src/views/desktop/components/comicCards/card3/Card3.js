import React, { Component } from 'react'
import styles from './Card3.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import {showCloud} from '../../../../../services/animationService/AnimationService';
import bg from "./images/card3bg.jpg"
import cloud1 from "./images/card3cloud1.svg";
import cloud2 from "./images/card3cloud2.svg";
import cloud3 from "./images/card3cloud3.svg";
import kierownik from '../../../images/kierownik.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card3 extends Component {
    state = {
        isVisible: false,
    }

    onChange = (isVisible) => {
        this.setState({ isVisible });
    }
    render() {
        return (
            <Sensor
                active={!this.state.isVisible}
                onChange={this.onChange}
                partialVisibility={true}
                offset={{bottom: window.innerHeight/2}}
                resizeCheck={true}>
                <div style={{ height: 470 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: 470 - 6 }} src={bg} alt="tło karty" />

                        <div onTransitionEnd={(e) => showCloud(e, '.js-card3-actor2')} style={{transform: this.state.isVisible ? 'none' : 'translateX(500px)'}} className={`js-card3-actor1 actor actor__kierownik ${styles.kierownik}`}>
                            <img src={kierownik} alt="kierownik" />

                            <div className={`js-cloud cloud ${styles.cloud_kierownik}`}>
                                <img src={cloud1} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Wpisujemy teraz PESEL, serię i numer dowodu osobistego...</p>
                            </div>


                            <div className={`js-card3-cloud2 cloud ${styles.cloud_kierownik2}`}>
                                <img src={cloud3} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Wstęp tylko dla pełnoletnich. Sorry za zapory.</p>
                            </div>

                        </div>


                        <div onTransitionEnd={(e) => showCloud(e, '', '.js-card3-cloud2')} className={`js-card3-actor2 actor actor__zartownis ${styles.zartownis}`}>
                            <img className={``} src={zartownis} alt="zartownis" />

                            <div className={`js-cloud cloud ${styles.cloud_zartownis}`}>
                                <img src={cloud2} alt="dymek zartownisia" />
                                <p className={`f-text--desktop text ${styles.text_zartownis}`}>He, he, albo do tej PIN-up girl…</p>
                            </div>

                        </div>

                    </div>
                </div>
            </Sensor>
        )
    }
}


