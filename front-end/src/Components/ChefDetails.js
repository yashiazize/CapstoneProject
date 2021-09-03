import { Link } from "react-router-dom";

const ChefDetails = ({ chefs }) => {
	return (
		<div>
			chef profile details, calendar for bookings, rating, bio
			<div>
				<Link to={`/users/chefs`}>
					<button type="button" className="btn btn-primary">
						Back
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ChefDetails;
