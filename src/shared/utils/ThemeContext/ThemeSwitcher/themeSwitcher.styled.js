import styled from "@emotion/styled";

export const SwitcherStyled = styled.p`
    display: flex;
    position: absolute;
    bottom: 24px;
    right: auto;
    left: auto;
    margin: 0;
    cursor: pointer;

    .svg {
        fill: #FFC107;
    }
    .svg g path {
        fill: #FFC107;
    }
    span {
        font-weight: 500;
        font-size: 12px;
        line-height: calc(16 / 12);
        color: ${({ theme }) => theme.colors.black};
    }
    
@media (min-width: 768px) {
    bottom: 64px;
}
@media (min-width: 1280px) {
    flex-direction: row-reverse;
    top: 8px;
    bottom: auto;
    left:88px;
    right: auto;
    svg {
        transform: rotateY(180deg);;
    }
}
`;