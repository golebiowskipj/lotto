import React, { Component } from 'react'
import styles from './Card6.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import {showCloud} from '../../../../../services/animationService/AnimationService';
import bg from "./images/card6bg.jpg"
import cloud1 from "./images/card6cloud1.svg";
import cloud2 from "./images/card6cloud2.svg";
import cloud3 from "./images/card6cloud3.svg";
import cloud4 from "./images/card6cloud4.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card6 extends Component {
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
                minTopValue={400}
                resizeCheck={true}>
                <div style={{ height: 728 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: 728 - 6 }} src={bg} alt="tło karty" />

                        <div onTransitionEnd={e=>showCloud(e,'.js-card6-actor2')} style={{transform: this.state.isVisible ? 'none' : 'translateX(500px)'}} className={`actor actor__kierownik ${styles.kierownik}`}>
                            <img src={kierownik} alt="kierownik" />

                            <div className={`js-cloud cloud ${styles.cloud_kierownik}`}>
                                <img src={cloud1} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Zakręcony jesteś spektakula… rnie. Jeszcze moment kul… kulminacyjny. Potwierdźcie, że środki na grę pochodzą z legalnego źródła. Np. z umowy o pracę.</p>
                            </div>

                            <div className={`js-card6-cloud2 cloud ${styles.cloud_kierownik2}`}>
                                <img src={cloud4} alt="dymek kierownika" />
                                <p className={`f-text--desktop text ${styles.text_kierownik}`}>Wszystko jasne. Na koniec zaznaczcie właściwe zgody i wkręcamy się do gry!</p>
                            </div>

                        </div>

                        <div onTransitionEnd={e=>showCloud(e, '.js-card6-actor3')} className={`js-card6-actor2 actor actor__marzycielka ${styles.marzycielka}`}>
                            <img className={``} src={marzycielka} alt="marzycielka" />

                            <div className={`js-cloud cloud ${styles.cloud_marzycielka}`}>
                                <img src={cloud2} alt="dymek marzycielki" />
                                <p className={`f-text--desktop text ${styles.text_marzycielka}`}>Albo o dzieło. Tak mam w mojej wymarzonej pracy!</p>
                            </div>

                        </div>

                        <div onTransitionEnd={e=>showCloud(e, '', '.js-card6-cloud2')} className={`js-card6-actor3 actor actor__zartownis ${styles.zartownis}`}>
                            <img className={``} src={zartownis} alt="zartownis" />

                            <div className={`js-cloud cloud ${styles.cloud_zartownis}`}>
                                <img src={cloud3} alt="dymek zartownisia" />
                                <p className={`f-text--desktop text ${styles.text_zartownis}`}>Ja mam własną działalność – standuper… Ludzie turlają się ze śmiechu.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </Sensor>
        )
    }
}

