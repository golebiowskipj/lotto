import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Card3.module.scss';
import '../CommonComicCardM.scss';
import { showCloud } from '../../../../../services/animationService/AnimationService';

import kierownik from '../../../images/kierownik.svg';
import zartownis from '../../../images/zartownis.svg';
import bg from "./images/card3bgm.jpg"
import cloud1 from "./images/card3cloud1m.svg";
import cloud2 from "./images/card3cloud2m.svg";
import cloud3 from "./images/card3cloud3m.svg";


export class Card3 extends Component {
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

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card1-actor2')} style={{ transform: this.state.isVisible ? 'none' : 'translateX(500px)' }} className={`actor--mobile actor__kierownik--mobile ${styles.kierownik}`}>
                        <img src={kierownik} alt="kierownik" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_kierownik}`}>
                            <img src={cloud1} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Wpisujemy teraz PESEL, serię i numer dowodu osobistego...</p>
                        </div>


                        <div className={`js-m-card3-cloud2 cloud--mobile ${styles.cloud_kierownik2}`}>
                            <img src={cloud3} alt="dymek kierownika" />
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Wstęp tylko dla pełnoletnich. Sorry za zapory.</p>
                        </div>

                    </div>


                    <div onTransitionEnd={e => showCloud(e,'', '.js-m-card3-cloud2')} className={`js-m-card1-actor2 actor--mobile actor__zartownis--mobile ${styles.zartownis}`}>
                        <img className={``} src={zartownis} alt="zartownis" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_zartownis}`}>
                            <img src={cloud2} alt="dymek zartownisia" />
                            <p className={`f-text--mobile text--mobile ${styles.text_zartownis}`}>Nie no, w kulki sobie lecisz!</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

Card3.propTypes = {
    height: PropTypes.number.isRequired,
}

