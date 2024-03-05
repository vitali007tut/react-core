import { useState } from "react";

function LoginPage() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`The name you entered was: ${email}  ${password}`)
  }
    
    return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label>Enter your password:
            <input 
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
      <input type="submit" />
    </form>
    )
}

export default LoginPage;
