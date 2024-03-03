import { Link } from "react-router-dom";
import s from "./logo.module.css";
import AdbIcon from '@mui/icons-material/Adb';

// type Props = {
//
// };
const Logo = (/*props: Props*/) => {
    return (
        <Link className={s.logoText} to="/react-core/">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            LOGO
        </Link>
    );
};

export default Logo;
