import ChefListItem from "./ChefListItem";

const ChefsList = ({ chefs, id }) => {
	return (
		<div>
			{chefs.map((chef) => {
				return (
					<div>
						{chefs.map((chef) => {
							return <ChefListItem key={chef.id} chef={chef} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default ChefsList;