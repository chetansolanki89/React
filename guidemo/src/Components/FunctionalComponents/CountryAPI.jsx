import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryAPI = () => {
  const [data, setData] = useState([]);
  const callData = async () => {
    const result = await axios.get(
      "https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json"
    );
    // console.log(result.data);
    setData(result.data);
  };
  console.log("Data====>", data);
  const filteredData = data.filter(
    (item) => item.population > 500000 && item.name!=="India" && item.name!=="United States of America"
  );
  console.log("Filtered:====>", filteredData);

  useEffect(() => {
    callData();
  }, []);
  return (
    <div>
      <h1>Country API</h1>
      <table>
        <tr>
          <th>Country</th>
          <th>Population</th>
          <th>Latitutde</th>
          <th>Longitude</th>
          <th>Currencies</th>
        </tr>
        {filteredData.map((elem) => {
          return (
            <tr>
              <td>{elem.name}</td>
              <td>{elem.population}</td>
              <td>{elem.latlng[0]}</td>
              <td>{elem.latlng[1]}</td>
              <td>{elem.currencies.map((item) => item.name)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CountryAPI;
