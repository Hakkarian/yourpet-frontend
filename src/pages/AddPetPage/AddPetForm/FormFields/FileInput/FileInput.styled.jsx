import styled from '@emotion/styled';

import { ReactComponent as Plus } from 'icons/plus.svg';

export const CustomInput = styled.input`
  display: none;
`;

export const PlusIcon = styled(Plus)`
  display: ${({ photourl }) => {
    if (photourl) return 'none';
    return 'block';
  }};
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme }) => theme.colors.blue};
  transform: scale(2) translate(-25%, -25%);

  path {
    fill: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(9.6)};
    height: ${({ theme }) => theme.spacing(9.6)};
    transform: scale(3.2) translate(5%, 5%);
  }
`;

export const FilePreview = styled.img`
  display: ${({ photoUrl }) => {
    if (!photoUrl) return 'none';
    return 'block';
  }};
  width: ${({ theme }) => theme.spacing(28)};
  height: ${({ theme }) => theme.spacing(28)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(45.5)};
    height: ${({ theme }) => theme.spacing(45.5)};
    border-radius: ${({ theme }) => theme.spacing(10)};
  }
`;

export const CustomLabel = styled.label`
  position: relative;
  display: block;
  width: ${({ theme }) => theme.spacing(28)};
  height: ${({ theme }) => theme.spacing(28)};
  background-color: ${({ theme }) => theme.colors.lightblue};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(45.5)};
    height: ${({ theme }) => theme.spacing(45.5)};
    border-radius: ${({ theme }) => theme.spacing(10)};
  }
`;
