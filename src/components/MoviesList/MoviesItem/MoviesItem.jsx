import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from './MoviesItem.styled';
import helpers from 'helpers';
import defaultImage from "../../../images/no-movie-image.jpg"

const { Item, Image, Title, Year } = Styled;

const MoviesItem = ({ movie }) => {
    const { id, poster_path, title, release_date } = movie;
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Item>
            <Link to={`/movies/${id}`}>
                {movie && (
                    <>
                        <Image
                            src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : defaultImage}
                            alt={title}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                        {isImageLoaded && (
                            <>
                                <Title>{title}</Title>
                                <Year>{helpers.getYear(release_date)}</Year>
                            </>
                        )}
                    </>
                )}
            </Link>
        </Item>
    );
};

export default MoviesItem;
