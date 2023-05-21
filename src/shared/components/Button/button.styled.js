import styled from "@emotion/styled";

import { whiteBtnStyles, blueBtnStyles, yellowBtnStyles, closeBtnStyles } from "./buttonStyles";


const switchColor = ({color,theme}) => {

    switch (color) {
        case "white":
            return whiteBtnStyles(theme);
        case "blue":
            return blueBtnStyles(theme);
        case "yellow":
            return yellowBtnStyles(theme);
        case "close":
            return closeBtnStyles(theme);
    
        default:
            return whiteBtnStyles(theme);
    };
};

export const ButtonTag = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    width: ${({width})=>width};

    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background 300ms cubic-bezier(0.4, 0, 0.2, 1);
    ${switchColor}

    :active {
        transform: scale(${({scale})=>scale});
    }
    :hover {
        cursor: pointer;
        
    }
    svg {
        margin-left:12px;
    }
`;