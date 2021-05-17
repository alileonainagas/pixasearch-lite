import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ message }) => {
    return (
        <p className='min-h-screen text-4xl tracking-wider text-center text-gray-500 uppercase font-anton'>{message}</p>
    );
}

Loader.propTypes = {
    message: PropTypes.string.isRequired
}

export default Loader;