import styled from '@emotion/styled';
import { ReactComponent as Camera } from '../../icons/camera.svg';
import { ReactComponent as Cross } from '../../icons/cross-small-2.svg';
import { ReactComponent as ConfirmIcon } from '../../icons/check.svg';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #54adff;
  }
`;

export const EditBtn = styled.button`
  margin-bottom: 22px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  position: relative;
  margin-bottom: 14px;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
`;

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

export const ConfirmBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
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

export const CheckWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
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

export const InputP = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
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

/////
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
