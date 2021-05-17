import React from 'react';
import ALALogo from '../assets/ALA_Logo.svg';
import GithubLogo from '../assets/GitHubLogo.svg';
import LinkedLogo from '../assets/LinkedLogo.svg';
import FacebookLogo from '../assets/FacebookLogo.svg';
import PBLogo from '../assets/PBLogo.svg';

const AppFooter = () => {
    return (
        <footer className='bottom-0 p-4 bg-black lg:p-6'>
            <div className='footer-nav'>
                <img src={ALALogo} alt='ALA' className='my-4 w-60 lg:my-0' />
                <ul className='flex flex-row items-center my-8 lg:my-0'>
                    <li>
                        <a
                            href='https://github.com/alileonainagas'
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Github'
                        >
                            <img src={GithubLogo} alt='gh-logo' className='mx-2' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/alí-león-ainagas-943333190/'
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <img src={LinkedLogo} alt='ld-logo' className='h-8 mx-2' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.facebook.com/ali.leon.ainagas/'
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <img src={FacebookLogo} alt='fb-logo' className='h-8 mx-2' />
                        </a>
                    </li>
                </ul>
                <article className='flex flex-col items-center'>
                    <h4 className='my-6 text-lg tracking-wider text-yellow-500 uppercase font-anton'>Powered by:</h4>
                    <a
                        href='https://pixabay.com/api/docs/'
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label='Pixabay'
                    >
                        <img src={PBLogo} alt='api-logo' />
                    </a>
                </article>
            </div>
        </footer>
    );
}

export default AppFooter;