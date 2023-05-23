import React, { useState } from 'react';

const ModalContext = React.createContext();


const ModalProvider = ({ children }) => {
    const [isOpenContext, setIsOpenContext] = useState(false);
    
    const open = () => setIsOpenContext(true);
    const close = () => setIsOpenContext(false);
    const toggleContext = () => setIsOpenContext(isOpenContext => !isOpenContext);
   
    
    return (
        <ModalContext.Provider value={{ isOpenContext, open, close, toggleContext }}>
            {children}
        </ModalContext.Provider>
    )
};

export {ModalContext, ModalProvider};