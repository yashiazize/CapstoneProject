import { Link } from "react-router-dom";

const ChefsList = ({ chefs, id }) => {
	return (
		<div>
			{chefs.map((chef) => {
				return (
					<li key={chef.id}>
						<Link to={`/users/chefs/${chef.id}`}>
							{chef.name}
							<br />
							{chef.email}
							<br />
							{chef.cuisine}
						</Link>
					</li>
				);
			})}
		</div>
	);
};

export default ChefsList;
