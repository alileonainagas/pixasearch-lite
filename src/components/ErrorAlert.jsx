import React from 'react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ message }) => {
    return (
        <p className='mt-2 text-xl font-bold text-red-700 font-inconsolata'>{message}</p>
    );
}

ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorAlert;