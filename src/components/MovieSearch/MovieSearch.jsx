import MoviesList from 'components/MoviesList';
import { Loading } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/movies-api';

const MovieSearch = () => {
    const[movies, setMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        const movieSearch = async () => {
            if (search === null) {
                return;
            }

            Loading.standard();

            try {
                const data = await API.fetchMovieByQuery(search);
                setMovies(data)
            } catch (error) {
                console.log(error.message);
            } finally {
                Loading.remove();
            }
        };
        movieSearch();
    }, [search]);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;

        setSearchParams({ search: form.elements.search.value.toLowerCase() });

        form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" />
                <button type="submit">Search</button>
            </form>
            
            {movies && <MoviesList movies={movies}/>}

            {!movies?.length && search !== "" && <p>Not found</p>}
            
        </>
    );
};

export default MovieSearch;
