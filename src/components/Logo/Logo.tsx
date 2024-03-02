import reactLogo from '../../assets/react.svg'
import s from './logo.module.css'

// type Props = {
//
// };
const Logo = (/*props: Props*/) => {
    return (
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={s.logo} alt="React logo"/>
        </a>
    );
};

export default Logo;