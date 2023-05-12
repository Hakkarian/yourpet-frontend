import styled from "@emotion/styled";

import err_mobile from "./bg_img/404_mobile_origin.png";
import err_mobile_2x from "./bg_img/404_mobile_2x_origin.png";
import err_tab from "./bg_img/404_tab_origin.png";
import err_tab_2x from "./bg_img/404_tab_2x_origin.png";
import err_desc from "./bg_img/404_desc_origin.png";
import err_desc_2x from "./bg_img/404_desc_2x_origin.png";

export const DivTag = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;

    min-height: calc(100vh - 60px);

    h2 {
        width: 280px;
        margin-top:80px;
        margin-bottom:0;

        text-align:center;
        line-height: calc(33 /24);

    }
    div {
        width: 280px;
        height: 123px;
        margin-top:80px;
        margin-bottom:60px;

        // background-color:red;
        // background-position: 50% -54px;
        // background-size: 475px 457px;
        // background-repeat: no-repeat;

        background-image: url(${err_mobile});
        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image:
                url(${err_mobile_2x});
            }
    }


    @media (min-width: 767px) {

        h2 {
            width:auto;
        }
        div {
            width: 704px;
            height: 308px;
            margin-bottom:70px;

            background-image: url(${err_tab});
            @media (min-device-pixel-ratio: 2),
                (min-resolution: 192dpi),
                (min-resolution: 2dppx) {
                background-image:
                    url(${err_tab_2x});
                }
        }
    }
    

    @media (min-width: 1279px) {

        h2 {
            font-weight: 600;        
            font-size: 32px;
            line-height: 130%;
        }
        div {
            width: 802px;
            height: 360px;
            margin-bottom:18px;

            background-image: url(${err_desc});
            @media (min-device-pixel-ratio: 2),
                (min-resolution: 192dpi),
                (min-resolution: 2dppx) {
                background-image:
                    url(${err_desc_2x});
                }
        }
    }
`;