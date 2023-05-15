// тут прописуються стилі для СИНЬОЇ кнопки!

export const blueBtnStylesFunc = (width, { colors, background }) => `
    width: ${width};
    padding: 8px 20px;
    border: 2px solid ${colors.blue};
    color:${colors.white};
    background: ${colors.blue};

    :hover, :focus {
        padding: 10px 22px;
        color:${colors.white};
        background: ${background.azure};
        border: none;
    }
`;