// тут прописуються стилі для БІЛОЇ кнопки!

export const whiteBtnStylesFunc = (width, { colors, background }) => `
    width: ${width};
    padding: 8px 20px;
    border: 2px solid ${colors.blue};
    color:${colors.blue};
    background: ${colors.white};

    :hover, :focus {
        padding: 10px 22px;
        color:${colors.white};
        background: ${background.azure};
        border: none;
    }
`;