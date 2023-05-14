import styled from '@emotion/styled';

export const CustomInput = styled.input`
  display: none;
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
  display: block;
  width: ${({ theme }) => theme.spacing(28)}px;
  height: ${({ theme }) => theme.spacing(28)}px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  border-radius: ${({ theme }) => theme.spacing(5)}px;
`;
