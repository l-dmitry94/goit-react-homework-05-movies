import { Loading } from 'notiflix';
import "notiflix/dist/notiflix-3.2.7.min.css"
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';

import API from 'services/movies-api';

const Home = () => {
    const [trendsMovies, setTrendsMoviess] = useState(null);

    useEffect(() => {
        const trendingMovies = async () => {
            Loading.standard();
            try {
                const data = await API.fetchTrendingMovies();
                setTrendsMoviess(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                Loading.remove();
            }
        };

        trendingMovies();
    }, []);

    return <>{trendsMovies && <MoviesList title="Trending Today" movies={trendsMovies} />}</>;
};

export default Home;
