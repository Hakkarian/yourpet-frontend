import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const Button = styled.button`
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  max-width: ${props => props.maxWidth};
  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBgColor};
    border: ${props => props.hoverBorder};
  }
  &:hover,
  &:focus {
    color: ${props => props.hovfocColor};
    background-color: ${props => props.hovfocBgColor};
    border: ${props => props.hovfocBorder};
  }
  transition: ${props => props.transition};
`;

const ReusableButton = ({
  text,
  children,
  type,
  onClick,
  display,
  alignItems,
  gap,
  backgroundColor,
  color,
  fontSize,
  padding,
  border,
  borderRadius,
  maxWidth,
  hoverColor,
  hoverBgColor,
  hoverBorder,
  hovfocColor,
  hovfocBgColor,
  hovfocBorder,
  transition,
}) => {
  return (
    <Button
      type={type}
      ocClick={onClick}
      display={display}
      alignItems={alignItems}
      gap={gap}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      maxWidth={maxWidth}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
      hoverBorder={hoverBorder}
      hovfocColor={hovfocColor}
      hovfocBgColor={hovfocBgColor}
      hovfocBorder={hovfocBorder}
      transition={transition}
    >
      {text}
      {children}
    </Button>
  );
};

ReusableButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  display: PropTypes.string,
  alignItems: PropTypes.string,
  gap: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  maxWidth: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  hovfocColor: PropTypes.string,
  hovfocBgColor: PropTypes.string,
  hovfocBorder: PropTypes.string,
  transition: PropTypes.string,
};

ReusableButton.defaultProps = {
  type: 'button',
  display: 'inline-block',
  alignItems: '',
  gap: '',
  backgroundColor:'yellow',
  color: '#fff',
  fontSize: '16px',
  padding: '7px 15px',
  border: '1px solid black',
  borderRadius: '5px',
  maxWidth: '165px',
  hoverColor: '',
  hoverBgColor: '',
  hoverBorder: '',
  hovfocColor: '',
  hovfocfBgColor: '',
  hovfocBorder: '',
  transition: '',
  children: <></>
};

export default ReusableButton;