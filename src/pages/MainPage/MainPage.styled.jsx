import styled from "@emotion/styled";

import bg_mobile_pets from "./bg_img/mobile/bg_mobile_pets_full_original.png";
import bg_mobile_paws from "./bg_img/mobile/bg_mobile_paws_full_original.png";
import bg_mobile_pets_2x from "./bg_img/mobile/bg_mobile_pets_full_2x_original.png";
import bg_mobile_paws_2x from "./bg_img/mobile/bg_mobile_paws_full_2x_original.png";
import bg_tab_pets from "./bg_img/tab/bg_tablet_pets_full_original.png";
import bg_tab_paws from "./bg_img/tab/bg_tablet_paws_full_original.png";
import bg_tab_pets_2x from "./bg_img/tab/bg_tablet_pets_full_2x_original.png";
import bg_tab_paws_2x from "./bg_img/tab/bg_tablet_paws_full_2x_original.png";
import bg_desc_pets from "./bg_img/desc/bg_desc_pets_full_original.png";
import bg_desc_paws from "./bg_img/desc/bg_desc_paws_full_original.png";
import bg_desc_pets_2x from "./bg_img/desc/bg_desc_pets_full_2x_original.png";
import bg_desc_paws_2x from "./bg_img/desc/bg_desc_paws_full_2x_original.png";

export const SectionTag = styled.section`
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;

    min-height: calc(100vh - 168px);
    padding: 48px 20px 60px 20px;

    // background-color: rgba(0,0,0,0);
    background-image:url(${bg_mobile_paws});
    background-position: 0% 0%;
    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${bg_mobile_paws_2x});
        }

    h1 {
        margin:0;

        font-family: 'Manrope', sans-serif;
        font-size: 32px;
        line-height: 44px;
    }
    div {
        position: absolute;
        top: 156px;
        right: 0;
        bottom: 0;
        left: 0;
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


    @media (min-width: 767px) {
        min-height: calc(100vh - 148px);
        margin-top: 148px;
        padding: 0px 32px 0px 32px;

        
        background-image:url(${bg_tab_paws});
        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image:
                url(${bg_tab_paws_2x});
            }

        h1 {
            font-size: 68px;
            line-height: calc(100 / 68);
        }
        div {
            top: 375px;
            min-height: 684px;

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


    @media (min-width: 1279px) {
        // min-height: calc(100vh - 148px);
        max-width:1280px;
        margin-top: 100px;
        padding: 0px 0px 0px 16px;
        margin-right: auto;
        margin-left: auto;

        
        background-image:url(${bg_desc_paws});
        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image:
                url(${bg_desc_paws_2x});
            }

        h1 {
            width: 505px;
            margin-top: 188px;

            // font-weight: 800;
            font-size: 68px;
            line-height: 130%;
        }
        div {
            top: 110px;
            left:363px;
            min-height: 684px;

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