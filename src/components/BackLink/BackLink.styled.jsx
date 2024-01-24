import styled from '@emotion/styled';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Styled = {
    StyledLink: styled(Link)`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        text-transform: uppercase;
        transition: color 0.2s linear;
        margin-bottom: 40px;

        &:is(:hover, :focus) {
            color: orange;
        }
    `,
    BackIcon: styled(HiArrowLeft)`
        width: 16px;
        height: 16px;
    `,
};

export default Styled;
