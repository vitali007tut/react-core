import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Logouted = () => {
    return (
        <div>
            <NavLink to="/react-core/login" style={{ marginRight: "10px" }}>
                <Button variant="contained">Login</Button>
            </NavLink>
            <NavLink to="/react-core/signup">
                <Button variant="contained">Sign up</Button>
            </NavLink>
            <NavLink to="/react-core/1">
                <Button variant="contained">1111111 up</Button>
            </NavLink>
        </div>
    );
};

export default Logouted;
