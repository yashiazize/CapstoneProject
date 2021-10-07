import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Requests from "../Components/Requests";

const ShowBookings = () => {
	return (
		<div>
			Show Bookings for a user
			<Requests />
			<Hero hero="chefsHero">
				<Banner title="HEY!!!"></Banner>
			</Hero>
		</div>
	);
};

export default ShowBookings;
