import GifItem from './GifItem';
import useFetchGifs from './../hooks/useFetchGifs';

function GifGrid({ categoria }) {
	const { images, isLoading } = useFetchGifs(categoria);

	console.log({ isLoading });

	return (
		<div>
			<h3>{categoria}</h3>
			{isLoading && <h2>Cargando...</h2>}
			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</div>
	);
}

export default GifGrid;
