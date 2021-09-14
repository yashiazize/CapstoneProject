import NewBookingForm from "../Components/NewBookingForm";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const NewBooking = () => {
	return (
		<>
			{/* change the className and image in the css */}
			<Hero hero="chefsHero">
				<Banner title="chef">
					<Link to={"/users/chefs"} className="btn-primary">
						Back to List
					</Link>
				</Banner>
			</Hero>
			<div>
				<NewBookingForm />
			</div>
		</>
	);
};

export default NewBooking;
