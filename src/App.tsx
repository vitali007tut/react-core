// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/Header/Header.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {
    // const [count, setCount] = useState(0)
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
                    <Route path="react-core/1" element={<SignUp />} />
                </Routes>
                {/* </div> */}
                {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
