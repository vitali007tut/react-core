import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/actions.ts";

function Logined() {
    const { setAuth } = useActions();
    // const { removeLoginedUser } = useActions();

    const handleLogout = () => {
        setAuth(false);
        // removeLoginedUser()
    };

    return (
        <>
            <Button variant="contained" onClick={handleLogout}>
                Logout
            </Button>
            <NavLink to="/react-core/favorites">
                <Button variant="contained">Favorites</Button>
            </NavLink>
            <NavLink to="/react-core/history">
                <Button variant="contained">History</Button>
            </NavLink>
        </>
    );
}

export default Logined;
