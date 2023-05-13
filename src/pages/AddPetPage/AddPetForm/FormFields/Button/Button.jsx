import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  transparent = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      transparent={transparent}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
