import React, { useState } from "react";
import FormChild from "./FormChild";

const Form = () => {
  // const [data,setData]=useState({username:[],email:[]})
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");

  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleTopic = (e) => setTopic(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);
  const handleSubmit = (event) => {
    alert(
      `Username: ${username}, Email: ${email}, Address: ${address}, Topic: ${topic}, Status: ${status}`
    );

    event.preventDefault();
  };

const handleClick=()=>{
  // localStorage.setItem('username')=[username]
}

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={handleUserName} />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Address: </label>
          <textarea value={address} onChange={handleAddress}></textarea>
        </div>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <label>Status: </label>
          <input
            type="radio"
            name="status"
            value="Inprogress"
            onChange={handleStatus}
          />
          Inprogress <br />
          <input
            type="radio"
            name="status"
            value="Done"
            onChange={handleStatus}
          />
          Done <br />
          <input
            type="radio"
            name="status"
            value="Submitted"
            onChange={handleStatus}
          />
          Submitted <br />
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>

      <br />
      <table border="1px">
        <tr>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
          <th>Topic</th>
          <th>Status</th>
        </tr>
        <FormChild username={username} email={email} address={address} topic={topic} status={status}/>
      </table>
    </React.Fragment>
  );
};

export default Form;
