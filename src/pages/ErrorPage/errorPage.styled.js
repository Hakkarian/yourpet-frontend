import styled from "@emotion/styled";

import err_mobile from '../../images/bg_img/error/404_mobile_origin.png';
// import err_mobile_2x from '../../images/bg_img/error/404_mobile_2x_origin.png';
import err_tab from '../../images/bg_img/error/404_tab_origin.png';
// import err_tab_2x from '../../images/bg_img/error/404_tab_2x_origin.png';
import err_desc from '../../images/bg_img/error/404_desc_origin.png';
// import err_desc_2x from '../../images/bg_img/error/404_desc_2x_origin.png';

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
        color: ${({theme})=>theme.colors.black};
    }
    .cat_div {
        width: 280px;
        height: 123px;
        margin-top:80px;
        margin-bottom:60px;

        // background-color:red;
        // background-position: 50% -54px;
        // background-size: 475px 457px;
        // background-repeat: no-repeat;

        background-image: url(${err_mobile});

    }
    button {
        font-weight: 700;
        font-size: 16px;
        line-height: calc(22 / 16);
        letter-spacing: 0.04em;
    }
    svg {
        width: 24px;
        height: 24px;
        fill:${({theme})=>theme.colors.white}
    }


    @media (min-width: 767px) {

        h2 {
            width:auto;
        }
        .cat_div {
            width: 704px;
            height: 308px;
            margin-bottom:70px;

            background-image: url(${err_tab});
        }
    }
    

    @media (min-width: 1279px) {

        h2 {
            font-weight: 600;        
            font-size: 32px;
            line-height: 130%;
        }
        .cat_div {
            position: relative;

            display: flex;
            justify-content: center;

            width: 802px;
            height: 360px;
            margin-bottom:18px;

            background-image: url(${err_desc});

        }
        .yellow_round_div {
            position: absolute;;
            z-index: -1;
            top: 5%;
            bottom: 6%;
            left: 32%;
            right: 28%;

            border-radius: 50%;

            background-color: ${({theme})=>theme.colors.yellow};
        }
        .yellow_round_back_div {
            position: absolute;;
            z-index: -2;
            width: 100%;
            height: 100%;

            background-color:red;
        }
    }
`;