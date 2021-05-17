import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => {

    const { largeImageURL, tags, likes, previewURL, views } = image;
    return (
        <div className='image-card'>
            <div className='w-full h-4/5'>
                <img src={largeImageURL} alt={tags} className='w-full h-full rounded-t-md' />
            </div>
            <div className='p-4 h-1/5'>
                <ul className='flex items-center w-full justify-evenly'>
                    <li className='list-item'>{views} <strong>Views</strong></li>
                    <li className='list-item'>{likes} <strong>Likes</strong></li>
                    <li className='text-gray-600 border border-gray-600 rounded-md link'>
                        <a
                            href={largeImageURL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='pt-4 pb-4 pl-6 pr-6 no-underline'
                        >
                            Go to!
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Image.propTypes = {
    image: PropTypes.object.isRequired
}

export default Image;