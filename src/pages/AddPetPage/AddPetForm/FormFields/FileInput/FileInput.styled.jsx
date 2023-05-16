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
  width: ${({ theme }) => theme.spacing(6)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  fill: ${({ theme }) => theme.colors.blue};
  transform: scale(2) translate(-25%, -25%);
`;

export const FilePreview = styled.img`
  display: ${({ photoUrl }) => {
    if (!photoUrl) return 'none';
    return 'block';
  }};
  width: ${({ theme }) => theme.spacing(28)}px;
  height: ${({ theme }) => theme.spacing(28)}px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(5)}px;
`;

export const CustomLabel = styled.label`
  position: relative;
  display: block;
  width: ${({ theme }) => theme.spacing(28)}px;
  height: ${({ theme }) => theme.spacing(28)}px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: ${({ theme }) => theme.spacing(5)}px;
`;
