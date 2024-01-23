import Styled from './CastItem.styled';
import defaultImage from '../../../images/no-cast-image.png';

const { Item,ActorImage, ActorName,  ActorCharacter} = Styled;

const CastItem = ({ name, photo, character }) => {
    return (
        <Item>
            {
                <ActorImage
                    src={
                        photo
                            ? `https://image.tmdb.org/t/p/original${photo}`
                            : defaultImage
                    }
                    alt={name}
                />
            }

            <ActorName>{name}</ActorName>
            <ActorCharacter>{character}</ActorCharacter>
        </Item>
    );
};

export default CastItem;
