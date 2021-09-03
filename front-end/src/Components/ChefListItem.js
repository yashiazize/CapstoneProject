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
				<p>
					Chef bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis sequi odio suscipit ea similique nobis.
				</p>
			</div>
		</div>
	);
};

export default ChefListItem;
