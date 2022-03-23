import React, { useEffect, useState } from "react";
import axios from "axios";
import { createStore } from "redux";

let store;

function Rendercurrent({ city }) {
  const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?";
  const apiKey = "66a7f418666e3343bf74a4eb230b25ff";
  const apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather";

  const [info, setInfo] = useState(null);
  const [tempdata, settempdata] = useState(null);
  // const reducer = () => {
  //   if (info) {
  //     return info;
  //   }
  // };

  const getData = async () => {
    const { data } = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
      },
    });
    setInfo({ lat: data[0].lat, lon: data[0].lon });
  };
  const getWeather = async () => {
    if (!city) {
      return <div>Loading!</div>;
    }
    const { data } = await axios.get(apiUrlWeather, {
      params: {
        lat: info?.lat,
        lon: info?.lon,
        appid: apiKey,
      },
    });
    console.log(data);
    settempdata(data);
  };
  useEffect(() => {
    const timekey = setTimeout(() => {
      getData();
    }, 2000);
    return () => clearTimeout(timekey);
  }, [city]);

  useEffect(() => {
    getWeather();
    console.log("fired!");
  }, [info]);

  if (!info || !tempdata) {
    return <div>Loading</div>;
  }

  return (
    <div className="rendercurrent">
      <h1>{city}</h1>
      <div className="data-temp">Temprature : {tempdata.main.temp} K</div>
      <div className="data-windspeed">
        windspeed : {tempdata.wind.speed} km/hr.
      </div>
    </div>
  );
}

export default Rendercurrent;
// export  store
