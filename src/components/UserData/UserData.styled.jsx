import styled from '@emotion/styled';
import { ReactComponent as Camera } from '../../icons/camera.svg';
import { ReactComponent as Cross } from '../../icons/cross-small-2.svg';
import { Form, ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)``;

export const ErrorWrap = styled.div`
  position: absolute;
  top: -12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1.33;
  color: #f43f5e;
`;

export const CrossIcon = styled(Cross)`
  fill: none;
  width: 24px;
  height: 24px;
`;

export const FormThumb = styled(Form)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 20px 76px 20px 20px;
    gap: 71px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 20px 24px 20px 16px;
    border-radius: 40px;
    width: 395px;
    gap: 0;
  }
`;

export const CheckWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDef = styled.img`
  margin-bottom: 14px;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
`;

export const UserImage = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  margin-bottom: 15px;
`;

export const Icon = styled.img`
  color: #54adff;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Input = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  text-align: center;
  margin-bottom: 22px;
`;

export const InputText = styled.span`
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
`;

export const IconWrap = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
`;

export const CameraIcon = styled(Camera)`
  width: 24px;
  height: 24px;
  fill: none;
`;

export const Wrapper = styled.div``;
