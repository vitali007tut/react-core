import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/Header/Header.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.tsx";
import { ErrorBoundary } from "react-error-boundary";

function App() {
    return (
        <ErrorBoundary fallback={<div>ErrorBoundary: Something went wrong</div>}>
            <BrowserRouter>
                <div className={s.container}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignUpPage />} />
                        <Route path="favorites" element={<FavoritesPage />} />
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="details/:id" element={<DetailsPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
