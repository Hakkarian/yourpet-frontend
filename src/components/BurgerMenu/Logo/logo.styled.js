import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const LinkLogoStyles = styled(Link)`
    img {
        width: 119px;
        height: 20px;
    }

    
    @media (min-width: 767px) {
        img {
            width: 162px;
            height: 28px;
        }
    }
`;