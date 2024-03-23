import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "./hooks/themeContext";
import CircularColor from "./components/CircularColor/CircularColor.tsx";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider>
                <Suspense fallback={<CircularColor />}>
                    <App />
                </Suspense>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
);
