import s from "../CommonInputPage/CommonPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { useState } from "react";

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

function SignUpPage(/* props: PropsType */) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const customerData = {
            email,
            password,
            history: [],
            likes: [],
        };
        setEmail("");
        setPassword("");
        let dataArray: CustomerDataType[] = [];

        const retString = localStorage.getItem("storeData") || "";
        const retArray = JSON.parse(retString);

        dataArray = retArray;
        dataArray.push(customerData);
        dataArray.map((e) => console.log(e));
        localStorage.setItem("storeData", JSON.stringify(dataArray));
    };

    return (
        <div className={s.container}>
            <div className={s.title}>Sign Up</div>
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
                <Button type="submit">Enter</Button>
            </form>
        </div>
    );
}

export default SignUpPage;
