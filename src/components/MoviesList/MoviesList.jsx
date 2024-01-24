import MoviesItem from './MoviesItem';
import Styled from './MoviesList.styled';

const { Title, List } = Styled;

const MoviesList = ({ title, movies }) => {
    const moviesList = movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie} />
    ));

    return (
        <>
            {movies && (
                <>
                    {title && <Title>{title}</Title>}
                    <List>{moviesList}</List>
                </>
            )}
        </>
    );
};

export default MoviesList;
