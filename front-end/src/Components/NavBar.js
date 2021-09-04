import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

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
					<NavLink to={"/"}>Home</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
