import styled from '@emotion/styled';

const ReusableButton = styled.button`
  min-width: ${({ theme }) => theme.spacing(41)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.03em;
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.spacing(5)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.yellow};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.spacing(10)};

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;
`;

export default ReusableButton;
