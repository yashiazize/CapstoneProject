import ChefDetails from "../Components/ChefDetails";

const Show = ({ chefs }) => {
	return (
		<div>
			<ChefDetails chefs={chefs} />
		</div>
	);
};

export default Show;
