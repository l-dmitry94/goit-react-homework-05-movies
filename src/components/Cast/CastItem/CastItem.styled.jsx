import styled from '@emotion/styled';

const Styled = {
    Item: styled.li`
        flex-basis: calc((100% - 36px) / 4);
    `,

    ActorImage: styled.img`
        max-height: 211px;
        min-height: 211px;
    `,

    ActorName: styled.h4`
        font-size: 14px;
    `,

    ActorCharacter: styled.p`
        font-weight: 500;
        font-size: 14px;
        color: #777777;
    `,
};

export default Styled;
