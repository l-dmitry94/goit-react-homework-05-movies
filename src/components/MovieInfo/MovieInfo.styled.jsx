import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Styled = {
    Wrapper: styled.div`
        display: flex;
        gap: 40px;
        line-height: 1.5;
    `,

    ImageWrapper: styled.div`
        max-width: 350px;
    `,

    Info: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    `,

    Title: styled.h2`
        font-size: 28px;
        margin-bottom: 8px;
    `,

    TitleOriginal: styled.p`
        font-size: 18px;
        color: #777777;
        margin-bottom: 20px;
    `,

    TitleBold: styled.b`
        display: inline-block;
        width: 120px;
    `,

    Overview: styled.b`
        display: block;
    `,

    Details: styled.div`
        margin-top: 20px;
    `,

    DetailsTitle: styled.h3`
      font-size: 20px; 
      margin-bottom: 16px; 
    `,

    DetailsList: styled.ul`
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
    `,

    DetailsLink: styled(NavLink)`
        min-width: 100px;
        display: inline-block;
        text-align: center;
        background-color: #d8d4d4;
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

};

export default Styled;
