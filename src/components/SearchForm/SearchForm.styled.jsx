import styled from '@emotion/styled';
import { ImSearch } from 'react-icons/im';

const Styled = {
    FormWrapper: styled.div`
        display: flex;
        justify-content: center;
    `,
    Form: styled.form`
        position: relative;
    `,

    Input: styled.input`
        width: 300px;
        height: 36px;
        outline: transparent;
        border-radius: 10px;
        border: 1px solid #afafaf;
        font-size: 18px;
        padding: 0px 15px;
    `,

    SearchButton: styled.button`
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    `,

    SearchIcon: styled(ImSearch)`
        width: 18px;
        height: 18px;
        fill: #6e6e6e;
    `,
};

export default Styled;
