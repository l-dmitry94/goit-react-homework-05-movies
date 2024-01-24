import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Styled = {
    Header: styled.header`
    background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        padding: 15px 0;
    `,
    Container: styled.div`
        max-width: 990px;
        margin: 0 auto;
        padding: 0px 15px;
    `,

    MenuList: styled.ul`
        display: flex;
        gap: 10px;
    `,

    MenuLink: styled(NavLink)`
        display: inline-block;
        font-size: 18px;
        color: #111111;
        font-weight: 500;
        border-radius: 4px;
        padding: 8px 10px;

        &.active {
            color: #fff;
            background-color: #d97828;
        }
    `,

    Wrapper: styled.main`
        padding: 40px 0;
    `
};

export default Styled;
