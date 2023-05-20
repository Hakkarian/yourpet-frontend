import styled from "@emotion/styled";

export const BurgerMainStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 82px;
`;

export const BurgerAuthNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;

    button {
        min-width: 165px;
        // background: red;
    }
    .btn {
        // background: red;
    }

@media (min-width: 1279px) {
flex-direction: row;
}
`;

export const BurgerNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;

    margin-top: 40px;

    a:first-of-type {
        color: red;
    }
    a {
        color: #000000;
        // text-transform: capitalize;
        font-weight: 500;
        font-size: 32px;
        line-height: calc(44 / 33);
    }
`;