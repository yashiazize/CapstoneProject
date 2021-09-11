import { withRouter } from "react-router-dom";
import BookingCal from "./BookingCal";

// user can select chef from a dropdown menu, and select dates here
// OR
// chef and dates are passed in from the ChefDatails Calendar.

const NewBookingForm = () => {
	return (
		<section>
			<form>
				<h1>Form to book a chef here</h1>
				<BookingCal />
				<button className="btn-primary" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default withRouter(NewBookingForm);
