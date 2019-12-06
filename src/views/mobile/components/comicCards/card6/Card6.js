import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Card6.module.scss';
import '../CommonComicCardM.scss';
import { showCloud } from '../../../../../services/animationService/AnimationService';

import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';
import bg from "./images/card6bgm.jpg"
import cloud1 from "./images/card6cloud1m.svg";
import cloud2 from "./images/card6cloud2m.svg";
import cloud3 from "./images/card6cloud3m.svg";
import cloud4 from "./images/card6cloud4m.svg";


export class Card6 extends Component {
    state = {
        isVisible: false,
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ isVisible: true });
        }, 500);
    }

    render() {
        return (
            <div style={{ height: this.props.height }} className={`gradientBorder--mobile`}>
                <div className={`card--mobile`}>
                    <img style={{ maxHeight: this.props.height - 6 }} src={bg} alt="tło karty" />

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card6-actor2')} style={{ transform: this.state.isVisible ? 'none' : 'translateX(500px)' }} className={`actor--mobile actor__kierownik--mobile ${styles.kierownik}`}>
                        <img src={kierownik} alt="kierownik" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_kierownik}`}>
                            <img src={cloud1} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Zakręcony jesteś spektakula… rnie. Jeszcze moment kul… kulminacyjny. Potwierdźcie, że środki na grę pochodzą z legalnego źródła. Np. z umowy o pracę.</p>
                        </div>


                        <div className={`js-m-card6-cloud2 cloud--mobile ${styles.cloud_kierownik2}`}>
                            <img src={cloud4} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Wszystko jasne. Na koniec zaznaczcie właściwe zgody i wkręcamy się do gry!</p>
                        </div>

                    </div>

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card6-actor3', '')} className={`js-m-card6-actor2 actor--mobile actor__marzycielka--mobile ${styles.marzycielka}`}>
                        <img className={``} src={marzycielka} alt="marzycielka" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_marzycielka}`}>
                            <img src={cloud2} alt="dymek marzycielki" />
                            <p className={`f-text--mobile text--mobile ${styles.text_marzycielka}`}>Albo o dzieło. Tak mam w mojej wymarzonej pracy!</p>
                        </div>

                    </div>


                    <div onTransitionEnd={e => showCloud(e, '', '.js-m-card6-cloud2')} className={`js-m-card6-actor3 actor--mobile actor__zartownis--mobile ${styles.zartownis}`}>
                        <img className={``} src={zartownis} alt="zartownis" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_zartownis}`}>
                            <img src={cloud3} alt="dymek zartownisia" />
                            <p className={`f-text--mobile text--mobile ${styles.text_zartownis}`}>Ja mam własną działalność – standuper… Ludzie turlają się ze śmiechu.</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

Card6.propTypes = {
    height: PropTypes.number.isRequired,
}

