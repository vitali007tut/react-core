import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/actions";
import LogoutIcon from "@mui/icons-material/Logout";
import s from "./Logined.module.css";
import { dataKeeperLogin } from "../../../hooks/dataKeeperLogin";

function Logined() {
    const { setAuth } = useActions();

    const handleLogout = () => {
        setAuth(false);
        dataKeeperLogin.remove();
    };

    return (
        <div className={s.buttons}>
            <NavLink to="/">
                <Button
                    variant="contained"
                    onClick={handleLogout}
                    style={{ padding: "6px 0px 6px 10px" }}
                >
                    <LogoutIcon />
                </Button>
            </NavLink>
            <NavLink to="/favorites">
                <Button variant="contained">Favorites</Button>
            </NavLink>
            <NavLink to="/history">
                <Button variant="contained">History</Button>
            </NavLink>
        </div>
    );
}

export default Logined;
