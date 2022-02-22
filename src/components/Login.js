import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" placeholder="Username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
