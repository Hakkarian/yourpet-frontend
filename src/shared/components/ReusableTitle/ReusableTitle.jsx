import styled from '@emotion/styled';

const ReusableTitle = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${({ theme }) => theme.spacing(12)}px;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export default ReusableTitle;