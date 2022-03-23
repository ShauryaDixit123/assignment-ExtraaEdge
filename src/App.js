import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

function App({ predefinedUsers }) {
  const [users, setUsers] = useState(predefinedUsers);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = {
    users,
    setUsers,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <div>
      {isLoggedIn ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <Login data={data} />
        </>
      )}
    </div>
  );
}

export default App;
