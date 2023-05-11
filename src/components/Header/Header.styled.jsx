import styled from "@emotion/styled";

export const HeaderCss = styled.header`
    width: 100%;
    height: ${({theme}) => theme.spacing(15)}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AuthWrapCss = styled.div`
    display: flex;
    align-items: center;

    margin-left: auto;
`