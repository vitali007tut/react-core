import { Link } from "react-router-dom";
import s from "./logo.module.css";
import AdbIcon from "@mui/icons-material/Adb";

const Logo = () => {
    return (
        <Link className={s.logoText} to="/">
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            LOGO
        </Link>
    );
};

export default Logo;
