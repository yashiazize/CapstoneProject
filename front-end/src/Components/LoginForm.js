import React, { useRef, useState } from "react"
import { useAuth } from "../Providers/AuthProvider"
import { Link, useHistory } from "react-router-dom"
import { signInWithGoogle } from "../Services/Firebase";


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <section>
      <div className="container">
        <p className="heading"> Login </p>
          <h2>Log In</h2>
              <p>Email</p>
              <input type="email" ref={emailRef} required />

              <p>Password</p>
              <input type="password" ref={passwordRef} required />
              <button className="loginBtn" onClick={handleSubmit}>Log In</button>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/users/new">Sign Up</Link>
      </div>
        <button className="loginBtn" onClick={signInWithGoogle}>Sign in With google</button>
        <p className="text">
          {" "}
          Dont have an account? <Link to="/users/new">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

