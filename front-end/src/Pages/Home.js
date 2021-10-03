import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Services from "../Components/Services";

const Home = () => {
	return (
		<>
			<Hero>
				<Banner
					title="Savor"
					subtitle='"Cooking is the ultimate giving. - Jamie Oliver"'
				>
					<Link to={"/chefs"} className="btn-primary">
						Our Chefs
					</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
};

export default Home;
