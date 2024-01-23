import MovieInfo from 'components/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movies-api';

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const movieById = async () => {
            try {
                const data = await API.fetchMovieById(movieId);
                setMovieInfo(data);
            } catch (error) {
                console.log(error);
            }
        };

        movieById();
    }, [movieId]);

    return <>{movieInfo && <MovieInfo movieInfo={movieInfo} />}</>;
};

export default MovieDetails;
