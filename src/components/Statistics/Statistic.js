import React from "react";
import PropTypes from "prop-types"
import css from './Statistic.module.css'
import { nanoid } from "nanoid";


const Statistic = ({ Good, Neutral, Bad, total, positivePercent, text }) => {

    return (
        <>
            <h2 className={ css.feedback_item }>{ text }</h2>
            <ul className={ css.feedback_item } key={ nanoid() }>
                <li className={ css.feedback_item } key={ nanoid() }> Good: <span>{Good}</span></li>
                <li className={ css.feedback_item } key={ nanoid() }> Neutral: <span>{Neutral}</span></li>
                <li className={ css.feedback_item } key={ nanoid() }> Bad: <span>{Bad}</span></li>
                <li className={ css.feedback_item } key={ nanoid() }> Total: <span>{total}</span></li>
                <li className={ css.feedback_item } key={ nanoid() }> Positive feedback: <span>{positivePercent}%</span></li>
            </ul>
        </>
    )
}

Statistic.propTypes = {
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired
}

export default Statistic;