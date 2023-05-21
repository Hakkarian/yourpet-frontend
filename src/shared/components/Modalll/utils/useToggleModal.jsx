import { useState } from "react";

export const useToggleModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  // console.log("isOPEN_useTOGGLE -->", isOpen);

  return { isOpen, open, close, toggle };
};