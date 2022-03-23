import React, { useState } from "react";

const newUser = {};
function Signup({ predefinedUsers }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsers, setNewuser] = useState([]);
  const [isuser, setIsUser] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adsda");
    predefinedUsers.forEach((element) => {
      if (element.username === username) {
        setIsUser(true);
      } else {
        console.log("here!");
        setNewuser([
          ...predefinedUsers,
          { username: username, password: password },
        ]);
      }
    });
  };

  return (
    <div className="sign-up">
      <form className="signup-name" onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input
          id="name"
          placeholder="name"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label>password</label>
        <input
          id="password"
          type="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isuser ? <div>already a user of same name!</div> : null}
    </div>
  );
}

export default Signup;
