import styled from "@emotion/styled";

import bg_mobile_pets from "../../images/bg_img/mobile/bg_mobile_pets_full_original.png";
// import bg_mobile_paws from '../../images/bg_img/mobile/bg_mobile_paws_full_original.png';
import bg_mobile_pets_2x from '../../images/bg_img/mobile/bg_mobile_pets_full_2x_original.png';
// import bg_mobile_paws_2x from '../../images/bg_img/mobile/bg_mobile_paws_full_2x_original.png';
import bg_tab_pets from '../../images/bg_img/tab/bg_tablet_pets_full_original.png';
// import bg_tab_paws from '../../images/bg_img/tab/bg_tablet_paws_full_original.png';
import bg_tab_pets_2x from '../../images/bg_img/tab/bg_tablet_pets_full_2x_original.png';
// import bg_tab_paws_2x from '../../images/bg_img/tab/bg_tablet_paws_full_2x_original.png';
import bg_desc_pets from '../../images/bg_img/desc/bg_desc_pets_full_original.png';
// import bg_desc_paws from '../../images/bg_img/desc/bg_desc_paws_full_original.png';
import bg_desc_pets_2x from '../../images/bg_img/desc/bg_desc_pets_full_2x_original.png';
// import bg_desc_paws_2x from '../../images/bg_img/desc/bg_desc_paws_full_2x_original.png';

export const SectionTag = styled.section`
    // position: absolute;
    // top: 60px;
    // right: 0;
    // bottom: 0;
    // left: 0;

    height: calc(100vh - 76px);
    min-height: calc(600px - 76px);
    padding-top: 60px;

    background: rgbs(0,0,0,0);

    div {position: absolute}
    h1 {
        margin:0;

        font-family: 'Manrope', sans-serif;
        font-size: 32px;
        line-height: 44px;
        color: ${({theme})=>theme.colors.black};
    }
    .bg_div {
        position: absolute;
        top: 216px;
        right: 0;
        bottom: 0;
        left: 0;
        // z-index: 1;
        min-height: 384px;

        // background-color: rgba(0,0,0,0);
        background-image:url(${bg_mobile_pets});
        background-position: 58% -54px;
        background-size: 475px 457px;
        background-repeat:no-repeat;
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_mobile_pets_2x});
        }
    }


    @media (min-width: 768px) {
        // height: calc(100vh );
        // min-height: calc(768px - 60px - 45px - 43px);
        padding-top: 80px;
        width: calc(768px - 64px)
        margin-left: auto;
        margin-right: auto;
        // margin-top: 88px;

        
        h1 {
            font-size: 68px;
            line-height: calc(100 / 68);
        }
        .bg_div {
            top: 375px;
            min-width: calc(768px - 64px);
            min-height: calc(394px);

            // background-color: red;
            background-image:url(${bg_tab_pets});
            background-position: 46% -112px;
            background-size: 986px 982px;
            @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image:
                url(${bg_tab_pets_2x});
            }
        }
    }


    @media (min-width: 1280px) {
        // position: relative;
        display: flex;
        // height: calc(100vh - 188px - 76px);
        width:calc(1280px - 32px);
        margin-top: 0px;
        padding: 0px 0px 0px 16px;
        margin-right: auto;
        margin-left: auto;


        h1 {
            width: 525px;
            margin-top: 188px;

            // font-weight: 800;
            font-size: 68px;
            line-height: 130%;
        }
        .bg_div {
            top: 100px;
            left:322px;
            min-width: calc(768px - 64px);
            min-height: calc(100vh - 100px);

            // background-color: red;
            background-image:url(${bg_desc_pets});
            background-position: 50% -104px;
            background-size: 954px 975px;
            @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image:
                url(${bg_desc_pets_2x});
            }
        }
    }
`;
// background-color: ${({theme})=>theme.colors.white};