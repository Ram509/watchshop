import React, { useState } from "react";
// import PageNav from "../Components/PageNav";
import "../Css/Login.css";

const LoginSignup = () => {
  // State to toggle between login and signup screens
  const [isLogin, setIsLogin] = useState(false);

  // Form states for email and password
  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission for signup
  const handleSignupSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Simple validation
    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    // Perform actions such as form validation, API calls, etc.
    console.log({
      name,
      email,
      password,
    });
    alert("Sign-Up Successful!");

    // Reset the form
    setName("");
    setEmail("");
    setPassword("");
  };

  // Handle form submission for login
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Simple validation
    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    // Perform login actions such as API calls, etc.
    console.log({
      name,
      email,
      password,
    });
    alert("Login Successful!");

    // Reset the form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
     

      <div className="loginsignup">
        <div className="loginsignup-container">
          {isLogin ? (
            // Login Screen
            <>
              <h1>Login</h1>
              <form onSubmit={handleLoginSubmit}>
                <div className="loginsignup-fields">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">Login</button>
              </form>

              <p className="loginsignup-login">
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Sign Up here
                </span>
              </p>
            </>
          ) : (
            // Sign-Up Screen
            <>
              <h1>Sign Up</h1>
              <form onSubmit={handleSignupSubmit}>
                <div className="loginsignup-fields">
                <input
                    type="name"
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">Continue</button>
              </form>

              <p className="loginsignup-login">
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Login here
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
