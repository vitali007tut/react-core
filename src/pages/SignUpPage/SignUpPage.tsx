import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import s from "./SignUpPage.module.css";
import { useState } from "react";
import { useActions } from "../../hooks/actions";
import { IUser } from "../../models/models";
import { isUserExists } from "../../hooks/lsService";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerExist, setCustomerExist] = useState(true);
    const { setAuth, addUserToDB } = useActions();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isUserExists(email)) {
            setCustomerExist(false);
            return;
        }

        setAuth(true);
        const customerData: IUser = {
            email,
            password,
            history: [],
            favorites: [],
        };
        addUserToDB(customerData);
        navigate("/");
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
                    Customer exists, please <NavLink to="/login">login</NavLink>
                </p>
            )}
        </form>
    );
}

export default SignUpPage;
