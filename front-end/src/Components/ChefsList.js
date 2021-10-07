import ChefListItem from "./ChefListItem";
// import RatingItem from "./RatingItem"

const ChefsList = ({ chefs, starRatings }) => {
	return (
		<section>
			<div className="chefs-list-container">
				{chefs.map((chef) => {
					return <ChefListItem key={chef.id} chef={chef} starRatings={starRatings}/>;
				})}

				{/* {starRatings.map((starRating) => {
					return <RatingItem key={starRating.id} starRating={starRating}/> 
				})}		 */}
			</div>
		</section>
	);
};

export default ChefsList;
