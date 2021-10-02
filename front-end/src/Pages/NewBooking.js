import BookingForm from "../Components/BookingForm";
import { Link } from "react-router-dom";

const NewBooking = () => {
	return (
		<div>
			<Link to={"/chefs"} className="btn-primary">
				Back to List
			</Link>
			<div>
				<BookingForm />
			</div>
		</div>
	);
};

export default NewBooking;
