// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import s from "./App.module.css";

import Button from "@mui/material/Button";
import ButtonUsage from "./Test.tsx";
import Header from "./components/Header/Header.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={s.container}>
      <Header />
      <div className={s.itemsContainer}>
        <Button variant="contained">With styled-components</Button>
        <ButtonUsage />
      </div>
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
  );
}

export default App;
