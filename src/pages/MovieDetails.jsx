import { Loading } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo';
import API from 'services/movies-api';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        const movieById = async () => {
            Loading.standard();
            try {
                const data = await API.fetchMovieById(movieId);
                setMovieInfo(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                Loading.remove();
            }
        };

        movieById();
    }, [movieId]);

    return (
        <>
            {movieInfo && (
                <>
                    <BackLink to={backLinkHref}>Go back</BackLink>

                    <MovieInfo movieInfo={movieInfo} />
                </>
            )}
        </>
    );
};

export default MovieDetails;
