import { useContext } from 'react';
import { ThemeContext } from '../themeProvider';

import { ThemeProvider } from "@emotion/react";
import { theme, themeDark } from '../../../../constants';


const EmotionThemeProvider = ({ children }) => {
    const { isLight } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={isLight ? theme : themeDark}>
            {children}
        </ThemeProvider>
    )
};


export default EmotionThemeProvider;