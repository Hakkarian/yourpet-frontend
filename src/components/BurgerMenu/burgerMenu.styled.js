import styled from "@emotion/styled";

export const BurgerDiv = styled.div`
    @keyframes openModal {
        0% {
            // transform: translateY(600px);
            // transform: rotateX(-90deg);
            height: 0vh;
        }
        // 90% {
        //     transform: translateY(0px);
        //     // transform: rotateX(0deg);
        //     height: 0vh;
        // }
        100% {
            // transform: translateY(0px);
            // transform: rotateX(0deg);
            height: 100vh;
        }
    }
    animation-name: openModal;
    animation-duration: 300ms;
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
    }
    .btn_close {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;