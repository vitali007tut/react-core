import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/actions.ts";
import { cleareLogin } from "../../../hooks/lsService.ts";
import s from "./Logined.module.css";

function Logined() {
    const { setAuth } = useActions();

    const handleLogout = () => {
        setAuth(false);
        cleareLogin();
    };

    return (
        <div className={s.buttons}>
            <NavLink to="/react-core/">
                <Button variant="contained" onClick={handleLogout}>
                    Logout
                </Button>
            </NavLink>
            <NavLink to="/react-core/favorites">
                <Button variant="contained">Favorites</Button>
            </NavLink>
            <NavLink to="/react-core/history">
                <Button variant="contained">History</Button>
            </NavLink>
        </div>
    );
}

export default Logined;
