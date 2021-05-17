import React, { useState } from 'react';
import ErrorAlert from './ErrorAlert';
import PropTypes from 'prop-types';

const AppForm = ({ saveSearch }) => {

    //Form State Hook to point the key and error boundary
    const [key, actKey] = useState('');
    const [error, showError] = useState(false);

    //Calling function to do the search 
    const searchImage = e => {
        e.preventDefault();

        //Validation
        if (key.trim() === '') {
            showError(true);
            return;
        }
        showError(false);

        //Sending key back to main component
        saveSearch(key);
    }

    return (
        <div className='flex items-center justify-center p-2 m-auto lg:p-6'>
            <form
                className='w-3/4 p-8 text-center bg-black rounded-xl form'
                onSubmit={searchImage}
            >
                <h1 className='mt-1 mb-4 text-yellow-500 lg:mb-8 lg:mt-2 app-title'>Pixasearch <span>Lite</span></h1>
                <div className='flex flex-col items-center justify-around lg:h-14 lg:flex-row'>
                    <input
                        type='text'
                        className='w-full h-8 p-4 mb-6 text-black placeholder-gray-700 rounded-md input'
                        placeholder='Search for an Image, ex. Soccer'
                        onChange={e => actKey(e.target.value)}
                    />
                    <input
                        type='submit'
                        className='w-1/2 h-8 ml-0 bg-gray-700 rounded-lg text-gray-50 button'
                        value='Search'
                    />
                </div>
                {error && <ErrorAlert message='Enter a word or key to search...' />}
            </form>
        </div>
    );
}

AppForm.propTypes = {
    saveSearch: PropTypes.func.isRequired
}

export default AppForm;