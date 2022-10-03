import { useState } from "react";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import { Form } from "react-bootstrap";

import Login from "../login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

//Register Page
function Register({ type }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
      console.log(name, email, password, profession);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  const toaster = () => {
    if (flag) {
      toast.error("Please Required");
    } else {
      toast.error("Please Required");
    }
  };

  return (
    <>
      {login ? (
        <form onSubmit={handleFormSubmit} style={{ boxShadow: "-3px 2px 31px -7px rgba(0, 0, 0, 0.75)", padding: "20px", width: "max-content", marginTop: "8rem", marginLeft: "35rem" }}>
          <h3>Register</h3>
          <div className="form-group" style={{ padding: "5px" }} >
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ padding: "5px" }} >
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group" style={{ padding: "5px" }} >
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group" style={{ padding: "5px" }} >
            <label>Choose your Profession</label>
            <Form.Control
              as="select"
              onChange={(event) => setProfession(event.target.value)}
            >
              <option>Select</option>
              <option>UI/UX</option>
              <option>Front-End</option>
              <option>Back-End</option>
              <option>Full Stack</option>
            </Form.Control>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={toaster}
            style={{ marginTop: "10px" }}
          >
            Register
          </button>
          <ToastContainer />
          <p onClick={handleClick} className="forgot-password text-right">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Already registered log in?
            </NavLink>
          </p>
        </form>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Register;
