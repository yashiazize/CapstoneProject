import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";
import "./App.css";

import { useAuth } from "./Providers/AuthProvider.js";

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
import AuthProvider from "./Providers/AuthProvider.js";

const API = apiURL();

function App() {
	const currentUser = useAuth();
	const [chefs, setChefs] = useState([]);
	const [starRatings, setStarRatings] = useState([])
	const [ratingAverage, setRatingAverage] = useState([])


	useEffect(() => {
		const fetchAllChefs = async () => {
			try {
				let res = await axios.get(`${API}/users/chefs`);
				setChefs(res.data.payload);
			} catch (err) {
				return err;
			}
		};
const fetchAllRatings = async () => {
	try {
		const getRatings = await axios.get(`${API}/ratings`);
		const getAverage = await axios.get(`${API}/ratings/allAverage`);
		setStarRatings(getRatings.data.payload)
		setRatingAverage(getAverage.data.payload)
	} catch (err){}
}
		fetchAllChefs();
		fetchAllRatings();
	}, []);

	return (
		<div>
			<Router>
				<AuthProvider>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/users/new">
							<NewUser />
						</Route>

						{/* /users/chefs */}
						<Route exact path="/chefs">
							<Index chefs={chefs} starRatings={starRatings} ratingAverage={ratingAverage}/>
						</Route>
						<Route exact path="/chefs/:id">
							<Show chefs={chefs} starRatings={starRatings}/>
						</Route>

						{/* /bookings */}
						<Route exact path="/users/:user_id/bookings">
							<IndexBookings starRatings={starRatings} />
						</Route>
						<Route exact path="/chefs/:chef_id/bookings/new">
							<NewBooking />
						</Route>
						<Route exact path={`/users/${currentUser?.uid}/bookings/:id`}>
							<ShowBookings />
						</Route>

						{/* 404 */}
						<Route path="*">
							<FourOFour />
						</Route>
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
