import styled from "@emotion/styled";
import {ReactComponent as AddIcon} from '../../icons/plus-small.svg';

export const PlusIcon = styled(AddIcon)`
fill: none;
stroke="#FFFFFF"
`;

export const Button = styled.button`

`;

export const PetsWrap = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const BtnWrap = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
margin-top: 40px;

@media screen and (min-width: 1280px) {
  margin: 0;
}
`;