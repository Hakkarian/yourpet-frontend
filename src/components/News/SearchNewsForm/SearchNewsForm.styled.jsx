import styled from '@emotion/styled';

export const FormSearch = styled.form`
  position: relative;
  width: 280px;
  margin-bottom: 44px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    width: 492px;
  }
  @media screen and (min-width: 1024px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
   height: 44px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  &: focus:  box-shadow: ${({ theme }) => theme.shadow.hover};
  border-radius: 40px;
   border: 1px solid transparent;
  padding:8px 20px;
   box-sizing: border-box;
   outline:none;
   &:: placeholder {font-size: 14px}

    @media screen and (min-width: 768px) {
    width: 492px;
    
  }

  @media screen and (min-width: 1024px) {
    width: 608px;
  
    &:: placeholder {font-size: 20px}
  }
`;
export const Wrap = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

export const ButtonIcon = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: '#757575';
  svg {
    color: ${({ color }) => color ?? color};
  }
  svg:hover {
    color: ${({ hoverColor }) => hoverColor ?? hoverColor};
  }

  @media screen and (min-width: 768px) {
    right: 20px;
  }

  @media screen and (min-width: 1024px) {
  }
`;
