import styled from "@emotion/styled";

import { whiteBtnStylesFunc, blueBtnStylesFunc, yellowBtnStylesFunc } from "./index";


const switchColor = ({color,width,theme}) => {

    switch (color) {
        case "white":
            return whiteBtnStylesFunc(width, theme);
        case "blue":
            return blueBtnStylesFunc(width, theme);
        case "yellow":
            return yellowBtnStylesFunc(width, theme);
    
        default:
            return whiteBtnStylesFunc(width, theme);
    };
};

export const ButtonTag = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 40px;

    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
    ${switchColor}

    :active {
        transform: scale(${({scale})=>scale});
    }
    :hover {
        cursor: pointer;
    }
    svg {
        margin-left:12px;
        fill:red;

    }
`;