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
					subtitle="testing what the subtitle looks like"
				>
					<Link to={"/users/chefs"} className="btn-primary">
						our chefs
					</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
};

export default Home;
