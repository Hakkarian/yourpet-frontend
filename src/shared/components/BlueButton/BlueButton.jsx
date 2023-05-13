import React from "react";

import { Button } from "./BlueButton.styled";

const BlueButton = ({children}) => {

    return (
        <Button type='button'>{children}</Button> 
    )
};

export default BlueButton;