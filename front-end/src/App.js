import axios from "axios";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import ShowBookings from "./Pages/ShowBookings.js";
import IndexBookings from "./Pages/IndexBookings.js";
import NewUser from "./Pages/NewUser.js";
import NewBooking from "./Pages/NewBooking.js";
import FourOFour from "./Pages/FourOFour";

const API = apiURL();

function App() {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		const fetchAllChefs = async () => {
			try {
				let res = await axios.get(`${API}/users/chefs`);
				setChefs(res.data.payload);
			} catch (err) {
				return err;
			}
		};
		fetchAllChefs();
	}, []);

	return (
		<div>
			<NavBar />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				{/* /users */}
				<Route exact path="/users/new">
					<NewUser />
				</Route>

				{/* /users/chefs */}
				<Route exact path="/users/chefs">
					<Index chefs={chefs} />
				</Route>
				<Route exact path="/users/chefs/:id">
					<Show chefs={chefs} />
				</Route>

				{/* /bookings */}
				<Route exact path="/bookings">
					<IndexBookings />
				</Route>
				<Route exact path="/bookings/new">
					<NewBooking />
				</Route>
				<Route exact path="/bookings/:id">
					<ShowBookings />
				</Route>

				{/* 404 */}
				<Route path="*">
					<FourOFour />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
