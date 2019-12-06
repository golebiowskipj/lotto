import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card2.module.scss';
import '../CommonComicCardM.scss';

import { showCloud } from '../../../../../services/animationService/AnimationService';

import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';
import bg from "./images/card2bgm.jpg"
import cloud1 from "./images/card2cloud1m.svg";
import cloud2 from "./images/card2cloud2m.svg";
import cloud3 from "./images/card2cloud3m.svg";

export class Card2 extends React.Component {

    state = {
        isVisible: false
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
                            <p className={`f-text--mobile text--mobile ${styles.text_kierownik}`}>Teraz zaangażujcie obie półkule mózgowe. Ustalcie hasło i sześciocyfrowy kod PIN.</p>
                        </div>

                    </div>

                    <div onTransitionEnd={e => showCloud(e, '.js-m-card2-actor3')} className={`js-m-card1-actor2 actor--mobile actor__marzycielka--mobile ${styles.marzycielka}`}>
                        <img className={``} src={marzycielka} alt="marzycielka" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_marzycielka}`}>
                            <img src={cloud2} alt="dymek marzycielki" />
                            <p className={`f-text--mobile text--mobile ${styles.text_marzycielka}`}>PIN będzie potrzebny w kontakcie z Obsługą Klienta. Zapiszę go w bezpiecznym miejscu. Może znów dodzwonię się do tego miłego pana…</p>
                        </div>

                    </div>


                    <div onTransitionEnd={e => showCloud(e)} className={`js-m-card2-actor3 actor--mobile actor__zartownis--mobile ${styles.zartownis}`}>
                        <img className={``} src={zartownis} alt="zartownis" />

                        <div className={`js-cloud cloud--mobile ${styles.cloud_zartownis}`}>
                            <img src={cloud3} alt="dymek zartownisia" />
                            <p className={`f-text--mobile text--mobile ${styles.text_zartownis}`}>He, he, albo do tej PIN-up girl…</p>
                        </div>

                    </div>



                </div>
            </div>
        )
    }

}

Card2.propTypes = {
    height: PropTypes.number.isRequired,
}


