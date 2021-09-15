import React, { useRef, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../Services/Firebase";
import "../Styles/SignUpForm.css";

export default function Login() {
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
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<section className="sign-up">
			<div className="modal fade">
				<h2>Log In</h2>
				<div>
					<p>Email</p>
					<input type="email" ref={emailRef} required />
				</div>
				<div>
					<p>Password</p>
					<input type="password" ref={passwordRef} required />
					<button onClick={handleSubmit}>Log In</button>
				</div>
				<div>
					<Link to="/forgot-password">Forgot Password?</Link>
				</div>
				<div>
					Need an account? <Link to="/users/new">Sign Up</Link>
				</div>
				<button onClick={signInWithGoogle}>Sign in With google</button>
				<p className="text">
					Dont have an account? <Link to="/users/new">Sign up</Link>
				</p>
			</div>
		</section>
	);
}
