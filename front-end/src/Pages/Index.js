import ChefsList from "../Components/ChefsList";
import Hero from "../Components/Hero";

const Index = ({ chefs }) => {
	return (
		<>
			<Hero hero="chefsHero" />
			<div>
				<ul>
					<ChefsList chefs={chefs} />
				</ul>
			</div>
		</>
	);
};

export default Index;
