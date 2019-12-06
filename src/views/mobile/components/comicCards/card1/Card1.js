import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './Card1.module.scss';
import '../CommonComicCardM.scss';

import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';
import bg from "./images/card1bgm.jpg"
import cloud1 from "./images/card1cloud1m.svg";
import cloud2 from "./images/card1cloud2m.svg";
import cloud3 from "./images/card1cloud3m.svg";
import cloud4 from "./images/card1cloud4m.svg";


export class Card1 extends Component {
    state = {
        isVisible: true
    }
    render() {
        return (

            <div style={{ height: this.props.height }} className={`gradientBorder--mobile`}>
                <div className={`card--mobile`}>
                    <img style={{ maxHeight: this.props.height - 6 }} src={bg} alt="tło karty" />

                    <div className={`actor--mobile actor__kierownik--mobile ${styles.kierownik}`}>
                        <img src={kierownik} alt="kierownik" />

                        <div className={`cloud--mobile ${styles.cloud_kierownik}`}>
                            <img src={cloud1} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Za chwilę wejdziemy do świata kul… kultowych gier LOTTO.</p>
                        </div>


                        <div className={`cloud--mobile ${styles.cloud_kierownik2}`}>
                            <img src={cloud4} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Zarejestrujmy się i zakręćmy po kody promocyjne!</p>
                        </div>

                    </div>


                    <div className={`actor--mobile actor__zartownis--mobile ${styles.zartownis}`}>
                        <img className={``} src={zartownis} alt="zartownis" />

                        <div className={`cloud--mobile ${styles.cloud_zartownis}`}>
                            <img src={cloud2} alt="dymek zartownisia" />
                            <p className={`f-text--mobile text--mobile ${styles.text_zartownis}`}>I to mnie kręci!</p>
                        </div>

                    </div>

                    <div className={`actor--mobile actor__marzycielka--mobile ${styles.marzycielka}`}>
                        <img className={``} src={marzycielka} alt="marzycielka" />

                        <div className={`cloud--mobile ${styles.cloud_marzycielka}`}>
                            <img src={cloud3} alt="dymek marzycielki" />
                            <p className={`f-text--mobile text--mobile ${styles.text_marzycielka}`}>A mnie rozmarza…</p>
                        </div>

                    </div>

                </div>
            </div>

        )
    }

}

Card1.propTypes = {
    height: PropTypes.number.isRequired,
}

