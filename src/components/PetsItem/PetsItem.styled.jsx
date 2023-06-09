import styled from '@emotion/styled';
import { ReactComponent as DeleteIcon } from '../../icons/trash.svg';

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  margin: 0px auto 20px; 
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
  }
`;

export const Icon = styled(DeleteIcon)`
  fill: none;
  stroke: rgb(84, 173, 255);
  width: 24px;
  height: 24px;
`;

export const Item = styled.li`
  padding: 20px 20px 40px;
  margin-bottom: 20px;
  background: inherit;
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  border-radius: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    /* display: flex; */
    gap: 32px;
    padding: 20px;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  padding: 0;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 1.57;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  display: inline;
`;

export const BtnWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const ContentWrap = styled.div`
  position: relative;
  width: 100$;
  flex-grow: 1;
`;
