import React from 'react'
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';
import { slide, fade } from '../../../../../services/animationVariables/AnimationVariables';
import styles from './Card1.module.scss';
import '../CommonComicCardM.scss';
import kierownik from '../../../images/kierownik.svg';
import marzycielka from '../../../images/marzycielka.svg';
import zartownis from '../../../images/zartownis.svg';

export const Card1 = (props) => {
    console.log(props)
    return (
        <Fade duration={300} delay={100}>
            <div style={{ height: props.height }} className={`gradientBorder--mobile`}>
                <div className={`card--mobile`}>
                    <img style={{ maxHeight: props.height - 6 }} src={props.data.background} alt="tło karty" />
                </div>
            </div>
        </Fade>
    )
}

Card1.propTypes = {
    height: PropTypes.number.isRequired,
    data: PropTypes.shape(
        {
            stage: PropTypes.number.isRequired,
            height: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
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

