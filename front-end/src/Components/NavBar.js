import React, { useState } from "react";
import { Link } from "react-router-dom";
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
					<Link to={"/"}>
						<h1 className="nav-logo">Savor</h1>
					</Link>
					<button type="button" className="nav-btn" onClick={handleToggle}>
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
				<ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}>
					<li>
						<Link to={"/users/chefs"}>Chefs</Link>
					</li>
					<li>
						<button className="lgnBtn" onClick={() => setModalOpen(!modalOpen)}>Login</button>
					</li>
					<li>
						<Link to={"/"} onClick={signOut}>
							Logout
						</Link>
					</li>
					<li>
						<Link to={"/bookings/:id"}>Requests</Link>
					</li>
				</ul>
					{/* <p> Hi, {currentUser && currentUser.email} </p>					 */}
			</div>
			{modalOpen ? <LoginForm setModalOpen={setModalOpen}/> : null}
		</nav>
	);
};

export default NavBar;
