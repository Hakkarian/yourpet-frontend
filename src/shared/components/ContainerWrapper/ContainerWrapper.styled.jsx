import styled from '@emotion/styled';

import bg_mobile_paws from '../../../images/bg_img/mobile/bg_mobile_paws_full_original.png';
import bg_mobile_paws_2x from '../../../images/bg_img/mobile/bg_mobile_paws_full_2x_original.png';
import bg_tab_paws from '../../../images/bg_img/tab/bg_tablet_paws_full_original.png';
import bg_tab_paws_2x from '../../../images/bg_img/tab/bg_tablet_paws_full_2x_original.png';
import bg_desc_paws from '../../../images/bg_img/desc/bg_desc_paws_full_original.png';
import bg_desc_paws_2x from '../../../images/bg_img/desc/bg_desc_paws_full_2x_original.png';
import { background, retina } from 'shared/utils/mixin.styled';

export const ContainerWrapper = styled.div`
  /* width: 100%; */

  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 767px) {

    background-image: url(${bg_mobile_paws});
    ${background('no-repeat', 'center', 'cover')};
    ${retina(bg_mobile_paws_2x)};
  }
  @media screen and (min-width: 768px) {


    background-image: url(${bg_tab_paws});
    ${background('no-repeat', 'center', 'cover')};
    ${retina(bg_tab_paws_2x)};
  }
  @media screen and (min-width: 1280px) {


    background-image: url(${bg_desc_paws});
    ${background('no-repeat', 'center', 'cover')};
    ${retina(bg_desc_paws_2x)};
  }
`;
