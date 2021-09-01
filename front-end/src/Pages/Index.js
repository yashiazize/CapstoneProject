import ChefsList from "../Components/ChefsList";

const Index = ({ chefs }) => {
	return (
		<div>
			<ul>
				<ChefsList chefs={chefs} />
			</ul>
		</div>
	);
};

export default Index;
