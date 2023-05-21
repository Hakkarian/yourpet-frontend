// тут прописуються стилі для ЖОВТОЇ кнопки!


export const yellowBtnStyles = ({ colors }) => `
    padding: 8px 20px;
    border: 2px solid ${colors.yellow};
    color:${colors.yellow};
    background: ${colors.white};

    :hover, :focus {
        padding: 10px 22px;
        color:${colors.white};
        background: ${colors.yellow};
        border:none;
    }
`;