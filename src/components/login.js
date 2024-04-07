import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    //handle states here...
  };

  return (
    <div>
      <p>email</p>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log("email changes", e.target.value);
        }}
      />
      <p>password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log("password changes", e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        submit
      </button>
      <div>
        <p>entered email: {""}</p>
        <p>entered password: {""}</p>
      </div>
    </div>
  );
};

export default Login;
