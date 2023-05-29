import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field } from 'formik';
import ReusableButton from 'shared/components/ReusableButton';
import ReusableTitle from 'shared/components/ReusableTitle';
import { color, font } from 'shared/utils/mixin.styled';

export const FlexDivCss = styled.div`
  margin-bottom: 40px;
  padding: 40px 12px;

  background-color: ${({theme}) => theme.colors.white};

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 60px 75px;
  }
`;

export const InputEmail = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;

  ::placeholder {
  }
  :focus {
    outline: none;
  }
`;
export const InputPassword = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;

  ::placeholder {
  }
  :focus {
    outline: none;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
export const Text = styled.p`
  line-height: 16px;

  margin-top: 20px;
`;
export const StyledLink = styled(Link)``;
export const Error = styled.p`
  padding-left: 12px;
  margin-top: 4px;
`;
export const Lable = styled.label`
  position: relative;
`;
export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 17px;
  top: 17px;
  transform: translate(35%, -35%);
`;
export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const ButtonEye = styled.button`
  min-width: 0;
  position: absolute;
  top: 17%;
  right: 2%;
  background-color: transparent;
  border: none;
`;

export const AnchorCss = styled.div`
  position: relative;
`;

export const LabelCss = styled.label`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0%, -50%);
`;

export const ReusableButtonCss = styled(ReusableButton)`
  width: 100%;

  ${color('#fff', ({ theme }) => theme.colors.blue)}


  &:hover, &:focus {
    border: 1px solid blue;
  }
`;
export const AbsDivCss = styled.span`
  position: absolute;
`;

export const ReusableTitleCss = styled(ReusableTitle)`
  margin-top: 0;
  margin-bottom: 30px;

  text-align: center;

  font-weight: 500;
  line-height: 1.375;

  @media screen and (min-width: 768px) {
    line-height: 1.361;
  }
`;

export const TextWrapCss = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;

  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
`;

export const TextCss = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  ${font(null, 1.3, 500, '0.03em', 'red')}
`;
