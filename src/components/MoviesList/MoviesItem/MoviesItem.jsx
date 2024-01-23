import { Link } from 'react-router-dom';
import Styled from './MoviesItem.styled';
import helpers from 'helpers';

const { Item, Image, Title, Year } = Styled;

const MoviesItem = ({ movie }) => {
    const { id, poster_path, title, release_date } = movie;

    return (
        <Item>
            <Link to={`/movies/${id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                />
                <Title>{title}</Title>
                <Year>{helpers.getYear(release_date)}</Year>
            </Link>
        </Item>
    );
};

export default MoviesItem;
