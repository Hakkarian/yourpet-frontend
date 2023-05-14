
import { ButtonTag } from "./button.styled";

const Button = (props) => {
    const { type, color, width, scale, children } = props;

    return (
        <ButtonTag  {...props} type={type} color={color} width={width} scale={scale}>
            {children}
        </ButtonTag>
    )
};
Button.defaultProps = {
    type: 'button',
    color: "white",
    width: "auto",
    scale: "1",
    children: 'NO TEXT ON BUTTON!!!',
};


export default Button;