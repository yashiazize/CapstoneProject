import React from "react";
import AddReview from "../Components/AddReview";
import Requests from "../Components/Requests";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const IndexBookings = () => {
	return (
		<>
			<Hero hero="bookingsHero">
				<Banner title="Bookings"></Banner>
			</Hero>
			<Requests />
			<AddReview />
		</>
	);
};

export default IndexBookings;
