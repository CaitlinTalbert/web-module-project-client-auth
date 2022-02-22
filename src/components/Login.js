import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(cred);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/login", cred)
      .then((resp) => {
        localStorage.setItem("token", resp.data.payload);
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
