import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQxZjA4MDA4NmRkZjBkNThjNGJkYzA3ZWY0YTAzNiIsInN1YiI6IjY1YTYzZjQxOWJjZDBmMDEyM2JhNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KEtiGYN_3JrU51Sf_c_is4ZEHWjNunRsBdl0i-lHic',
    },
});

const API = {
    fetchTrendingMovies: async () => {
        const response = await instance.get('/trending/movie/day');
        return response.data.results;
    },

    fetchMovieById: async movieId => {
        const response = await instance.get(`/movie/${movieId}`);
        return response.data;
    },

    fetchMovieCast: async movieId => {
        const response = await instance.get(`/movie/${movieId}/credits`);
        return response.data.cast;
    },

    fetchMovieReviews: async movieId => {
        const response = await instance.get(`/movie/${movieId}/reviews`);
        return response.data;
    },

    fetchMovieByQuery: async query => {
        const response = await instance.get(`/search/movie?query=${query}`);
        return response.data.results;
    },
};

export default API;
