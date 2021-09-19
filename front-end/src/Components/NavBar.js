import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaHome } from "react-icons/fa";
import { signOut } from "../Services/Firebase";
import { useAuth } from "../Providers/AuthProvider";

const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { currentUser } = useAuth();
	console.log( currentUser)
	const handleToggle = () => {
		setToggleMenu((isOpen) => !isOpen);
	};
	
	return (
		<nav className="navBar">
			{/* <p> Hello, {currentUser && currentUser.email}</p> */}
			<div className="navBar-center">
				<div className="navBar-header">
					{/* replace this home icon with the Logo Image  */}
					<NavLink to={"/"}>
						<FaHome className="navBar-icon" />
					</NavLink>
					<button type="button" className="navBar-btn" onClick={handleToggle}>
						<FaAlignRight className="navBar-icon" />
					</button>
				</div>
				<ul className={toggleMenu ? "navBar-links show-navBar" : "navBar-links"}>
					<li>
						<NavLink to={"/users/chefs"}>Chefs</NavLink>
					</li>
					<li>
						<NavLink to={"/users/login"}>Login</NavLink>
					</li>
					<li>
						<NavLink to={"/"} onClick={signOut}>
							Logout
						</NavLink>
					</li>
					<li>
						<NavLink to={"/bookings/:id"}>Requests</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
