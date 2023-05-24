import styled from '@emotion/styled';
import { ReactComponent as AddIcon } from '../../icons/plus-small-user.svg';

export const PlusIcon = styled(AddIcon)`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  stroke: rgb(253, 247, 242);
  fill: rgb(253, 247, 242);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  min-width: 129px;
  max-height: 40px;
  padding: 8px 0px;
  font-family: Manrope-SemiBold;
  font-size: 16px;
  color: rgb(253, 247, 242);
  background-color: rgb(84, 173, 255);
  border-width: 0px;
  border-color: rgb(84, 173, 255);
  border-style: solid;
  border-radius: 40px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media screen and (min-width: 768px) {
    position: static;
    translate: 0px;
    flex-direction: row;
    gap: 8px;
    width: 134px;
    height: 40px;
    padding: 4px 20px;
    font-family: Manrope-Bold;
    font-size: 16px;
    border-radius: 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      290.46deg,
      rgb(65, 158, 241) 0%,
      rgb(155, 208, 255) 107.89%
    );
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover::before,
    &:focus::before {
      opacity: 1;
    }

    & svg {
      stroke: #fff;
    }
  }
`;

export const PaginationButton = styled.button`
  position: relative;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  min-width: 129px;
  max-height: 40px;
  padding: 8px 0px;
  font-family: Manrope-SemiBold;
  font-size: 16px;
  color: rgb(253, 247, 242);
  background-color: rgb(84, 173, 255);
  border-width: 0px;
  border-color: rgb(84, 173, 255);
  border-style: solid;
  border-radius: 40px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export const Box = styled.div`
  height: 70px;
  width: 70px;
`;

export const PetsWrap = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px and max-width: 1279px) {
    width: 700px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 40px 0px 24px;

  @media screen and (min-width: 768px) {
    margin: 40px 0px 20px;
  }

  @media screen and (min-width: 1280px) {
    margin: 60px 0px 24px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
