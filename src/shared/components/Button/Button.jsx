
import { ButtonTag } from "./button.styled";

const Button = (props) => {
    const { type, color, width, scale, marginRight, children } = props;

    return (
        <ButtonTag  {...props} type={type} color={color} width={width} scale={scale} margin-right={marginRight}>
            {children}
        </ButtonTag>
    )
};
Button.defaultProps = {
    type: 'button',
    color: "white",
    width: "auto",
    scale: "1",
    marginRight: "auto",
    children: 'NO TEXT ON BUTTON!!!',
};


export default Button;