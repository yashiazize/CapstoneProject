import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaHome } from "react-icons/fa";
import { signOut } from "../Services/Firebase";
import { useAuth } from "../Providers/AuthProvider";
import LoginForm from "./LoginForm";

const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const { currentUser } = useAuth();

	const handleToggle = () => {
		setToggleMenu((isOpen) => !isOpen);
	};

	return (
		<nav className="navBar">
			<div className="nav-center">
				<div className="nav-header">
					{/* replace this home icon with the Logo Image  */}
					<NavLink to={"/"}>
						<FaHome className="nav-icon" />
					</NavLink>
					<button type="button" className="nav-btn" onClick={handleToggle}>
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
				<ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}>
					<li>
						<NavLink to={"/users/chefs"}>Chefs</NavLink>
					</li>

					<li>
						<NavLink to={"/bookings/:id"}>Requests</NavLink>
					</li>
					{/* <div className={toggleLogIn ? "nav-links show-nav" : "nav-links"}> */}
					<button className="btn-primary" type="button">
						<li onClick={() => setModalOpen(!modalOpen)}>Login</li>
					</button>

					{/* if currentUser.uid => show logout button and show hello user */}

					<button className="lgnBtn" type="button">
						<li>
							{/* Hello user {currentUser && currentUser.uid} */}
							<NavLink to={"/"} onClick={signOut}>
								Logout
							</NavLink>
						</li>
					</button>
				</ul>
				{currentUser && currentUser.uid}
			</div>
			{modalOpen ? <LoginForm setModalOpen={setModalOpen} /> : null}
		</nav>
	);
};

export default NavBar;
