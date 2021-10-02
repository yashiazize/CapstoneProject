import React from "react";
import AddReview from "../Components/AddReview";
import Requests from "../Components/Requests";

const IndexBookings = () => {
	// call the API and get the list of bookings
	// pass into Requests
	return (
		<div>
			List of ALL the bookings in the database
			<Requests />
			<AddReview />
		</div>
	);

};

export default IndexBookings;
