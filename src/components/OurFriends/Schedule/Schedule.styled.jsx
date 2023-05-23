import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  display: grid;
  row-gap: 4px;
  top: 20px;
  left: 0;
  width: 120px;
  height: 135px;
  padding:8px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #54ADFF;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    height: 160px;
    top: 25px;
     }
     @media screen and (min-width: 1280px) {
      top: 30px;
       }
  }
`;
export const Wrapper = styled.div`
  position: relative;
  button {
    padding:0;
    border: none;
    display: block;
    background-color: transparent;
    font-weight: 400;
    font-size: 12px;
    color: #111111;
    width: 100%;
    text-align: inherit;
    cursor:pointer;
    transition: color 250ms ease-in-out;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 19px;
     }
     @media screen and (min-width: 1280px) {
     font-size: 16px;
    line-height: 22px;
     }
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
    .addressItem {
      height: 48px;
    }
  }
  }
`;
export const Item = styled.li`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: 'transparent';
  p{
    line-height: 12px;
    font-size: 12px;
    font-weight: 500;
    @media screen and (min-width: 768px) {
      line-height: 16px;
       }
  }

`;