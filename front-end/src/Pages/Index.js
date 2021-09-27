import ChefsList from "../Components/ChefsList";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const Index = ({ chefs }) => {
	return (
		<>
			<Hero hero="chefsHero">
				<Banner
					title="our chefs"
					subtitle='"People who love to eat are always the best people. - Julia Childs"'
				></Banner>
			</Hero>
			<div>
				<ul>
					<ChefsList chefs={chefs} />
				</ul>
			</div>
		</>
	);
};

export default Index;
