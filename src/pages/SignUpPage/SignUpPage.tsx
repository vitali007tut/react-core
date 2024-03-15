import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import s from "./SignUpPage.module.css";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/actions.ts";
import {IUser} from "../../models/models.ts";

// type PropsType = {
// tittle: string;
// submitLogin?: () => void;
// buttonHandler: () => void;
// };
// type CustomerDataType = {
//     email: string;
//     password: string;
//     history: string[];
//     favorites: string[];
// };

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerExist, setCustomerExist] = useState(true);
    const { setAuth } = useActions();
    const navigate = useNavigate();
    const { addLoginedUser } = useActions();

    useEffect(() => {
        if (!localStorage.getItem("appUsers")) {
            const initialArray: IUser[] = [];
            localStorage.setItem("appUsers", JSON.stringify(initialArray));
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usersLS: IUser[] = JSON.parse(localStorage.getItem("appUsers") || "");
        if (usersLS.map((user) => user.email).includes(email)) {
            setCustomerExist(false);
            return;
        }

        const customerData: IUser = {
            email,
            password,
            history: [],
            favorites: [],
        };
        setEmail("");
        setPassword("");

        const dataArray: IUser[] = [...usersLS, customerData];
        localStorage.setItem("appUsers", JSON.stringify(dataArray));

        // localStorage.setItem("LoginedUser", JSON.stringify(customerData));
        addLoginedUser(customerData)
        setAuth(true);
        navigate("/react-core");
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.title}>Sign Up</div>
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setCustomerExist(true);
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
                }}
                pattern="\D{3,}"
                required
            />
            <Button type="submit">Submit</Button>
            {!customerExist && (
                <p className={s.warning}>
                    Customer exists, please <NavLink to="/react-core/login">login</NavLink>
                </p>
            )}
        </form>
    );
}

export default SignUpPage;
