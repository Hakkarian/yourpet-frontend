import styled from '@emotion/styled';
import { ReactComponent as Camera } from '../../icons/camera.svg';
import { ReactComponent as Cross } from '../../icons/cross-small-2.svg';
import { ReactComponent as ConfirmIcon } from '../../icons/check.svg';

export const MainWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 71px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const Confirm = styled(ConfirmIcon)`
  fill: none;
  width: 24px;
  height: 24px;
  stroke: #54adff;
`;

export const CrossIcon = styled(Cross)`
  fill: none;
  width: 24px;
  height: 24px;
  stroke: #bf342a;
`;

export const FormThumb = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;

  &::placeholder {
  color: #888888;
  };
`;

export const InputText = styled.span`
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputP = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
`;

export const IconWrap = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

export const Label = styled.label`
  /* width: 110%; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CameraIcon = styled(Camera)`
  width: 24px;
  height: 24px;
  fill: none;
`;

export const Wrapper = styled.div``;

export const FilePreview = styled.img`
  display: block;
  width: ${({ theme }) => theme.spacing(45.5)};
  height: ${({ theme }) => theme.spacing(45.5)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(10)};
`;

export const CustomLabel = styled.label`
  position: relative;
  display: block;
  width: ${({ theme }) => theme.spacing(45.5)};
  height: ${({ theme }) => theme.spacing(45.5)};
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: ${({ theme }) => theme.spacing(10)};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing(3.75)};
`;

export const StyledDiv = styled.div`
  margin: 0 auto;
`;

export const ConfirmButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 26px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

