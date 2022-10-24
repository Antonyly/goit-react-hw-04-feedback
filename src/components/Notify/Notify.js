import React from "react";
import PropTypes from "prop-types"
import css from "./Notify.module.css";

const Nostat = ({text}) => {
    return (
        <h3 className={css.h2}>{text}</h3>
    );
}

Nostat.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Nostat;