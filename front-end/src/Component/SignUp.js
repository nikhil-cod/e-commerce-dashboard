import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async () => {
    const postObj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(postObj, "postobj");
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify(postObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div>
      <div className="register w-50">
        <h1 className="mx-4">Register</h1>
        <input
          type="text"
          value={name}
          class="form-control inputBox"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="text"
          class="form-control inputBox"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          class="form-control inputBox"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn appButton mx-4"
          style={{ color: "white", backgroundColor: "lightgreen" }}
          onClick={collectData}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
