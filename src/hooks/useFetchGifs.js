import { useState, useEffect } from 'react';
import { getGifs } from './../helpers/getGifs';

const useFetchGifs = (categoria) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		setImages(await getGifs(categoria));
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []);

	return { images, isLoading };
};

export default useFetchGifs;
