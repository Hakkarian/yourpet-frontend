import styled from "@emotion/styled";

import err_mobile from "./bg_img/404_mobile_origin.png";
import err_mobile_2x from "./bg_img/404_mobile_2x_origin.png";

export const DivTag = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;

    h2 {
        width: 280px;
        text-align:center;

    }
    div {
        width: 280px;
        height: 123px;

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
`;