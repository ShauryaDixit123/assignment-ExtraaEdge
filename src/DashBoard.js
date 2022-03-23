import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Rendercurrent from "./Rendercurrent";
import Renderthreedays from "./Renderthreedays";
import "./Dashboard.css";

function DashBoard() {
  const [city, setCity] = useState(null);
  console.log(city);
  return (
    <div className="dashboard-container">
      <SearchBar setCity={setCity} />
      <div className="display-weather">
        <div className="current">
          <Rendercurrent city={city} />
        </div>
        <div className="threedays">
          <Renderthreedays city={city} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
