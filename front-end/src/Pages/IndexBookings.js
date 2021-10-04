import React from "react";
import AddReviewForm from "../Components/AddReviewForm";
import Requests from "../Components/Requests";

const IndexBookings = () => {
	// call the API and get the list of bookings
	// pass into Requests
	return (
		<div>
			<Requests />
			<AddReviewForm />
		</div>
	);
};

export default IndexBookings;
