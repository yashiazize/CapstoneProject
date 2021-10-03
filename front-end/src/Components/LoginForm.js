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
		<section>
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
				<button className="loginBtn" onClick={handleSubmit}>
					Log In
				</button>
			</div>
		</section>
	);
};

export default LoginForm;
