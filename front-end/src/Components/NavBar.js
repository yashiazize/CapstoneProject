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
						<button className="lgnBtn" onClick={() => setModalOpen(!modalOpen)}>Login</button>
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
			{modalOpen ? <LoginForm setModalOpen={setModalOpen}/> : null}
		</nav>
	);
};

export default NavBar;
