import React, { Component } from 'react'
import styles from './Card5.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';
import { slide, fade } from '../../../../../services/animationVariables/AnimationVariables';

import bg from "./images/card5bg.jpg"
import cloud1 from "./images/card5cloud1.svg";
import cloud2 from "./images/card5cloud2.svg";
import cloud3 from "./images/card5cloud3.svg";
import cloud4 from "./images/card5cloud4.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card5 extends Component {
    state = {
        isVisible: true,
    }

    onChange = (isVisible) => {
        this.setState({ isVisible });
    }

    render() {
        return (
            // <Sensor
            //     active={!this.state.isVisible}
            //     onChange={this.onChange}
            //     minTopValue={400}
            //     resizeCheck={true}>
                <div style={{ height: 640 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: 640 - 6 }} src={bg} alt="tło karty" />
                        <Fade right when={this.state.isVisible} duration={slide}>
                            <div className={`actor actor__kierownik ${styles.kierownik}`}>
                                <img src={kierownik} alt="kierownik" />
                                <Fade when={this.state.isVisbile} delay={slide} duration={fade}>
                                    <div className={`cloud ${styles.cloud_kierownik}`}>
                                        <img src={cloud1} alt="dymek kierownika" />
                                        <p className={`f-text--desktop text ${styles.text_kierownik}`}>Prosimy Was o ustawienie limitów gry – czasowego i kwotowego.</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                        <Fade left when={this.state.isVisible} delay={slide + fade} duration={slide}>
                            <div className={`actor actor__zartownis ${styles.zartownis}`}>
                                <img className={``} src={zartownis} alt="zartownis" />
                                <Fade when={this.state.isVisbile} delay={slide + fade + slide} duration={fade}>
                                    <div className={`cloud ${styles.cloud_zartownis}`}>
                                        <img src={cloud2} alt="dymek zartownisia" />
                                        <p className={`f-text--desktop text ${styles.text_zartownis}`}>Teraz to mnie wkręcasz.</p>
                                    </div>
                                </Fade>
                                <Fade when={this.state.isVisbile} delay={slide + fade + slide + fade + slide + fade + fade} duration={fade}>
                                    <div className={`cloud ${styles.cloud_zartownis2}`}>
                                        <img src={cloud4} alt="dymek zartownisia" />
                                        <p className={`f-text--desktop text ${styles.text_zartownis}`}>To co? Turlamy się już do gry?</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                        <Fade right when={this.state.isVisible} delay={slide + fade + slide + fade} duration={slide}>
                            <div className={`actor actor__marzycielka ${styles.marzycielka}`}>
                                <img className={``} src={marzycielka} alt="marzycielka" />
                                <Fade when={this.state.isVisbile} delay={slide + fade + slide + fade + slide} duration={fade}>
                                    <div className={`cloud ${styles.cloud_marzycielka}`}>
                                        <img src={cloud3} alt="dymek marzycielki" />
                                        <p className={`f-text--desktop text ${styles.text_marzycielka}`}>Ach, to jest cool pomysł! Przy takim wyborze gier łatwo zapomnieć o całym świecie.</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
            // </Sensor>
        )
    }
}

