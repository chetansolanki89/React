import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Address = () => {
  const [data, setData] = useState([]);
  const [cntType, setCntType] = useState("IND");

  const getData = async () => {
    const myAdd = await axios.post("http://localhost:3030/address", {
      data: [
        {
          HNo: "4-3-385",
          Building: "Solanki Brothers",
          StreetNo: "Itwara Road",
          Landmark: "Near Deshmukh Hospital",
          city: "Nanded",
          state: "Maharashtra",
          country: "India",
        },
        {
          HNo: "1-3-58",
          Building: "Chawda Seat Covers",
          StreetNo: "Ganjpara Road",
          Landmark: "Near Baba Ramdeo Mandir",
          city: "Durg",
          state: "Chhattisgarh",
          country: "India",
        },
        {
          HNo: "1/52/844",
          Building: "ABC",
          StreetNo: "12",
          Landmark: "Sector 9",
          city: "NewYork",
          state: "NewYork",
          country: "USA",
        },
        {
          HNo: "12/51/6321",
          Building: "XYZ",
          StreetNo: "52",
          Landmark: "Sector 21",
          city: "California",
          state: "California",
          country: "USA",
        },
      ],
      type: "USA",
    });
    setData(myAdd.data);
  };

  useEffect(() => {
    getData();
  }, [cntType]);
  return (
    <React.Fragment>
      {console.log(data)}
      <Button onClick={() => setCntType("IND")}>India</Button>
      <Button onClick={() => setCntType("USA")}>USA</Button>
      {data.map((item) => (
        <h2>{item}</h2>
      ))}
    </React.Fragment>
  );
};

export default Address;
