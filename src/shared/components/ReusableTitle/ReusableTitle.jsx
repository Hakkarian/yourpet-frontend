import styled from '@emotion/styled';


export const ReusableTitle = styled.h1`
  margin-bottom: 24px;

  text-align: center;
  font-size: ${({ theme }) => theme.spacing(6)}px;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(12)}px;
    margin-bottom: 40px;
  }
`;

export default ReusableTitle;