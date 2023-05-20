import styled from '@emotion/styled';

export const ReusableTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 24px;

  text-align: center;
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(12)};
    margin-top: 70px;
    margin-bottom: 40px;
  }
`;

export default ReusableTitle;
