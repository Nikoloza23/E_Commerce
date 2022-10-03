import { useState } from "react";

import { NavLink } from "react-router-dom";

import { Alert } from "react-bootstrap";

import Home from "../../pages/Home";


import "bootstrap/dist/css/bootstrap.min.css";

//Login Page
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <>
      {home ? (
        <form onSubmit={handleLogin} style={{ boxShadow: "-3px 2px 31px -7px rgba(0, 0, 0, 0.75)", padding: "20px", marginTop: "8rem", marginLeft: "35rem", width: "max-content" }}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block" style={{ marginTop: "10px" }}
          >
            Login
          </button>
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            <div className="go_back">Go back</div>
          </NavLink>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </>
  );
}

export default Login;
