import { withRouter } from "react-router-dom";
import BookingCal from "./BookingCal";
import { Link } from "react-router-dom";

// user can select dates here
// OR
// dates are passed in from the ChefDatails Calendar

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
			<br />
			<div>
				{/* have to link to individual chef id */}
				<Link to={`/users/chefs/`}>
					<button className="btn-primary" type="button">
						Back
					</button>
				</Link>
			</div>
			<br />
		</section>
	);
};

export default withRouter(NewBookingForm);
