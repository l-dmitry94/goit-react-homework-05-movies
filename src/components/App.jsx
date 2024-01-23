import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/movies" element={<div>Movies</div>} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
