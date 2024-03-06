import { useState } from "react";
import s from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

type CustomerDataType = {
    email: string;
    password: string;
    history: string[];
    likes: string[];
};

function LoginPage(/* props: PropsType */) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const customerData = {
        //     email,
        //     password,
        //     history: [],
        //     likes: [],
        // };
        setEmail("");
        setPassword("");
        let dataArray: CustomerDataType[] = [];

        const retString = localStorage.getItem("storeData") || "";
        const retArray = JSON.parse(retString);

        dataArray = retArray;

        dataArray.map((e) => {
            if (email === e.email && password === e.password) {
                console.log("customer exists");
                navigate("/react-core");
                localStorage.setItem("logined", "true");
            }
        });
        // localStorage.setItem("storeData", JSON.stringify(dataArray));
    };

    return (
        <div className={s.container}>
            <div className={s.title}>Login</div>
            <form onSubmit={handleSubmit} className={s.elements}>
                <label>
                    Enter your login:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Enter your password:
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Enter</button>
            </form>
        </div>
    );
}

export default LoginPage;
