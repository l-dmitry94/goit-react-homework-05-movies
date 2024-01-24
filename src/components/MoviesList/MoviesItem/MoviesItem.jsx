import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styled from './MoviesItem.styled';
import helpers from 'helpers';
import defaultImage from '../../../images/no-movie-image.jpg';

const { Item, Image, Title, Year } = Styled;

const MoviesItem = ({ movie }) => {
    const { id, poster_path, title, release_date } = movie;
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const location = useLocation();

    return (
        <Item>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                {movie && (
                    <>
                        <Image
                            src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/original${poster_path}`
                                    : defaultImage
                            }
                            alt={title}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                        {isImageLoaded && (
                            <>
                                <Title>{title}</Title>
                                <Year>
                                    {helpers.getYear(release_date).toString()}
                                </Year>
                            </>
                        )}
                    </>
                )}
            </Link>
        </Item>
    );
};

export default MoviesItem;
