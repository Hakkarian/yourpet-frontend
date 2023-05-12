import styled from "@emotion/styled";


const Button = styled.button`
  min-width: ${({ theme }) => theme.spacing(41)}px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)}px;

  font-size: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(5)}px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.yellow};

  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.spacing(10)}px;

  &:hover,
  &:focus {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out, border 250ms ease-in-out;
`;

const ReusableButton = ({type = 'button', text = "", children, onClick}) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
      {children}
    </Button>
  );
};





export default ReusableButton;