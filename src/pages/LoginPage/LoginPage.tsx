import { useState } from "react";
import s from "./LoginPage.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { isCorrectData, isUserExists, setUser } from "../../hooks/lsService";
import { Button } from "@mui/material";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerExist, setCustomerExist] = useState(true);
    const [isUserCorrect, setIsUserCorrect] = useState(true);
    const navigate = useNavigate();
    const { setAuth, setCurrentUser } = useActions();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isUserExists(email)) {
            setCustomerExist(false);
            return;
        }

        if (!isCorrectData(email, password)) {
            setIsUserCorrect(false);
        } else {
            setAuth(true);
            navigate("/");
            setUser(email);
            setCurrentUser(email);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.title}>LogIn</div>
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setCustomerExist(true);
                    setIsUserCorrect(true);
                }}
                pattern="\D{3,}"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setCustomerExist(true);
                    setIsUserCorrect(true);
                }}
                pattern="\D{3,}"
                required
            />
            <Button variant="contained" type="submit">
                Submit
            </Button>
            {!customerExist && (
                <p className={s.warning}>
                    Customer doesn't exist, please <NavLink to="/signup">signup</NavLink>
                </p>
            )}
            {!isUserCorrect && (
                <p className={s.warning}>
                    Password incorrect, please try one more time or{" "}
                    <NavLink to="/signup">signup</NavLink>
                </p>
            )}
        </form>
    );
}

export default LoginPage;
