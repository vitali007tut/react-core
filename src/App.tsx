import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/Header/Header.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.tsx";

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
                    <Route path="react-core/favorites" element={<FavoritesPage />} />
                    <Route path="react-core/history" element={<HistoryPage />} />
                    <Route path="react-core/details/:id" element={<DetailsPage />} />
                </Routes>
                {/* </div> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
