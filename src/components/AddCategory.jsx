import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		// setCategories((cat) => [...cat, inputValue]);
		onNewCategory(inputValue.trim());
		setInputValue('');
	};
	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input type="text" placeholder="Buscar gifts" value={inputValue} onChange={onInputChange} />
			<button id="addCategory" onClick={onSubmit}>
				Agregar
			</button>
		</form>
	);
};

export default AddCategory;