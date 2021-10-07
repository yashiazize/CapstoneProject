import React from "react";
import AddReviewForm from "../Components/AddReviewForm";
import Requests from "../Components/Requests";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const IndexBookings = () => {
	return (
		<div>
			<Hero hero="bookingsHero">
				<Banner title="Bookings"></Banner>
			</Hero>
			<Requests />
			<AddReviewForm />
		</div>
	);
};

export default IndexBookings;
