import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const Button = styled.button`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    maxWidth: ${props => props.maxWidth};
`;

const ReusableButton = ({
  text,
  type,
  onClick,
  backgroundColor,
  color,
  fontSize,
  padding,
  border,
  borderRadius,
  maxWidth
}) => {
  return (
    <Button
      type={type}
      ocClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      maxWidth={maxWidth}
    >
      {text}
    </Button>
  );
};

ReusableButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  maxWidth: PropTypes.string,
};

ReusableButton.defaultProps = {
  type: 'button',
  backgroundColor:'yellow',
  color: '#fff',
  fontSize: '16px',
  padding: '7px 15px',
  border: '1px solid black',
  borderRadius: '5px',
  maxWidth: '165px',
};

export default ReusableButton;