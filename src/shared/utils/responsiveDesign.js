const { css } = require('@emotion/react');
const { default: styled } = require('@emotion/styled');

const responsiveMixin = (property, values) => {
  const breakpoints = {
    xs: 0,
    sm: 480,
    mg: 768,
    lg: 900,
    xl: 1280,
  };
  return css`
    ${Object.keys(values).map(key => {
      const breakpoint = breakpoints[key];
      const value = values[key];
      return css`
        @media (min-width: ${breakpoint}px) {
          ${property}: ${value};
        }
      `;
    })}
  `;
};

const Title = styled.h1`
  font-size: 24px;

  ${responsiveMixin('font-size', { sm: '28px', md: '32px', xl: '36px' })}
`;
const Paragraph = styled.p`
  font-size: 16px;
  ${responsiveMixin('font-size', { sm: '12px', md: '16px', xl: '18px' })}
`;

const Div = styled.div`
  width: 44px;
  background-color: red;
  ${responsiveMixin('width', { sm: '36px', md: '44px', xl: '60px' })}
  ${responsiveMixin('background-color', { sm: 'green', md: 'red', xl: 'yellow' })}
`;

export default responsiveMixin;