import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Card4.module.scss';
import '../CommonComicCardM.scss';
import { showCloud } from '../../../../../services/animationService/AnimationService';

import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';
import bg from "./images/card4bgm.jpg"
import cloud1 from "./images/card4cloud1m.svg";
import cloud2 from "./images/card4cloud2m.svg";
import cloud3 from "./images/card4cloud3m.svg";
import cloud4 from "./images/card4cloud4m.svg";


export class Card4 extends Component {
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

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card4-actor2')} style={{ transform: this.state.isVisible ? 'none' : 'translateX(500px)' }} className={`actor--mobile actor__zartownis--mobile ${styles.zartownis}`}>
                        <img className={``} src={zartownis} alt="zartownis" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_zartownis}`}>
                            <img src={cloud1} alt="dymek zartownisia" />
                            <p className={`f-text--mobile text--mobile ${styles.text_zartownis}`}>To może jeszcze numer konta mam podać?</p>
                        </div>

                    </div>

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card4-actor3', '')} className={`js-m-card4-actor2 actor--mobile actor__kierownik--mobile ${styles.kierownik}`}>
                        <img src={kierownik} alt="kierownik" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_kierownik}`}>
                            <img src={cloud2} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Dokładnie tak <span>&#128524;</span></p>
                        </div>
                        <div className={`js-m-card4-cloud2 cloud--mobile ${styles.cloud_kierownik2}`}>
                            <img src={cloud4} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>To też. I jeszcze tak nas zobowiązuje ustawa o przeciwdziałaniu praniu pieniędzy i finansowaniu terroryzmu.</p>
                        </div>

                    </div>

                    <div onTransitionEnd={e => showCloud(e, '', '.js-m-card4-cloud2')} className={`js-m-card4-actor3 actor--mobile actor__marzycielka--mobile ${styles.marzycielka}`}>
                        <img className={``} src={marzycielka} alt="marzycielka" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_marzycielka}`}>
                            <img src={cloud3} alt="dymek marzycielki" />
                            <p className={`f-text--mobile text--mobile ${styles.text_marzycielka}`}>Ach… bo na to konto prześlecie środki z wygranej…</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

Card4.propTypes = {
    height: PropTypes.number.isRequired,
}

