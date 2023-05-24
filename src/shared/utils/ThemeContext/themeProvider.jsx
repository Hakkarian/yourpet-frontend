import React, { useState } from 'react';

const ThemeContext = React.createContext();


const ThemeProviderContext = ({ children }) => {
    const [isLight, setIsLight] = useState(true);
    const toggleTheme = () => setIsLight(isLight => !isLight);
    
    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export {ThemeContext, ThemeProviderContext};