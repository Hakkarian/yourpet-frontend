const { default: styled } = require("@emotion/styled");

const LabelCss = styled.label`
  font-size: ${({ theme }) => theme.spacing(4)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const InputCss = styled.input`
  height: ${({ theme }) => theme.spacing(3)}px;
  width: ${({ theme }) => theme.spacing(100)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  border: 1px solid ${props => (props.error ? 'red' : 'gray')};
  border-radius: ${({ theme }) => theme.spacing(3)}px;
  font-size: ${({ theme }) => theme.spacing(4)}px;
`;

const TextErrorCss = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const ReusableInput = ({ type, error, ...rest }) => {
    return (
      <>
        <LabelCss>
          <InputCss type={type} error={error} {...rest} />
          {error && <TextErrorCss>{error}</TextErrorCss>}
        </LabelCss>
      </>
    );
}

export default ReusableInput