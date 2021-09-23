import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Providers/AuthProvider";
import { apiURL } from "../util/apiURL";

let currentU;
const API = apiURL();

const SignUpForm = () => {
  const [checked, setChecked] = useState(false);
  const { signup, currentUser } = useAuth();
  const [authUser, setAuthUser] = useState(currentUser);
  currentU = currentUser;
  const [user, setUser] = useState({
    email: "",
    pw_hash: "",
    first_name: "",
    last_name: "",
    is_chef: false,
    cuisine: "",
    zip_code: "",
    availability: "",
  });

  console.log("signup top", currentUser);

  const addNewUser = async (newUserId) => {
    try {
      await axios.post(`${API}/users`, { id: newUserId, ...user });
      debugger;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (type) => {
    return (e) => setUser({ ...user, [type]: e.target.value });
  };

  const handleCheckBox = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  // useEffect(() => {
  //   setAuthUser(currentUser)
  // }, [currentUser])

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(
      user.email,
      user.password,
      user.first_name,
      user.last_name,
      user.zip_code
    );
    debugger;
    await addNewUser(currentU.uid);
  }

  return (
    <section className="sign-up">
      <div className="signup-container">
        <p className="sign-heading"> Sign Up </p>
        <div className="signup-box">
          <p>First Name</p>
          <div>
            <input
              onChange={handleChange("first_name")}
              type="firstName"
              value={user.first_name}
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="signup-box">
          <p>Last Name</p>
          <div>
            <input
              onChange={handleChange("last_name")}
              type="lastName"
              value={user.last_name}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="signup-box">
          <p>Email</p>
          <div>
            <input
              onChange={handleChange("email")}
              type="email"
              value={user.email}
              placeholder="Enter your E-mail"
            />
          </div>
        </div>
        <div className="signup-box">
          <p>Zip Code</p>
          <div>
            <input
              onChange={handleChange("zip_code")}
              type="zipCode"
              value={user.zip_code}
              placeholder="Enter ZipCode"
            />
          </div>
        </div>
        <div className="signup-box">
          <p> Create Password</p>
          <div>
            <input
              onChange={handleChange("password")}
              type="password"
              value={user.password}
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <div>
          <p>Are you a Chef?</p>
          <input
            onClick={handleCheckBox}
            checked={checked}
            type="checkbox"
            value={"isChef"}
            name="is_chef"
          />
          {checked ? <div> chicken </div> : null}
        </div>
        <button className="signLoginBtn" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default withRouter(SignUpForm);
