import {NavLink, useNavigate} from "react-router-dom";
import { Button } from "../../components/Button/Button";
import s from "./SignUpPage.module.css";
import { useEffect, useState } from "react";
import {useActions} from "../../hooks/actions.ts";

// type PropsType = {
// tittle: string;
// submitLogin?: () => void;
// buttonHandler: () => void;
// };
type CustomerDataType = {
    email: string;
    password: string;
    history: string[];
    likes: string[];
};

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerExist, setCustomerExist] = useState(true);
    const { setAuth } = useActions();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("appUsers")) {
            const initialArray: CustomerDataType[] = [];
            localStorage.setItem("appUsers", JSON.stringify(initialArray));
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usersLS: CustomerDataType[] = JSON.parse(localStorage.getItem("appUsers") || "");
        if (usersLS.map((user) => user.email).includes(email)) {
            setCustomerExist(false);
            return;
        }

        const customerData: CustomerDataType = {
            email,
            password,
            history: [],
            likes: [],
        };
        setEmail("");
        setPassword("");

        const dataArray: CustomerDataType[] = [...usersLS, customerData];
        localStorage.setItem("appUsers", JSON.stringify(dataArray));

        localStorage.setItem("LoginedUser", JSON.stringify(customerData));
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
