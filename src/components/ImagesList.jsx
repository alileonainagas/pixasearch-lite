import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ImagesList = ({ images }) => {
    return (
        /* Crear Carrousel de imagenes con grid */
        <div className='w-full m-auto carrousel'>
            {images.map(image => (
                <Image
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    );
}

ImagesList.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImagesList;