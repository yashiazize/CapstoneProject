import ChefsList from "../Components/ChefsList";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const Index = ({ chefs, starRatings, ratingAverage }) => {
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
					<ChefsList chefs={chefs} starRatings={starRatings} ratingAverage={ratingAverage}/>
				</ul>
			</div>
		</>
	);
};

export default Index;
