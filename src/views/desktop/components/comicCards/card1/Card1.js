import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Card1.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';
import { slide, fade } from '../../../../../services/animationVariables/AnimationVariables';

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
        isActive: true,
    }

    onChange = (isVisible) => {
        this.setState({ isVisible, isActive: false });
    }
    render() {
        return (
            <Sensor
                active={this.state.isActive}
                onChange={this.onChange}
                minTopValue={400}
                resizeCheck={true}>
                <div style={{ height: this.props.data.height }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: this.props.data.height - 6 }} src={bg} alt="tło karty" />
                        <Fade right when={this.state.isVisible} duration={slide}>
                            <div className={`actor actor__kierownik slideFromSide ${styles.kierownik}`}>
                                <img src={kierownik} alt="kierownik" />
                                <Fade when={this.state.isVisbile} delay={slide} duration={fade}>
                                    <div className={`cloud ${styles.cloud_kierownik}`}>
                                        <img src={cloud1} alt="dymek kierownika" />
                                        <p className={`f-text--desktop text ${styles.text_kierownik}`}>Za chwilę wejdziemy do świata kul… kultowych gier LOTTO.</p>
                                    </div>
                                </Fade>
                                <Fade when={this.state.isVisbile} delay={slide + fade + slide + fade + slide + fade + fade} duration={fade}>
                                <div className={`cloud ${styles.cloud_kierownik2}`}>
                                    <img src={cloud4} alt="dymek kierownika" />
                                    <p className={`f-text--desktop text ${styles.text_kierownik}`}>Zarejestrujmy się i zakręćmy po kody promocyjne!</p>
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
                                        <p className={`f-text--desktop text ${styles.text_zartownis}`}>I to mnie kręci!</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                        <Fade right when={this.state.isVisible} delay={slide + fade + slide + fade} duration={slide}>
                            <div className={`actor actor__marzycielka ${styles.marzycielka}`}>
                                <img className={``} src={marzycielka} alt="marzycielka" />
                                <Fade when={this.state.isVisbile} delay={slide + fade + slide + fade + slide} duration={fade}>
                                    <div className={`cloud fadeIn ${styles.cloud_marzycielka}`}>
                                        <img src={cloud3} alt="dymek marzycielki" />
                                        <p className={`f-text--desktop text ${styles.text_marzycielka}`}>A mnie rozmarza…</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Sensor>
        )
    }
}

Card1.propTypes = {
    data: PropTypes.shape(
        {
            stage: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            background: PropTypes.string.isRequired,
            actors: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })),
            dialogues: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                actorId: PropTypes.number.isRequired,
                cloudImg: PropTypes.string.isRequired,
                cloudText: PropTypes.string.isRequired
            }))
        }
    )
}

