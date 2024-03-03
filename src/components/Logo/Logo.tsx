import { Link } from "react-router-dom";
import s from "./logo.module.css";

// type Props = {
//
// };
const Logo = (/*props: Props*/) => {
    return (
        <Link className={s.logoText} to="/react-core/">
            LOGO
        </Link>
    );
};

export default Logo;
