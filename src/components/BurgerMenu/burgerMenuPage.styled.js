import styled from "@emotion/styled";

export const BurgerDiv = styled.div`
    @keyframes openModal {
        0% {
            height: 0vh;
        }
        60% {
            height: 0vh;
        }
        100% {
            height: 100vh;
        }
    }
    animation-name: openModal;
    animation-duration: 400ms;
    animation-timing-function: linear;

    display: flex;
    justify-content: center;
    // align-items: flex-start;
    width: 100vw;
    height: 100vh;

    a {
        text-decoration: none;
    }
    .logo_link {
        position: absolute;
        top: 20px;
        left: 20px;
        
        @keyframes dropHeader {
            0% {
                // top: -22px;
                // opacity: 0;
                transform: rotateX(90deg);
            }
            80% {
                // top: -22px;
                // opacity: 0;
                transform: rotateX(90deg);
            }
            100% {
                // top: 20px;
                // opacity: 1;
                transform: rotateX(0deg);
            }
        }
        animation-name: dropHeader;
        animation-duration: 800ms;
        animation-timing-function: linear;
    }
    .btn_close {
        top: 18px;
        right: 22px;
        cursor: pointer;
        
        @keyframes opacityCross {
            0% {
                opacity: 0;
            }
            95% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        animation-name: opacityCross;
        animation-duration: 1400ms;
        animation-timing-function: linear;

    @media (min-width: 768px) {
        top: 17px;
        right: 39px;
    }
    }
    svg path {
        stroke: ${({theme})=>theme.colors.yellow};
    }
    // .btn_close {
    //     position: absolute;
    //     top: 20px;
    //     right: 20px;
    // }
`;