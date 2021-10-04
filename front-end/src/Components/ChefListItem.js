import { Link } from "react-router-dom";

const ChefListItem = ({ chef }) => {
	return (
		<div className="card mb-3 chefs-list-card">
			<div className="row g-0">
				<Link to={`/chefs/${chef.img_url}`}>
					<div className="img-container">
						<img
							src={chef.img_url}
							className="img-fluid rounded-start "
							alt={chef.name}
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">
								{chef.first_name} {chef.last_name}
							</h3>

							<p className="card-text">Cuisine(s): {chef.cuisine}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ChefListItem;
