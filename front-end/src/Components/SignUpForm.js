import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Providers/AuthProvider";
import { apiURL } from "../util/apiURL";
import ChefInfo from "./ChefInfo";

let currentU;
const API = apiURL();

const SignUpForm = () => {
	const [checked, setChecked] = useState(false);
	const { signup, currentUser } = useAuth();

	currentU = currentUser;
	let history = useHistory();
	const [user, setUser] = useState({
		email: "",
		first_name: "",
		last_name: "",
		is_chef: false,
		cuisine: "",
		zip_code: "",
		availability: "",
	});

	const addNewUser = async (newUserId) => {
		try {
			await axios.post(`${API}/users`, { id: newUserId, ...user });
		} catch (error) {
			return error;
		}
	};

	const handleChange = (type) => {
		return (e) => setUser({ ...user, [type]: e.target.value });
	};

	const handleCheckBox = () => {
		setChecked((prevChecked) => !prevChecked);
	};

	async function handleSubmit(e) {
		e.preventDefault();
		await signup(
			user.email,
			user.password,
			user.first_name,
			user.last_name,
			user.zip_code
		);
		await addNewUser(currentU.uid);
		history.push("/");
	}

	return (
		<>
			<p className="sign-heading"> Sign Up </p>
			<div className="first_last">
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
				<h5>
					{" "}
					<input
						onClick={handleCheckBox}
						checked={checked}
						type="checkbox"
						value={"isChef"}
						name="is_chef"
					/>
					I am a Chef
				</h5>
				{checked ? (
					<div>
						{" "}
						<ChefInfo handleChange={handleChange} />{" "}
					</div>
				) : null}
			</div>
			<button className="signLoginBtn" onClick={handleSubmit}>
				Sign Up
			</button>
		</>
	);
};

export default withRouter(SignUpForm);
