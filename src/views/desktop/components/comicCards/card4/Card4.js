import React, { Component } from 'react'
import styles from './Card4.module.scss';
import '../CommonComicCard.scss';
import Sensor from 'react-visibility-sensor';
import {showCloud} from '../../../../../services/animationService/AnimationService';

import bg from "./images/card4bg.jpg"
import cloud1 from "./images/card4cloud1.svg";
import cloud2 from "./images/card4cloud2.svg";
import cloud3 from "./images/card4cloud3.svg";
import cloud4 from "./images/card4cloud4.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';


export class Card4 extends Component {
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
                <div style={{ height: 671 }} className={`gradientBorder`}>
                    <div className={`card ${styles.card}`}>
                        <img className={`card__background`} style={{ height: 671 - 6 }} src={bg} alt="tło karty" />
                      
                            <div onTransitionEnd={(e)=>showCloud(e, '.js-card4-actor2')} style={{transform: this.state.isVisible ? 'none' : 'translateX(500px)'}} className={`actor actor__zartownis ${styles.zartownis}`}>
                                <img className={``} src={zartownis} alt="zartownis" />
                             
                                    <div className={`js-cloud cloud ${styles.cloud_zartownis}`}>
                                        <img src={cloud1} alt="dymek zartownisia" />
                                        <p className={`f-text--desktop text ${styles.text_zartownis}`}>To może jeszcze numer konta mam podać?</p>
                                    </div>
                             
                            </div>
                      
                            <div onTransitionEnd={e=>showCloud(e, '.js-card4-actor3')} className={`js-card4-actor2 actor actor__kierownik slideFromSide ${styles.kierownik}`}>
                                <img src={kierownik} alt="kierownik" />
                              
                                    <div className={`js-cloud cloud ${styles.cloud_kierownik}`}>
                                        <img src={cloud2} alt="dymek kierownika" />
                                        <p className={`f-text--desktop text ${styles.text_kierownik}`}>Dokładnie tak <span>&#128524;</span></p>
                                    </div>
                             
                                    <div className={`js-card4-cloud2 cloud ${styles.cloud_kierownik2}`}>
                                        <img src={cloud4} alt="dymek kierownika" />
                                        <p className={`f-text--desktop text ${styles.text_kierownik}`}>To też. I jeszcze tak nas zobowiązuje ustawa o przeciwdziałaniu praniu pieniędzy i finansowaniu terroryzmu.</p>
                                    </div>
                               
                            </div>
                        

                      
                            <div onTransitionEnd={e=>showCloud(e, '', '.js-card4-cloud2')} className={`js-card4-actor3 actor actor__marzycielka ${styles.marzycielka}`}>
                                <img className={``} src={marzycielka} alt="marzycielka" />
                               
                                    <div className={`js-cloud cloud fadeIn ${styles.cloud_marzycielka}`}>
                                        <img src={cloud3} alt="dymek marzycielki" />
                                        <p className={`f-text--desktop text ${styles.text_marzycielka}`}>Ach… bo na to konto prześlecie środki z wygranej…</p>
                                    </div>
                               
                            </div>
                       
                    </div>
                </div>
            </Sensor>
        )
    }
}


