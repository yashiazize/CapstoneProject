import { withRouter } from "react-router-dom";

const NewBookingForm = () => {
	return (
		<section>
			<form>
				<h1>Form to book a chef here</h1>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default withRouter(NewBookingForm);
