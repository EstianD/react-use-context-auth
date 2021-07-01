import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { login } from "./utils/login";

function Home() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogin() {
    const res = await login();
    console.log("USER: ", res);
    setUser(res);
  }

  return (
    <div>
      <h3>Home</h3>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <div>{user && <pre>{JSON.stringify(user, null, 2)}</pre>}</div>
    </div>
  );
}

export default Home;
