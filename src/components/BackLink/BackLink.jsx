import Styled from './BackLink.styled';

const { StyledLink, BackIcon } = Styled;

const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <BackIcon />
            {children}
        </StyledLink>
    );
};

export default BackLink;
