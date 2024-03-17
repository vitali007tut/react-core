import { useState } from "react";
import s from "./LoginPage.module.css";
import { Button } from "../../components/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { isCorrectData, isUserExists, setUser } from "../../hooks/lsService.ts";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerExist, setCustomerExist] = useState(true);
    const [isUserCorrect, setIsUserCorrect] = useState(true);
    const navigate = useNavigate();
    const { setAuth } = useActions();

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
            navigate("/react-core");
            setUser(email);
        }

        //**! */
        // let usersLS: IUser[] = [];
        // if (localStorage.getItem("appUsers")) {
        //     usersLS = JSON.parse(localStorage.getItem("appUsers") || "");
        // }
        // if (usersLS) {
        //     setCustomerExist(false);
        // }
        // usersLS.forEach((user) => {
        //     if (user.email === email && user.password === password) {
        //         localStorage.setItem("LoginedUser", JSON.stringify(user));
        //         addLoginedUser(user)
        //         setAuth(true);
        //         navigate("/react-core");
        //     }
        // });

        // setEmail("");
        // setPassword("");
        // const customerData = {
        //     email,
        //     password,
        //     history: [],
        //     favorites: [],
        // };
        // if (!localStorage.getItem("appUsers")) {
        //     setCustomerExist(false);
        // }

        // localStorage.setItem("storeData", JSON.stringify(dataArray));
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
            <Button type="submit">Submit</Button>
            {!customerExist && (
                <p className={s.warning}>
                    Customer doesn't exist, please <NavLink to="/react-core/signup">signup</NavLink>
                </p>
            )}
            {!isUserCorrect && (
                <p className={s.warning}>
                    Password incorrect, please try one more time or{" "}
                    <NavLink to="/react-core/signup">signup</NavLink>
                </p>
            )}
        </form>
    );
}

export default LoginPage;
