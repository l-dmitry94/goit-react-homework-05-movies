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
            try {
                const data = await API.fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
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

    return <CastList>{castList}</CastList>;
};

export default Cast;
