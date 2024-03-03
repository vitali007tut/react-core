import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Logouted = () => {
    return (
        <div>
            <NavLink to="/react-core/login" style={{marginRight: '10px'}}>
                <Button variant="contained">Login</Button>
            </NavLink>
            <NavLink to="/react-core/signup">
                <Button variant="contained">Sign up</Button>
            </NavLink>
        </div>
    );
};

export default Logouted;
