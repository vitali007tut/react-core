import { useState } from "react";
import s from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.tsx";
import { Box, Container, TextField } from "@mui/material";

type CustomerDataType = {
    email: string;
    password: string;
    history: string[];
    likes: string[];
};

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("handleSubmit");
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
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className={s.title}>Login</div>
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

export default LoginPage;
