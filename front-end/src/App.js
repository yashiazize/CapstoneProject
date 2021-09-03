import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import ShowBookings from "./Pages/ShowBookings.js";
import IndexBookings from "./Pages/IndexBookings.js";

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
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					{/* list of chefs */}
					<Route exact path="/users/chefs">
						<Index chefs={chefs} />
					</Route>
					{/* single chef */}
					<Route exact path="/users/chefs/:id">
						<Show chefs={chefs} />
					</Route>
					<Route exact path="/bookings">
						<IndexBookings />
					</Route>
					<Route exact path="/bookings/:id">
						<ShowBookings />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
