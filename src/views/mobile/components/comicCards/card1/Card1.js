import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card1.module.scss';
import '../CommonComicCardM.scss';

export const Card1 = (props) => {
    return (
        <div style={{ height: props.height }} className={`gradientBorder--mobile`}>
            <div className={`card--mobile`}>
                <img style={{maxHeight: props.height - 6}} src={props.data.background} alt="tło karty" />
            </div>
        </div>
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

