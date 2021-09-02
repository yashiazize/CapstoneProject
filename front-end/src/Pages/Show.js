import ChefDetails from "../Components/ChefDetails"
const Show = ({ chefs }) => {
	return <div>Show Page -- single chef
		<ChefDetails chefs={chefs} />
	</div>;
};
/*
passing in chefdetails through show pg
*/

export default Show;
