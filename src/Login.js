import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { users, setUsers, isLoggedIn, setIsLoggedIn } = props.data;
    console.log(users);
    if (
      users?.find(
        (user) => user.username === username && user.password === password
      )
    ) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      console.log("rendered");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label>Username:</label>
        <input
          placeholder="enter your name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />
        <button type="submit">Login</button>
        <br />
        Can't Login, <Link to="/signup">Signup</Link> here!
      </form>
    </div>
  );
}

export default Login;
