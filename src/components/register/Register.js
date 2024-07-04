import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css";

const Register = () => {
  const [loginPage, setLoginPage] = useState(true);

  const fileInputRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        console.log(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const heading = loginPage ? "Login" : "Create new account";

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className=" login-left"></div>
        <div className=" login-right">
          <h2 style={{ fontSize: "25px" }}>{heading}</h2>

          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="login-input"
              type="text"
              placeholder="Email"
            />

            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="login-input"
              type="text"
              placeholder="Password"
            />

            {!loginPage && (
              <>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Company Name"
                />
                <input
                  className="login-input"
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <input
                  className="login-input"
                  type="button"
                  value="Select your logo"
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                />
              </>
            )}

            <input className="login-input login-btn" type="submit" />
          </form>

          <button
            onClick={() => setLoginPage(!loginPage)}
            className="toggle-link"
          >
            {loginPage
              ? "New User? Create New Account"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
