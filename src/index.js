import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
const predefinedUsers = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App predefinedUsers={predefinedUsers} />} />
      <Route
        path="/signup"
        element={<Signup predefinedUsers={predefinedUsers} />}
      />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
