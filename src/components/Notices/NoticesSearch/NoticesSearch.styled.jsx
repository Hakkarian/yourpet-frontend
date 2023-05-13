import styled from '@emotion/styled';

export const TitleSearch = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: ${({ theme }) => theme.black};
`;

export const FormSearch = styled.form`
  display: block;
  width: 100%px;
  height: 101px;
  margin: auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  // height: 44px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  &: focus:  box-shadow: ${({ theme }) => theme.shadow.hover};
  border-radius: 40px;
  border:none;
  padding:10px 40px 10px 20px;
   box-sizing: border-box;
   outline:none;
`;

export const ButtonIcon = styled.button`
  // position: absolute;
  // top: 140px;
  // left: 270px;
  //     border: 0;
  // background: transparent;
  position: absolute;
  padding: 12px 14px;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: black;
}
`;
