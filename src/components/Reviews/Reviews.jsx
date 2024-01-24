import { Loading } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movies-api';
import ReviewsItem from './ReviewsItem';
import Styled from './Reviews.styled';

const { ReviewsList } = Styled;

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const movieReviews = async () => {
            Loading.standard();

            try {
                const { results } = await API.fetchMovieReviews(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error.message);
            } finally {
                Loading.remove();
            }
        };

        movieReviews();
    }, [movieId]);

    const reviewsList = reviews.map(
        ({ id, author_details: { username }, content }) => (
            <ReviewsItem key={id} username={username} content={content} />
        )
    );

    return <>{reviews && <ReviewsList>{reviewsList}</ReviewsList>}</>;
};

export default Reviews;
