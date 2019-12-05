import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card1.module.scss';
import '../CommonComicCard.scss';

import bg from "./images/card1bg.jpg"
import cloud1 from "./images/card1cloud1.svg";
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';

export const Card1 = (props) => {
    console.log(props);
    return (
        <div style={{ height: props.data.height }} className={`gradientBorder`}>
            <div className={`card ${styles.card}`}>
                <img className={`card__background`} style={{ height: props.data.height - 6 }} src={bg} alt="tło karty" />
                <div className={`actor actor__kierownik ${styles.kierownik}`}>
                    <img src={kierownik} alt="kierownik" />
                    <div className={`cloud ${styles.cloud_kierownik}`}>
                        <img src={cloud1} alt="dymek kierownika" />
                        <p className={`f-text--desktop text ${styles.text_kierownik}`}>Za chwilę wejdziemy do świata kul… kultowych gier LOTTO.</p>
                    </div>
                </div>
                <div className={`actor actor__zartownis ${styles.zartownis}`}>
                    <img className={``} src={zartownis} alt="zartownis" />
                </div>
                <div className={`actor actor__marzycielka ${styles.marzycielka}`}>
                    <img className={``} src={marzycielka} alt="marzycielka" />
                </div>
            </div>
        </div>
    )
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

