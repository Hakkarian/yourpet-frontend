import styled from '@emotion/styled';

export const FormSearch = styled.form`
  position: relative;
  width: 280px;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 492px;
  }
  @media screen and (min-width: 1024px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
   height: 40px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  &: focus:  box-shadow: ${({ theme }) => theme.shadow.hover};
  border-radius: 40px;
   border: 1px solid transparent;
  padding:8px 20px;
   box-sizing: border-box;
   outline:none;

    @media screen and (min-width: 768px) {
    width: 492px;
    height: 44px;
  }

  @media screen and (min-width: 1024px) {
    width: 608px;
    height: 44px;
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  padding: 12px 14px;
  right: 12px;
  top: 54px;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: black;

  @media screen and (min-width: 768px) {
    right: 15px;
    top: 57px;
  }

  @media screen and (min-width: 1024px) {
    top: 105px;
  }
`;