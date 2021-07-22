import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useParams } from 'react-router-dom';
import Grid from './Grid';
import Spinner from './Spinner';
import NoImage from '../images/no_image.jpg';
import { useSingleMovieFetch } from '../hooks/useSingleMovieFetch';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

function Movie() {
	const { movieId } = useParams();
	const { state: movieData, loading, error } = useSingleMovieFetch(movieId);

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <div>Something went wrong...</div>;
	}

	console.log(movieData);

	return (
		<>
			<BreadCrumb movieTitle={movieData.original_title} />
			<MovieInfo movie={movieData} />
			<MovieInfoBar
				time={movieData.runtime}
				budget={movieData.budget}
				revenue={movieData.revenue}
			/>
			<Grid header="Actors">
				{movieData.actors.map((actor) => {
					return (
						<Actor
							key={actor.credit_id}
							name={actor.name}
							character={actor.character}
							imageUrl={
								actor.profile_path
									? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
									: NoImage
							}
						/>
					);
				})}
			</Grid>
		</>
	);
}

export default Movie;
