export const getGifs = async (categoria) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=Ru4fnDcVNzXkEVDDc5EcJNb2U92YQwIc&q=4=${categoria}&limit=10`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifts = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	// console.log(gifts);
	return gifts;
};
