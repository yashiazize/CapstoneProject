import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../images/logo.svg";
import { FaAlignRight, FaHome } from "react-icons/fa";

const NavBar = () => {
	// toggle the navbar
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggle = () => {
		setToggleMenu((isOpen) => !isOpen);
	};

	return (
		<nav className="navbar">
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
						<NavLink to={"/users/login"}>Login</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Requests</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
