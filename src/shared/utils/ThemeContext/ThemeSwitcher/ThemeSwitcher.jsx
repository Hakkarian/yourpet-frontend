import { SwitcherStyled } from './themeSwitcher.styled';
import { ReactComponent as Paw } from './paw.svg';

const ThemeSwitcher = (props) => {
    const { isLight } = props;

    return (
        <SwitcherStyled {...props}>
            <span>{isLight ? "Dark pet" : "Light pet"}</span>
            <Paw className='svg' />
        </SwitcherStyled>
    )
};
ThemeSwitcher.defaultProps = {
    isLight: false,
};


export default ThemeSwitcher;