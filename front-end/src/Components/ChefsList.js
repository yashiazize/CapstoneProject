import ChefListItem from "./ChefListItem";

const ChefsList = ({ chefs, ratingAverage }) => {
	
	return (
		<section>
			<div className="chefs-list-container">
				{chefs.map((chef) => {
					return <ChefListItem key={chef.id} chef={chef} ratingAverage={ratingAverage}/>
					;
				})}
			</div>
		</section>
	);
};

export default ChefsList;
