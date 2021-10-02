import { Link } from "react-router-dom";
import imageChef from "../Images/bkgnd-lukas-blazek-unsplash.jpg";

const ChefListItem = ({ chef }) => {
	return (
		<div className="card mb-3 chefs-list-card">
			<div className="row g-0">
				<div className="img-container">
					{/* col-md-4 */}
					<img
						src={imageChef}
						className="img-fluid rounded-start "
						alt={chef.first_name}
					/>
				</div>
				<div className="col-md-8">
					<Link to={`/users/chefs/${chef.id}`}>
						<div className="card-body">
							<h3 className="card-title">
								{chef.first_name} {chef.last_name}
							</h3>
							<p className="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
							<hr />
							<p className="card-text">Cuisine(s): {chef.cuisine}</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ChefListItem;
