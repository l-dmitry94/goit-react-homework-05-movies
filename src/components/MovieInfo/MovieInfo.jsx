import { Outlet } from 'react-router-dom';
import helpers from 'helpers';
import Styled from './MovieInfo.styled';

const {
    Wrapper,
    ImageWrapper,
    Info,
    Title,
    TitleOriginal,
    TitleBold,
    Overview,
    Details,
    DetailsList,
    DetailsLink,
    DetailsTitle,
} = Styled;

const MovieInfo = ({ movieInfo }) => {
    const {
        poster_path,
        title,
        original_title,
        overview,
        genres,
        production_countries,
        release_date,
        tagline,
    } = movieInfo;

    return (
        <Wrapper>
            <ImageWrapper>
                <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                />
            </ImageWrapper>
            <Info>
                <div>
                    <Title>{`${title} (${helpers.getYear(
                        release_date
                    )})`}</Title>
                    <TitleOriginal>{original_title}</TitleOriginal>
                </div>

                {tagline && (
                    <p>
                        <TitleBold>Slogan: </TitleBold>
                        {tagline}
                    </p>
                )}
                <p>
                    <TitleBold>Country: </TitleBold>
                    {helpers.normalizedArr(production_countries)}
                </p>
                <p>
                    <TitleBold>Genres: </TitleBold>
                    {helpers.normalizedArr(genres)}
                </p>
                <p>
                    <Overview>Overview: </Overview>
                    {overview}
                </p>
                <Details>
                    <DetailsTitle>Additional information</DetailsTitle>

                    <DetailsList>
                        <li>
                            <DetailsLink to={'cast'}>Cast</DetailsLink>
                        </li>
                        <li>
                            <DetailsLink to={'reviews'}>Reviews</DetailsLink>
                        </li>
                    </DetailsList>
                    <Outlet />
                </Details>
            </Info>
        </Wrapper>
    );
};

export default MovieInfo;
