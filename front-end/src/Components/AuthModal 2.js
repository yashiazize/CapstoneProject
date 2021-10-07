import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthModal = ({ setModalOpen }) => {
  const [authState, setAuthState] = useState("login");

  return (
    <div onClick={() => setModalOpen(false)} id="login-modal">
      <section onClick={(e) => e.stopPropagation()} className="login">
        <div className="login-container">
          <h2 className="login-heading">
            {authState === "login" ? "Log In" : "Sign Up"}
          </h2>
          {authState === "login" ? <LoginForm /> : <SignUpForm />}
          <div className="formModalToggle">
            <p className="loginQuestion">
              {authState === "login"
                ? "Dont have an account?"
                : "Already have an account?"}
            </p>
            <span
              className="signupOrLogin"
              onClick={
                authState === "login"
                  ? () => setAuthState("signup")
                  : () => setAuthState("login")
              }
            >
              {authState === "login" ? "Sign Up" : "Log In"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthModal;
