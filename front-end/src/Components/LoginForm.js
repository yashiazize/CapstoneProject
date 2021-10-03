import React, { useRef, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { Link, useHistory } from "react-router-dom";


const LoginForm = ({ setModalOpen }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      console.log(loading);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
      alert(error);
    }
    setLoading(false);
  }
  
  return (
    <div onClick={() => setModalOpen(false)} id="login-modal">
      <section onClick={(e) => e.stopPropagation()} className="login">
        <div className="login-container">
          <h2 className="login-heading">Log In</h2>
          <div className="login-box">
            <p>Email</p>
            <div>
              <input type="email" ref={emailRef} required />
            </div>
          </div>
          <div className="login-box">
            <p>Password</p>
            <div>
              <input type="password" ref={passwordRef} required />
            </div>
            <button className="loginBtn" onClick={handleSubmit} >
              Log In
            </button>
          </div>
          <div className="textOne">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <p className="textTwo">
            Dont have an account? <Link to="/users/new">Sign up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
