// тут прописуються стилі для СИНЬОЇ кнопки!

export const blueBtnStylesFunc = (width, { colors, background }) => `
    width: ${width};
    padding: 8px 20px;
    border: 2px solid ${colors.blue};
    color:${colors.white};
    background: ${colors.blue};

    transition: background-color 500ms ${({ theme }) =>
      theme.utils.cubicBezier}, color 500ms ${({ theme }) =>
  theme.utils.cubicBezier};

    :hover, :focus {
        color:${colors.white};
 
    }
`;