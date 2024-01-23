import { Outlet } from 'react-router-dom';
import Styled from './SharedLayout.styled';

const { Header, Container, MenuList, MenuLink, Wrapper } = Styled;

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <MenuList>
                        <li>
                            <MenuLink to={'/'}>Home</MenuLink>
                        </li>
                        <li>
                            <MenuLink to={'/movies'}>Movies</MenuLink>
                        </li>
                    </MenuList>
                </Container>
            </Header>

            <Wrapper>
                <Container>
                    <Outlet />
                </Container>
            </Wrapper>
        </>
    );
};

export default SharedLayout;
