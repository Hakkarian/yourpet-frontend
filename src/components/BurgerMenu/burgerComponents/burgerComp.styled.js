import styled from "@emotion/styled";

export const BurgerMainStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    // gap:40px;
    margin-top: 13vh;
`;

export const BurgerAuthNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:12px;
    width: 260px;
    margin-top: 40px;
    margin-bottom: 40px;

    button {
        min-width: 165px;
        min-height: 44px;
    
        :hover, :focus {
            svg {
                fill:${({ theme }) => theme.colors.white};
            }
        }
    }
    svg {
        width: 24px;
        height: 24px;
        fill:${({ theme }) => theme.colors.yellow};
        :hover, :focus {
            fill:${({ theme }) => theme.colors.white};
        }
    }

    @keyframes rotateXItems {
        0% {
            transform: rotateX(90deg);
        }
        80% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }
    .one {
        animation-name: rotateXItems;
        animation-duration: 600ms;
        animation-timing-function: linear;
    }
    .two {
        animation-name: rotateXItems;
        animation-duration: 700ms;
        animation-timing-function: linear;
    }
// @media (min-width: 1279px) {
//     flex-direction: row;
// }
`;

export const BurgerUserStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:12px;
    width: 260px;
    margin-top: 40px;
    margin-bottom: 84px;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        color: ${({ theme }) => theme.colors.yellow};
        // font-weight: 500;
        // font-size: 16px;
        line-height: calc(22 / 16);
        letter-spacing: 0.04em;
    }
`;

export const BurgerNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 260px;

    a {
        color: ${({theme})=>theme.colors.black};
        // text-transform: capitalize;
        font-weight: 500;
        font-size: 32px;
        line-height: calc(44 / 33);

        transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        :hover, :focus {
            color:${({ theme }) => theme.colors.yellow};
        }
    }

    
    @keyframes rotateXItems {
        0% {
            transform: rotateX(90deg);
        }
        80% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }
    .four {
        animation-name: rotateXItems;
        animation-duration: 800ms;
        animation-timing-function: linear;
    }
    .five {
        animation-name: rotateXItems;
        animation-duration: 900ms;
        animation-timing-function: linear;
    }
    .six {
        animation-name: rotateXItems;
        animation-duration: 1000ms;
        animation-timing-function: linear;
    }

@media (min-width: 768px) {
    gap: 60px;
    width: auto;

    a {
        font-size: 48px;
        line-height: calc(66 / 48);
        letter-spacing: 0.04em;
    }
}
`;