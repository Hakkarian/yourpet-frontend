// тут прописуються стилі для ЖОВТОЇ кнопки!

export const yellowBtnStylesFunc = (width, { colors }) => `
    width: ${width};
    padding: 8px 20px;
    border: 2px solid ${colors.yellow};
    color:${colors.yellow};
    background: ${colors.white};

    transition: background-color 250ms ${({ theme }) =>
      theme.utils.cubicBezier}, color 250ms ${({ theme }) =>
  theme.utils.cubicBezier};

    :hover, :focus {
        color:${colors.white};
        background-color: ${colors.yellow};
    }
`;