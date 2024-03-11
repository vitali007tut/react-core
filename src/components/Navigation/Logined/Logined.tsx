import { Button } from "@mui/material";
import { useActions } from "../../../hooks/actions.ts";

function Logined() {
    const { setAuth } = useActions();

    const handleLogout = () => {
        setAuth(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleLogout}>
                Logout
            </Button>
            <Button variant="contained">Favorites</Button>
            <Button variant="contained">History</Button>
        </div>
    );
}

export default Logined;
