import { Loading } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movies-api';
import CastItem from './CastItem';
import Styled from './Cast.styled';

const { CastList } = Styled;

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const movieCast = async () => {
            Loading.standard();
            try {
                const data = await API.fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                Loading.remove();
            }
        };

        movieCast();
    }, [movieId]);

    const castList = cast.map(({ id, name, profile_path, character }) => (
        <CastItem
            key={id}
            name={name}
            photo={profile_path}
            character={character}
        />
    ));

    return <>{cast && <CastList>{castList}</CastList>}</>;
};

export default Cast;
