import { Link } from "react-router-dom";

const ChefListItem = ({ chef }) => {
	return (
		<div className="card">
			<div>
				<Link to={`/users/chefs/${chef.id}`}>
					<h4>image of chef here</h4>
				</Link>
			</div>
			<div>
				<h3>{chef.name}</h3>
				<p>Cuisine(s): {chef.cuisine}</p>
			</div>
		</div>
	);
};

export default ChefListItem;
