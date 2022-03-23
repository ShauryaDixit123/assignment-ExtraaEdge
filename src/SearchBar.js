import React, { useEffect, useState } from "react";
import Rendercurrent from "./Rendercurrent";
import Renderthreedays from "./Renderthreedays";

function SearchBar({ setCity }) {
  const [data, setData] = React.useState([
    "Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Bangalore",
  ]);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <h1>Select City!</h1>
      <input
        type="text"
        list="data"
        onChange={(e) => {
          setSelectedValue(e.target.value);
          setData([...data, e.target.value]);
          setCity(e.target.value);
        }}
      />

      <datalist id="data">
        {data.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default SearchBar;
