import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { Notify, Loading } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/movies-api';

const MovieSearch = () => {
    const [movies, setMovies] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';

    useEffect(() => {
        setInputValue(search);
    }, [search]);

    useEffect(() => {
        const movieSearch = async () => {
            if (!search) {
                return;
            }

            Loading.standard();

            try {
                const data = await API.fetchMovieByQuery(search);
                if (data?.length === 0) {
                    setMovies(null);
                    Notify.failure('Not Found');
                    return;
                }
                setMovies(data);
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
        if (!form.elements.search.value) {
            return;
        }

        setSearchParams({ search: form.elements.search.value });
    };

    return (
        <>
            <SearchForm
                inputValue={inputValue}
                handleChange={event => setInputValue(event.target.value)}
                handleSubmit={handleSubmit}
                type="submit"
            />
            {movies && <MoviesList movies={movies} />}
        </>
    );
};

export default MovieSearch;
