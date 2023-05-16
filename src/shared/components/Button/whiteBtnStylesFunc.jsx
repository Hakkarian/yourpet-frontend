// тут прописуються стилі для БІЛОЇ кнопки!

export const whiteBtnStylesFunc = (width, { colors}) => `
    width: ${width};
    padding: 8px 20px;
    border: 2px solid ${colors.blue};
    color:${colors.blue};
    background: ${colors.white};

    transition: background-color 250ms ${({ theme }) =>
      theme.utils.cubicBezier}, color 250ms ${({ theme }) =>
  theme.utils.cubicBezier};

    :hover, :focus {
        color:${colors.white};

    }
`;