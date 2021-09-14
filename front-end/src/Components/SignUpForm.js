import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
// import "../Styles/SignUpForm.css";
import { useAuth } from '../Providers/AuthProvider'


const SignUpForm = () => {
  const [checked, setChecked] = useState(false);
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()  
  const passwordRef = useRef()
  const zipcodeRef = useRef()
  const { signup, currentUser } = useAuth()
  
  const handleCheckBox = () => {
    setChecked((prevChecked) => !prevChecked);
  };

function handleSubmit(e) {
  e.preventDefault()

  signup(emailRef.current.value, passwordRef.current.value, firstnameRef.current.value,lastnameRef.current.value,zipcodeRef.current.value)
}

  return (
    <section className="sign-up">
      {currentUser && currentUser.email}
      <div className="signup-container">
        <p className="sign-heading"> Sign Up </p>
        <div className="signup-box">
          <p>First Name</p>
          <div>
            <input type="firstName" ref={firstnameRef} name="" id="" placeholder="First Name" />
          </div>
        </div>
        <div className="signup-box">
          <p>Last Name</p>
          <div>
            <input type="lastName" ref={lastnameRef}name="" id="" placeholder="Last Name" />
          </div>
        </div>
        <div className="signup-box">
          <p>Email</p>
          <div>
            <input type="email" ref={emailRef}name="" id="" placeholder="Enter your E-mail" />
          </div>
        </div>
        <div className="signup-box">
          <p>Zip Code</p>
          <div>
            <input type="zipCode" ref={zipcodeRef}name="" id="" placeholder="Enter ZipCode" />
          </div>
        </div>
        <div className="signup-box">
          <p> Create Password</p>
          <div>
            <input
              ref={passwordRef}
              type="password"
              name=""
              id=""
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
            value="Chef"
            name="is_chef"
          />
          {checked ? <div> chicken </div> : null}
        </div>
        <button className="loginBtn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </section>
  );
};

export default withRouter(SignUpForm);
