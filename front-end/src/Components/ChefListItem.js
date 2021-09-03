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
				<h5>{chef.name}</h5>
				<p>Chef bio here</p>
				<p>{chef.cuisine}</p>
			</div>
		</div>
	);
};

export default ChefListItem;

{
	/* <li key={chef.id}>
	<Link to={`/users/chefs/${chef.id}`}>
		{chef.name}
		<br />
		{chef.email}
		<br />
		{chef.cuisine}
	</Link>
</li>; */
}
