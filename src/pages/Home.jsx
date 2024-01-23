import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';

import API from 'services/movies-api';

const Home = () => {
    const [trendsMovies, setTrendsMoviess] = useState(null);

    useEffect(() => {
        const trendingMovies = async () => {
            try {
                const data = await API.fetchTrendingMovies();
                setTrendsMoviess(data);
            } catch (error) {
                console.log(error);
            }
        };

        trendingMovies();
    }, []);

    return <>{trendsMovies && <MoviesList title="Trending Today" movies={trendsMovies} />}</>;
};

export default Home;
