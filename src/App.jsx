import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import axios from 'axios';

//Assets
import favicon from '././assets/Pixasearchico.svg'

//App Components
import AppForm from './components/AppForm';
import ImagesList from './components/ImagesList';
import Loader from './components/Loader';
import AppFooter from './components/AppFooter';

function App() {

	//App State: main component
	const [search, saveSearch] = useState('');
	const [images, saveImages] = useState([]);
	const [pages, savePages] = useState(1);
	const [totalPages, saveTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);

	//Component's life cycle
	useEffect(() => {
		const callAPI = async () => {
			try {
				if (search.trim === '') return;
				setLoading(true);
				const imgPerPage = 15;
				const key = '21632225-1ba3b382fb94494b20670278d'; //Key is public accesible just for development purpose
				const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}&page=${pages}`;
				const api = await axios.get(url);
				const result = await api.data;
				saveImages(result.hits);

				//Calculates number of pages
				const calculation = Math.ceil(result.totalHits / imgPerPage);
				saveTotalPages(calculation);

				//Set screen to the start
				const start = document.querySelector('.head');
				start.scrollIntoView({ behavior: 'smooth' });

			} catch (error) {
				console.log(error);
				console.error(error);
			} finally {
				setLoading(false);
			}
		}
		callAPI();
	}, [search, pages]);

	//Goes to previous page
	const lastPage = () => {
		const currentPage = pages - 1;
		if (currentPage === 0) return;
		savePages(currentPage);
	}

	//Goes to next page
	const nextPage = () => {
		const currentPage = pages + 1;
		if (currentPage > totalPages) return;
		savePages(currentPage);
	}

	return (
		<HelmetProvider>
			<>
				<Helmet>
					{/* Public Metadata implementation */}
					<link rel="icon" type="image/svg+xml" href={favicon} />
					<meta name="description" content="Single Page Application that searches for images but returns lighter results." />
					<title>Pixasearch Lite</title>
				</Helmet>
				<div className='main'>
					<div className='head'>
						<AppForm
							saveSearch={saveSearch}
						/>
					</div>
					{
						loading ? <Loader message='Loading Images...' />
							: <div className='p-1 lg:p-6 hero'>
								<ImagesList
									images={images}
								/>
								{
									(pages === 1)
										? null
										: (<button className='pagination' onClick={lastPage}>&laquo; Prev</button>)
								}
								{
									(pages === totalPages)
										? null
										: (<button className='pagination' onClick={nextPage}>Next &raquo;</button>)
								}
							</div>
					}
				</div>
				<AppFooter />
			</>
		</HelmetProvider>
	)
}

export default App
