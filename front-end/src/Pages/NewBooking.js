import BookingForm from "../Components/BookingForm";
import { Link } from "react-router-dom";

const NewBooking = () => {
	return (
		<section className="new-booking">
			<Link to={"/users/chefs"} className="btn-primary stick">
				Back to List
			</Link>
			<div>
				<BookingForm />
			</div>
		</section>
	);
};

export default NewBooking;
