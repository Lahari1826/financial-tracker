import React, { useState } from "react";

const mockUser = { username: "user", password: "pass" };

function Login({ setUser }) {
  const [login, setLogin] = useState({ username: "", password: "" });

  function handleLogin(e) {
    e.preventDefault();
    if (
      login.username === mockUser.username &&
      login.password === mockUser.password
    ) {
      setUser({ username: login.username });
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          placeholder="Username"
          value={login.username}
          onChange={(e) =>
            setLogin({ ...login, username: e.target.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          value={login.password}
          onChange={(e) =>
            setLogin({ ...login, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;