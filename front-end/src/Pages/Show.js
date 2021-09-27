import ChefDetails from "../Components/ChefDetails";

const Show = ({ chefs }) => {
	return (
		<>
			<section className="single-chef">
				<ChefDetails chefs={chefs} />
			</section>
		</>
	);
};

export default Show;
