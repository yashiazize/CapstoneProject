import ChefsList from "../Components/ChefsList";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

const Index = ({ chefs }) => {
	return (
		<>
			<Hero hero="chefsHero">
				<Banner title="our chefs ">
					<Link to={"/bookings/new"} className="btn-primary">
						book a chef
					</Link>
				</Banner>
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
