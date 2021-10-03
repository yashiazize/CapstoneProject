import { Link } from "react-router-dom";

const ChefListItem = ({ chef }) => {
	return (
		<div className="card mb-3 chefs-list-card">
			<div className="row g-0">
				<Link to={`/chefs/${chef.id}`}>
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
							<h3 className="card-title">
								{chef.first_name} {chef.last_name}
							</h3>
							<p className="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
							<p className="card-text">Cuisine(s): {chef.cuisine}</p>
						</div>

					</div>
				</Link>
			</div>
		</div>
	);
};

export default ChefListItem;
