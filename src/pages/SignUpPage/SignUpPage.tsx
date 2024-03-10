import s from "./SignUpPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { useState } from "react";
import { Box, Container, TextField } from "@mui/material";

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
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className={s.title}>Sign Up</div>
                <form onSubmit={handleSubmit} className={s.elements}>
                    <TextField
                        label="Login"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Enter</Button>
                </form>
            </Box>
        </Container>
    );
}

export default SignUpPage;
