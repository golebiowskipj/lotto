import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card6.module.scss';
import '../CommonComicCardM.scss';

export const Card6 = (props) => {
    return (
        <div style={{ height: props.data.height }} className={`gradientBorder`}>
            <div className={`card`}>
                <img style={{ height: props.data.height - 6 }} src={props.data.background} alt="tło karty" />
            </div>
        </div>
    )
}

Card6.propTypes = {
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

