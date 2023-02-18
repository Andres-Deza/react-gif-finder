import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch Man']);

	const onAddCategory = (valueClean) => {
		// setCategories([...categories, 'Valorant']);
		if (categories.includes(valueClean)) return;
		setCategories((cat) => [valueClean, ...categories]);
	};
	return (
		<>
			{/* Titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				// setCategories={setCategories}
				onNewCategory={(valueClean) => onAddCategory(valueClean)}
			/>
			{/* Listado de Gif */}

			{categories.map((categorie) => (
				<GifGrid key={categorie} categoria={categorie} />
			))}

			{/* Gif Item */}
		</>
	);
};

export default GifExpertApp;
