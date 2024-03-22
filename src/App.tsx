import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage/HistoryPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
import { ErrorBoundary } from "react-error-boundary";

function App() {
    return (
        <ErrorBoundary fallback={<div>ErrorBoundary: Something went wrong</div>}>
            <BrowserRouter>
                <div className={s.container}>
                    <Header />
                    <Suspense fallback={<div>Loading....</div>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="signup" element={<SignUpPage />} />
                            <Route path="favorites" element={<FavoritesPage />} />
                            <Route path="history" element={<HistoryPage />} />
                            <Route path="details/:id" element={<DetailsPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
