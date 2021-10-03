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
						alt={chef.name}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">
							<Link to={`/chefs/${chef.id}`}>
								{chef.first_name} {chef.last_name}
							</Link>
						</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<p className="card-text">Cuisine(s): {chef.cuisine}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefListItem;
