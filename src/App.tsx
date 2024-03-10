import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/Header/Header.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";

function App() {
    // const logined = localStorage.getItem('logined') || ''

    return (
        <BrowserRouter>
            <div className={s.container}>
                <Header />
                {/* <div className={s.itemsContainer}> */}
                <Routes>
                    <Route path="react-core/" element={<MainPage />} />
                    <Route path="react-core/login" element={<LoginPage />} />
                    <Route path="react-core/signup" element={<SignUpPage />} />
                </Routes>
                {/* </div> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
